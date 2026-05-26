"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Calculator,
  PiggyBank,
  Activity,
  Brain,
  TrendingUp,
  ArrowRight,
  Wallet,
  Moon,
  BarChart3,
} from "lucide-react";

const tools = [
  { title: "BMI Calculator", icon: <HeartPulse />, category: "Health" },
  { title: "Sleep Calculator", icon: <Moon />, category: "Health" },
  { title: "SIP Calculator", icon: <PiggyBank />, category: "Finance" },
  { title: "Retirement Planner", icon: <Wallet />, category: "Finance" },
  { title: "Calorie Calculator", icon: <Activity />, category: "Health" },
  { title: "Focus Score", icon: <Brain />, category: "Productivity" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold">
            HealthWealth<span className="text-cyan-400">Tools</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-slate-300">
            <a href="#tools">Tools</a>
            <a href="#categories">Categories</a>
            <Link href="https://wellfilab.com" target="_blank">
              WellFiLab
            </Link>
          </nav>

          <button className="rounded-full bg-cyan-400 px-5 py-2 text-black font-semibold">
            Browse Tools
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-16 px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-6 inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Free online calculators
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            Simple tools for
            <span className="text-cyan-400"> Health & Finance</span>
          </h1>

          <p className="mt-6 text-slate-400">
            Instant calculators and planners to help you make better decisions about your body, money, and productivity.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-full bg-cyan-400 px-7 py-4 font-semibold text-black">
              Explore Tools
            </button>

            <Link
              href="https://wellfilab.com"
              className="rounded-full border border-white/10 px-7 py-4"
              target="_blank"
            >
              Go to WellFiLab
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="grid grid-cols-2 gap-4">
            <Stat title="Calculators" value="50+" />
            <Stat title="Finance" value="20+" />
            <Stat title="Health" value="25+" />
            <Stat title="Free Tools" value="100%" />
          </div>

          <div className="mt-6 space-y-3">
            {["Finance", "Health", "Productivity"].map((c) => (
              <div key={c} className="flex justify-between text-slate-400">
                <span>{c}</span>
                <span>Growing</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Calculators
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((t) => (
            <div
              key={t.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-cyan-400 mb-4">{t.icon}</div>
              <div className="text-xs text-cyan-300 mb-2">{t.category}</div>
              <h3 className="text-xl font-semibold">{t.title}</h3>
              <p className="mt-3 text-slate-400">Open calculator →</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <p className="text-slate-400">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  );
}