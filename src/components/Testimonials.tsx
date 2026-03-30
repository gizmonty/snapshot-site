const quotes = [
  {
    text: "I get paid biweekly but pay rent on the 1st. Snapshot's paycheck planner finally answered the question I've been asking for years.",
    name: "Pau",
    role: "Alpha Tester",
  },
  {
    text: "The snapshot ritual is weirdly satisfying. It's like a financial check-up that takes 5 minutes and actually makes me feel in control.",
    name: "Kehom",
    role: "Alpha Tester",
  },
  {
    text: "I track my Klarna payments, US credit cards, and Mexican bank accounts all in one place. Nothing else does this.",
    name: "Early User",
    role: "Multi-Currency User",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What early users say</h2>
          <p className="text-text-secondary text-lg">Real feedback from alpha testers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q.name} className="bg-bg-card border border-white/5 rounded-2xl p-6">
              <p className="text-text-secondary text-sm leading-relaxed mb-6">"{q.text}"</p>
              <div>
                <p className="font-semibold text-sm">{q.name}</p>
                <p className="text-xs text-muted">{q.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
