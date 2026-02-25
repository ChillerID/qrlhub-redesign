import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Cpu,
  GitBranch,
  Globe,
  Sparkles,
  ArrowRight,
  Activity,
  HelpCircle,
  BookOpen,
} from "lucide-react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-7xl mx-auto px-6">{children}</div>;
}

// ================= LANGUAGE CONFIG =================
const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fi", label: "Suomi" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "ja", label: "日本語" },
];

// ================= LANGUAGE SELECTOR =================
function LanguageSelector() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("en");

  const current = LANGUAGES.find((l) => l.code === selected);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 hover:text-white transition"
      >
        <Globe className="w-4 h-4" />
        {current?.label} ▾
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-44 rounded-xl bg-slate-900 border border-slate-800 shadow-xl z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelected(lang.code);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm transition ${
                selected === lang.code
                  ? "bg-slate-800 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function QRLHubHomepage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600/40">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
        <Container>
          <div className="py-4 flex items-center justify-between">
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold tracking-tight text-white">
                QRL Hub
              </span>
              <span className="text-xs text-slate-400">
                Independent Community Site
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <a href="#research" className="hover:text-white transition">Home</a>
              <a href="#research" className="hover:text-white transition">QRL Story</a>
              <a href="#network" className="hover:text-white transition">QRL FAQ</a>
              <a href="#developers" className="hover:text-white transition">Quantum News</a>
              <a href="#ecosystem" className="hover:text-white transition">Qubit Tracker</a>
              <a href="#ecosystem" className="hover:text-white transition">QRL 2.0</a>

             <LanguageSelector />

              <a
                href="https://theqrl.org"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-5 py-2 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/40 transition"
              >
                Official Site → theqrl.org
              </a>
            </nav>
          </div>
        </Container>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Darker left gradient like screenshot */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,rgba(59,130,246,0.35),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.18),transparent_45%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

        <Container>
          <div className="relative py-16 md:py-20 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold tracking-tight leading-tight"
              >
                Welcome to QRL Hub
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="mt-6 text-lg text-slate-300 max-w-2xl"
              >
                Your source for quantum computing threats, blockchain security,
                and the quantum‑resistant future of cryptocurrency — centered on
                the Quantum Resistant Ledger (QRL).
              </motion.p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-blue-600 hover:bg-blue-500 px-6 py-3 text-white shadow-lg shadow-blue-600/40 hover:shadow-blue-500/70 transition flex items-center gap-2">
                  Explore Quantum News <ArrowRight className="w-4 h-4" />
                </button>

                <button className="rounded-2xl bg-amber-400 hover:bg-amber-300 px-6 py-3 text-slate-900 font-semibold shadow-xl shadow-amber-400/50 hover:shadow-amber-300/80 transition flex items-center gap-2">
                  Explore QRL 2.0 <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                  Updated Feb 16, 2026
                </span>
                <span>Educational content • Community maintained</span>
              </div>
            </div>

            {/* Right Info Card */}
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-[32px] border border-slate-800 bg-slate-900/70 backdrop-blur-xl shadow-2xl shadow-blue-900/30 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Sparkles className="w-4 h-4" />
                    Post‑Quantum Security
                  </div>

                  <h3 className="mt-3 text-xl font-semibold text-white">
                    Designed for the quantum era
                  </h3>

                  <p className="mt-3 text-sm text-slate-400">
                    QRL launched in 2018 with XMSS hash‑based signatures — built
                    for long‑term cryptographic resilience.
                  </p>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Mainnet Since", value: "2018" },
                      { label: "Core", value: "QRL 1.x" },
                      { label: "Next", value: "QRL 2.0" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl bg-slate-800 border border-slate-700 p-3"
                      >
                        <p className="text-xs text-slate-500">
                          {item.label}
                        </p>
                        <p className="font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="/qrl-logo.png"
                        alt="Official QRL Logo"
                        className="w-36 h-36 object-contain"
                      />
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-400">
                          Official Project
                        </span>
                        <span className="text-sm font-medium text-white">
                          theqrl.org
                        </span>
                      </div>
                    </div>

                    <a
                      href="https://theqrl.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm shadow-lg shadow-blue-600/40 transition"
                    >
                      Visit Official Site
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= RESEARCH ================= */}
      <section id="research" className="py-20 border-t border-slate-800">
        <Container>
          <h2 className="text-3xl font-bold text-white mb-12">Why Post‑Quantum Matters Now</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Hardware Progress", icon: Cpu },
              { title: "Public Key Exposure", icon: Activity },
              { title: "Migration Lag", icon: GitBranch },
              { title: "Defense From Genesis", icon: Shield },
            ].map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-7 h-7 text-blue-400 drop-shadow-[0_6px_18px_rgba(59,130,246,0.6)]" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <p className="text-sm text-slate-400">
                  Understanding quantum impact and long‑term blockchain security implications.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= QRL APPROACH ================= */}
      <section className="py-20 border-t border-slate-800">
        <Container>
          <h2 className="text-3xl font-bold text-white mb-12">The QRL Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Mainnet Since 2018", icon: Shield },
              { title: "XMSS Signatures", icon: Sparkles },
              { title: "Straight Answers", icon: HelpCircle },
            ].map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-emerald-400/40 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-7 h-7 text-emerald-400 drop-shadow-[0_6px_18px_rgba(16,185,129,0.6)]" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <p className="text-sm text-slate-400">Post‑quantum security designed from day one.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= NEWS ================= */}
      <section className="py-20 border-t border-slate-800">
        <Container>
          <h2 className="text-3xl font-bold text-white mb-12">Quantum News & Analysis</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Hardware Threshold Update", icon: Activity },
              { title: "Migration Reality Check", icon: BookOpen },
              { title: "Qubit Tracker", icon: Cpu },
            ].map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-indigo-400/40 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-7 h-7 text-indigo-400 drop-shadow-[0_6px_18px_rgba(99,102,241,0.6)]" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <p className="text-sm text-slate-400">Latest research and ecosystem developments.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 border-t border-slate-800">
        <Container>
          <h2 className="text-3xl font-bold text-white mb-12">The Questions Crypto Avoids</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {["What is the migration plan?","How long do upgrades take?","Can legacy chains pivot safely?","Why is crypto structurally exposed?"].map((item)=> (
              <div key={item} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= NETWORK ================= */}
      <section id="network" className="py-20 border-t border-slate-800">
        <Container>
          <h2 className="text-3xl font-bold text-white mb-12">Network Snapshot</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "XMSS Security Model", icon: Shield },
              { title: "RandomX Proof‑of‑Work", icon: Cpu },
              { title: "EVM‑Compatible QRL 2.0", icon: GitBranch },
            ].map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-amber-400/40 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-7 h-7 text-amber-400 drop-shadow-[0_6px_18px_rgba(251,191,36,0.6)]" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= DEVELOPERS ================= */}
      <section id="developers" className="py-20 border-t border-slate-800">
        <Container>
          <h2 className="text-3xl font-bold text-white mb-12">Developers & Community</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Documentation", icon: BookOpen },
              { title: "GitHub", icon: GitBranch },
              { title: "Community", icon: Globe },
            ].map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-blue-400/40 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-7 h-7 text-blue-400 drop-shadow-[0_6px_18px_rgba(59,130,246,0.6)]" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <p className="text-sm text-slate-400">Explore resources and join the ecosystem.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 py-16 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} QRL Hub — Independent Community Resource.</p>
        <p className="mt-2">Not the official site. Visit theqrl.org for the official project.</p>
      </footer>

    </div>
  );
}
