"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type Message = {
  role: "user" | "assistant";
  content: string;
};

// Parse assistant message to render markdown links as Next.js <Link>
function renderMessage(text: string) {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    const match = part.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      const [, label, href] = match;
      const isExternal = href.startsWith("http");
      return isExternal ? (
        <a key={i} href={href} target="_blank" rel="noreferrer"
          className="underline underline-offset-2 text-blue-600 hover:text-blue-800 font-medium">
          {label}
        </a>
      ) : (
        <Link key={i} href={href}
          className="underline underline-offset-2 text-blue-600 hover:text-blue-800 font-medium">
          {label}
        </Link>
      );
    }
    // Render newlines
    return part.split("\n").map((line, j, arr) => (
      <span key={`${i}-${j}`}>{line}{j < arr.length - 1 && <br />}</span>
    ));
  });
}

const SUGGESTIONS = [
  "Quels sont tes projets ML ?",
  "What's your tech stack?",
  "Tu cherches un stage ?",
  "Tell me about the NHL project",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Bonjour 👋 Je suis l'assistant de Gabriel. Pose-moi n'importe quelle question sur son parcours, ses projets ou ses compétences ! / Hi! I'm Gabriel's AI assistant. Ask me anything about his background, projects or skills!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    setInput("");

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      const reply = data.reply ?? "Désolé, une erreur s'est produite.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      if (!open) setUnread((n) => n + 1);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "❌ Erreur de connexion. Réessaie dans un instant." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── Chat panel ── */}
      <div
        className="fixed bottom-20 right-4 z-50 flex flex-col transition-all duration-300 ease-out"
        style={{
          width: open ? "min(360px, calc(100vw - 2rem))" : 0,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
        }}
      >
        <div className="flex flex-col rounded-2xl border border-udem-blue/20 bg-white shadow-[0_16px_48px_rgba(11,17,58,0.16)] overflow-hidden"
          style={{ height: 460 }}>

          {/* Header */}
          <div className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-udem-blue to-blue-600 text-white shrink-0">
            <div className="relative">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                GF
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-white" />
            </div>
            <div className="flex-1 leading-tight">
              <p className="text-sm font-semibold">Gabriel Ferreira</p>
              <p className="text-[10px] opacity-75">Assistant IA · répond instantanément</p>
            </div>
            <button onClick={() => setOpen(false)}
              className="rounded-lg p-1 hover:bg-white/20 transition-colors text-white/80 hover:text-white">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                {m.role === "assistant" && (
                  <div className="h-6 w-6 rounded-full bg-udem-blue text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 mr-2">
                    GF
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-udem-blue text-white rounded-br-sm"
                      : "bg-white border border-udem-blue/10 text-slate-800 rounded-bl-sm shadow-sm"
                  }`}
                >
                  {m.role === "assistant" ? renderMessage(m.content) : m.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="h-6 w-6 rounded-full bg-udem-blue text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 mr-2">
                  GF
                </div>
                <div className="bg-white border border-udem-blue/10 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <div className="flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="h-1.5 w-1.5 rounded-full bg-udem-blue/50"
                        style={{ animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions (only at start) */}
          {messages.length === 1 && (
            <div className="px-3 py-2 flex flex-wrap gap-1.5 border-t border-slate-100 shrink-0 bg-white">
              {SUGGESTIONS.map((s) => (
                <button key={s} onClick={() => send(s)}
                  className="text-[11px] rounded-full border border-udem-blue/20 bg-udem-mist px-2.5 py-1 text-udem-blue hover:border-udem-blue/50 hover:bg-blue-50 transition-colors">
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-2.5 border-t border-slate-100 bg-white shrink-0">
            <div className="flex gap-2 items-center rounded-xl border border-udem-blue/20 bg-slate-50 px-3 py-2 focus-within:border-udem-blue/50 transition-colors">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); } }}
                placeholder="Pose ta question..."
                className="flex-1 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || loading}
                className="h-7 w-7 rounded-lg bg-udem-blue text-white flex items-center justify-center disabled:opacity-40 hover:bg-blue-700 transition-colors shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/>
                </svg>
              </button>
            </div>
            <p className="mt-1.5 text-[10px] text-slate-400 text-center">
              Propulsé par Claude · Assistant IA de Gabriel
            </p>
          </div>
        </div>
      </div>

      {/* ── Toggle button (bottom-left, always visible) ── */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5 rounded-2xl border border-udem-blue/20 bg-white px-4 py-2.5 shadow-[0_8px_24px_rgba(11,17,58,0.14)] hover:shadow-[0_10px_28px_rgba(11,17,58,0.20)] transition-all duration-200 hover:-translate-y-0.5"
        style={{ animation: "fade-in 0.5s ease 1s both" }}
      >
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="h-7 w-7 rounded-full bg-udem-blue text-white text-[11px] font-bold flex items-center justify-center">
            GF
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-green-400 border border-white" />
        </div>

        {/* Label */}
        <div className="leading-tight">
          <p className="text-xs font-semibold text-udem-navy">Ask Gabriel</p>
          <p className="text-[10px] text-udem-navy/50">Assistant IA</p>
        </div>

        {/* Unread badge */}
        {unread > 0 && (
          <span className="h-5 w-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
            {unread}
          </span>
        )}

        {/* Open/close chevron */}
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
          className="text-udem-navy/40 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50%       { transform: translateY(-4px); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
