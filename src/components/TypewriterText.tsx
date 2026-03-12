"use client";

import { useEffect, useState } from "react";

const WORDS = ["Data Science", "NLP", "Machine Learning", "Web"];

const TYPE_SPEED   = 80;   // ms per char typing
const DELETE_SPEED = 45;   // ms per char deleting
const PAUSE_AFTER  = 1800; // ms pause after full word

export default function TypewriterText() {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx,   setWordIdx]   = useState(0);
  const [deleting,  setDeleting]  = useState(false);
  const [pausing,   setPausing]   = useState(false);

  useEffect(() => {
    const current = WORDS[wordIdx];

    if (pausing) {
      const t = setTimeout(() => { setPausing(false); setDeleting(true); }, PAUSE_AFTER);
      return () => clearTimeout(t);
    }

    if (!deleting) {
      // Typing
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), TYPE_SPEED);
        return () => clearTimeout(t);
      } else {
        setPausing(true);
      }
    } else {
      // Deleting
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), DELETE_SPEED);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % WORDS.length);
      }
    }
  }, [displayed, wordIdx, deleting, pausing]);

  return (
    <span className="inline-flex items-center">
      <span
        className="text-udem-blue font-semibold"
        style={{ minWidth: "1ch" }}
      >
        {displayed}
      </span>
      {/* Blinking cursor */}
      <span
        className="ml-0.5 inline-block w-0.5 rounded-full bg-udem-blue"
        style={{
          height: "1em",
          animation: "blink 1s step-end infinite",
          verticalAlign: "middle",
        }}
      />
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </span>
  );
}