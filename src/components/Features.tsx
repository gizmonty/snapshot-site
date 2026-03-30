const features = [
  {
    icon: "📸",
    title: "The Snapshot Ritual",
    description: "5 minutes, full clarity. Walk through your accounts, bills, debts, and subscriptions. See exactly where your money stands — no bank sync required.",
    highlight: "Manual means intentional. You stay conscious of every dollar.",
  },
  {
    icon: "🤖",
    title: "Snappy AI Coach",
    description: "Your personal finance companion that actually knows your numbers. Adherence scores, pattern detection, actionable advice — not generic tips.",
    highlight: "Powered by Claude. Costs ~$0.01 per briefing.",
  },
  {
    icon: "🏆",
    title: "Gamification That Matters",
    description: "XP, levels, streaks, flash challenges, 27 achievements across 4 tiers. You're not getting points for spending — you're leveling up for being aware.",
    highlight: "Solo Leveling for your finances.",
  },
  {
    icon: "💰",
    title: "Paycheck Planner",
    description: "Maps every obligation to the paycheck that covers it. Biweekly earners see exactly which bills come from which check — including bonus paycheck months.",
    highlight: "Never wonder 'can I afford this before payday?' again.",
  },
  {
    icon: "🕐",
    title: "Pay Over Time Tracking",
    description: "Klarna, Affirm, Afterpay — track every installment. Check off payments as they clear. Progress bars show how close you are to done.",
    highlight: "Per-installment tracking, not just a lump balance.",
  },
  {
    icon: "🌍",
    title: "Multi-Currency",
    description: "20 currencies supported. Mix USD and MXN accounts, track credit cards in different currencies, FX rates at snapshot time.",
    highlight: "Built for people who live across borders.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to see the full picture</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">Not another budgeting app. Snapshot is a financial awareness system that makes you want to check in.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-bg-card border border-white/5 rounded-2xl p-6 hover:border-accent/20 transition-all group">
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">{f.description}</p>
              <p className="text-xs text-accent/80 font-medium">{f.highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
