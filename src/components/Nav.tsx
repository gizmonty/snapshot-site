"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <span className="text-lg font-bold tracking-tight">Snapshot</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-text-secondary hover:text-white transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-sm text-text-secondary hover:text-white transition-colors">How It Works</Link>
          <Link href="/pricing" className="text-sm text-text-secondary hover:text-white transition-colors">Pricing</Link>
          <Link href="/about" className="text-sm text-text-secondary hover:text-white transition-colors">About</Link>
          <a href="https://app.takesnapshot.com" className="px-4 py-2 rounded-full bg-accent text-bg text-sm font-semibold hover:bg-accent/90 transition-colors">
            Try the App
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <div className="w-5 flex flex-col gap-1">
            <span className={`h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg-card border-t border-white/5 px-6 py-4 space-y-3">
          <Link href="#features" onClick={() => setOpen(false)} className="block text-sm text-text-secondary">Features</Link>
          <Link href="#how-it-works" onClick={() => setOpen(false)} className="block text-sm text-text-secondary">How It Works</Link>
          <Link href="/pricing" onClick={() => setOpen(false)} className="block text-sm text-text-secondary">Pricing</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block text-sm text-text-secondary">About</Link>
          <a href="https://app.takesnapshot.com" className="block text-center px-4 py-2 rounded-full bg-accent text-bg text-sm font-semibold">Try the App</a>
        </div>
      )}
    </nav>
  );
}
