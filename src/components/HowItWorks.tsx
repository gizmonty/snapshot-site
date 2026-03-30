const steps = [
  {
    num: "01",
    title: "Set up your world",
    description: "Add your accounts, bills, credit cards, loans, subscriptions, and income. Snappy walks you through it in about 5 minutes.",
    detail: "12-step guided wizard with preset suggestions for common bills and subscriptions.",
  },
  {
    num: "02",
    title: "Take a snapshot",
    description: "Open each account, enter the current balance, mark what's paid. The wizard calculates your free cash flow in real time.",
    detail: "8 steps: Debits → Bills → Credits → Loans → Pay Over Time → Subscriptions → Review → Save.",
  },
  {
    num: "03",
    title: "See the full picture",
    description: "Cash flow waterfall, debt breakdown, credit utilization, comparison with your last snapshot. Everything in one glance.",
    detail: "Snappy analyzes your data and gives you an adherence score with actionable advice.",
  },
  {
    num: "04",
    title: "Level up",
    description: "Every snapshot earns XP. Maintain streaks. Complete flash challenges. Unlock achievements. Your financial awareness becomes a game.",
    detail: "27 achievements, 4 tiers, flash challenges with time limits, and a player profile that tracks it all.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Snapshot works</h2>
          <p className="text-text-secondary text-lg">Four steps to financial clarity. Repeat every paycheck.</p>
        </div>

        <div className="space-y-12">
          {steps.map((step, i) => (
            <div key={step.num} className="flex gap-6 md:gap-8">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">{step.num}</span>
                </div>
                {i < steps.length - 1 && <div className="w-px h-full bg-white/5 mx-auto mt-2" />}
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-2">{step.description}</p>
                <p className="text-xs text-muted">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
