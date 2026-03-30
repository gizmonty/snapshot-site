import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snapshot — Your Finances, Gamified",
  description: "Take a snapshot of your finances. See the full picture. Level up. The personal finance app that turns financial awareness into a game you actually want to play.",
  keywords: ["personal finance", "budgeting app", "financial tracking", "gamification", "money management", "debt payoff", "net worth tracker"],
  openGraph: {
    title: "Snapshot — Your Finances, Gamified",
    description: "The personal finance app that turns financial awareness into a game you actually want to play.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snapshot — Your Finances, Gamified",
    description: "Take a snapshot. See the full picture. Level up.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
