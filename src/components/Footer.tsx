import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl">⚡</span>
          <span className="font-bold">Snapshot</span>
          <span className="text-xs text-muted ml-2">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-text-secondary">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <a href="https://snapshot-ashen-six.vercel.app" className="hover:text-accent transition-colors">Launch App</a>
        </div>
      </div>
    </footer>
  );
}
