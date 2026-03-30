import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to start tracking your finances.",
    features: [
      "Unlimited snapshots",
      "Up to 5 accounts",
      "Up to 10 bills & 3 credit cards",
      "Cash flow waterfall",
      "Upcoming payments calendar",
      "1 Snappy AI briefing per day",
      "Flash challenges & basic achievements",
      "Mobile app (iOS)",
    ],
    cta: "Get Started Free",
    href: "https://app.takesnapshot.com",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "/month",
    yearlyPrice: "$39.99/yr",
    description: "Full power for serious financial planning.",
    features: [
      "Everything in Free, plus:",
      "Unlimited accounts, bills, credits, loans",
      "Pay Over Time installment tracking",
      "Paycheck Planner",
      "Forecast & debt payoff engine",
      "What-if scenarios",
      "Full analytics & budget trending",
      "Unlimited Snappy AI briefings",
      "Multi-currency support (20 currencies)",
      "Data export (CSV/PDF)",
    ],
    cta: "Start Pro Trial",
    href: "https://app.takesnapshot.com",
    highlight: true,
  },
  {
    name: "Elite",
    price: "$9.99",
    period: "/month",
    yearlyPrice: "$79.99/yr",
    description: "Automation and social features for power users.",
    features: [
      "Everything in Pro, plus:",
      "Plaid bank sync (auto-import balances)",
      "Real-time FX rates",
      "Social features & leaderboards",
      "Health pillar (coming soon)",
      "Custom themes",
      "Priority support",
    ],
    cta: "Coming Soon",
    href: "#",
    highlight: false,
    comingSoon: true,
  },
];

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, honest pricing</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Start free. Upgrade when you need more power. No surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  tier.highlight
                    ? "bg-bg-card border-2 border-accent/30 glow"
                    : "bg-bg-card border border-white/5"
                }`}
              >
                {tier.highlight && (
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full self-start mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span className="text-text-secondary text-sm">{tier.period}</span>
                </div>
                {tier.yearlyPrice && (
                  <p className="text-xs text-muted mb-4">or {tier.yearlyPrice} (save 33%)</p>
                )}
                <p className="text-sm text-text-secondary mb-6">{tier.description}</p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="text-accent mt-0.5 shrink-0">✓</span>
                      <span className="text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.href}
                  className={`block text-center py-3 rounded-full font-semibold text-sm transition-all ${
                    tier.highlight
                      ? "bg-accent text-bg hover:bg-accent/90"
                      : tier.comingSoon
                      ? "bg-white/5 text-muted cursor-not-allowed"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted">
              All plans include the mobile app. Prices in USD. Cancel anytime.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
