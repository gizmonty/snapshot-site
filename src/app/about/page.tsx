import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Snapshot</h1>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">The problem</h2>
              <p>
                Most people know they should track their finances. Most people don't.
                Not because they're lazy — because the tools are either too complex (spreadsheets, YNAB)
                or too passive (Mint syncs your bank and shows you what already happened).
              </p>
              <p className="mt-3">
                There's no ritual. No moment of clarity. No reason to come back tomorrow.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">The idea</h2>
              <p>
                What if checking your finances felt like leveling up a character?
                What if there was a 5-minute ritual — a "snapshot" — that gave you complete clarity
                on where your money stands, what's due, and how much you can actually spend?
              </p>
              <p className="mt-3">
                Snapshot is built on one belief: <span className="text-white font-medium">awareness is the first step to control</span>.
                You don't need to automate everything. You need to see everything, clearly, regularly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">How it works</h2>
              <p>
                Every paycheck (or whenever you want), you take a snapshot. You open each account,
                enter the balance, mark what's paid. The app calculates your free cash flow,
                tracks your debt, and shows you a waterfall of where every dollar goes.
              </p>
              <p className="mt-3">
                Then Snappy — your AI companion — analyzes the data and gives you a score,
                highlights what improved, flags what needs attention, and suggests one action.
              </p>
              <p className="mt-3">
                Along the way, you earn XP, maintain streaks, complete flash challenges,
                and unlock achievements. Your financial awareness becomes a game — one you actually want to play.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Privacy first</h2>
              <p>
                Snapshot doesn't connect to your bank. That's not a limitation — it's a feature.
                Manual entry means you stay conscious of every number. Your data lives in a secure
                PostgreSQL database. We don't sell it, share it, or use it for anything except
                making the app work for you.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">The vision</h2>
              <p>
                Finance is just the first pillar. Snapshot is designed to be a personal life operating system —
                "Solo Leveling for Your Life." Future pillars include health tracking, social features
                (friend leaderboards, guilds), and more. Each pillar gets its own XP, achievements,
                and challenges. Your player profile ties it all together.
              </p>
              <p className="mt-3">
                Snappy evolves from a finance coach into a cross-pillar dungeon master
                who knows your whole picture.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Built by</h2>
              <p>
                Snapshot is an indie project built with care. Next.js, React Native (Expo),
                Supabase, Prisma, Claude AI, and a lot of late nights.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <a href="https://snapshot-ashen-six.vercel.app" className="inline-flex px-8 py-3.5 rounded-full bg-accent text-bg font-bold text-base hover:bg-accent/90 transition-all glow-sm">
              Try Snapshot Free →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
