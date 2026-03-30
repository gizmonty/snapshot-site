export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
          <span>⚡</span> Now in Alpha — Join the early access
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Your finances,<br />
          <span className="text-gradient">gamified.</span>
        </h1>

        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Take a snapshot of your finances. See the full picture. Level up.
          The personal finance ritual that turns awareness into a game you actually want to play.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://snapshot-ashen-six.vercel.app" className="px-8 py-3.5 rounded-full bg-accent text-bg font-bold text-base hover:bg-accent/90 transition-all glow-sm hover:glow">
            Try Snapshot Free →
          </a>
          <a href="#how-it-works" className="px-8 py-3.5 rounded-full border border-white/10 text-text-secondary font-medium text-base hover:border-white/20 hover:text-white transition-all">
            See How It Works
          </a>
        </div>

        {/* App preview mockup */}
        <div className="mt-16 relative">
          <div className="bg-bg-card border border-white/10 rounded-2xl p-6 md:p-8 glow max-w-3xl mx-auto">
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-bg-surface rounded-xl p-4 text-center">
                <p className="text-xs text-muted mb-1">Cash</p>
                <p className="text-lg font-bold text-accent">$4,230</p>
              </div>
              <div className="bg-bg-surface rounded-xl p-4 text-center">
                <p className="text-xs text-muted mb-1">Debt</p>
                <p className="text-lg font-bold text-danger">$12,450</p>
              </div>
              <div className="bg-bg-surface rounded-xl p-4 text-center">
                <p className="text-xs text-muted mb-1">FCF</p>
                <p className="text-lg font-bold text-accent">$1,105</p>
              </div>
              <div className="bg-bg-surface rounded-xl p-4 text-center">
                <p className="text-xs text-muted mb-1">Level</p>
                <p className="text-lg font-bold text-yellow-400">7</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-bg-surface rounded-xl p-4">
              <span className="text-2xl">🤖</span>
              <div>
                <p className="text-sm font-medium">Snappy</p>
                <p className="text-xs text-text-secondary">"Nice work — your credit utilization dropped 4% this cycle. Keep that momentum going!"</p>
              </div>
            </div>
          </div>
          {/* Gradient fade at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg to-transparent" />
        </div>
      </div>
    </section>
  );
}
