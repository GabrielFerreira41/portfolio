import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio Gabriel Ferreira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-udem-navy`}
  >
        <header className="sticky top-0 z-50">
          <div className="border-b border-udem-blue/10 bg-white/65 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
              <Link href="/" className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-udem-blue/15 bg-white/80 text-sm font-semibold text-udem-blue shadow-[0_6px_16px_rgba(11,17,58,0.06)]">
                  GF
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-udem-navy">Gabriel Ferreira</p>
                  <p className="text-xs text-udem-navy/60">Portfolio • Data Science / AI</p>
                </div>
              </Link>

              <nav className="hidden items-center gap-2 md:flex">
                <Link href="/projets-universitaires" className="rounded-xl px-3 py-2 text-sm text-udem-navy/75 hover:bg-udem-mist hover:text-udem-navy">
                  Projets uni
                </Link>
                <Link href="/projets-personnels" className="rounded-xl px-3 py-2 text-sm text-udem-navy/75 hover:bg-udem-mist hover:text-udem-navy">
                  Projets perso
                </Link>
                <Link href="/sport" className="rounded-xl px-3 py-2 text-sm text-udem-navy/75 hover:bg-udem-mist hover:text-udem-navy">
                  Sport
                </Link>
                <Link href="/futur" className="rounded-xl px-3 py-2 text-sm text-udem-navy/75 hover:bg-udem-mist hover:text-udem-navy">
                  Futur
                </Link>
                <a
                  href="/cv.pdf"
                  download="Gabriel_Ferreira_CV.pdf"
                  className="ml-2 inline-flex items-center justify-center rounded-xl bg-udem-blue px-4 py-2 text-sm font-medium text-white shadow-[0_10px_22px_rgba(0,87,172,0.22)] hover:opacity-95"
                >
                  CV
                </a>
              </nav>

              <details className="relative md:hidden">
                <summary className="list-none rounded-xl border border-udem-blue/15 bg-white/80 px-3 py-2 text-sm font-medium text-udem-blue shadow-[0_6px_16px_rgba(11,17,58,0.06)]">
                  Menu
                </summary>
                <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-udem-blue/15 bg-white/90 backdrop-blur-md shadow-[0_12px_34px_rgba(11,17,58,0.14)]">
                  <div className="flex flex-col p-2">
                    <Link href="/projets-universitaires" className="rounded-xl px-3 py-2 text-sm text-udem-navy/75 hover:bg-udem-mist hover:text-udem-navy">
                      Projets uni
                    </Link>
                    <Link href="/projets-personnels" className="rounded-xl px-3 py-2 text-sm text-udem-navy/75 hover:bg-udem-mist hover:text-udem-navy">
                      Projets perso
                    </Link>
                    <Link href="/sport" className="rounded-xl px-3 py-2 text-sm text-udem-navy/75 hover:bg-udem-mist hover:text-udem-navy">
                      Sport
                    </Link>
                    <Link href="/futur" className="rounded-xl px-3 py-2 text-sm text-udem-navy/75 hover:bg-udem-mist hover:text-udem-navy">
                      Futur
                    </Link>
                    <a
                      href="/cv.pdf"
                      download="Gabriel_Ferreira_CV.pdf"
                      className="mt-1 rounded-xl bg-udem-blue px-3 py-2 text-sm font-medium text-white shadow-[0_10px_22px_rgba(0,87,172,0.22)] hover:opacity-95"
                    >
                      Télécharger CV
                    </a>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
