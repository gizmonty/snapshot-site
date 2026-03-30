export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-bg-card border border-accent/20 rounded-3xl p-10 md:p-14 glow">
          <span className="text-5xl mb-6 block">⚡</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to see the full picture?</h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Join the alpha. Set up your accounts, take your first snapshot, and start leveling up your financial awareness.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://snapshot-ashen-six.vercel.app" className="px-8 py-3.5 rounded-full bg-accent text-bg font-bold text-base hover:bg-accent/90 transition-all glow-sm">
              Start Free →
            </a>
            <a href="/pricing" className="px-8 py-3.5 rounded-full border border-white/10 text-text-secondary font-medium text-base hover:border-white/20 hover:text-white transition-all">
              View Pricing
            </a>
          </div>
          <p className="text-xs text-muted mt-6">Free forever for core features. No credit card required.</p>
        </div>
      </div>
    </section>
  );
}
