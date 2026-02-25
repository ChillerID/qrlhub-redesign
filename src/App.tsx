import React from "react";
import { Analytics } from "@vercel/analytics/react";
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

// ================= MOBILE MENU =================
function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-slate-300 hover:text-white transition"
      >
        ☰
      </button>

      {open && (
        <div className="absolute right-0 mt-4 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-xl z-50 p-4 space-y-3 text-sm">
          <a href="#research" className="block text-slate-300 hover:text-white">Home</a>
          <a href="#about" className="block text-slate-300 hover:text-white">About</a>
          <a href="#research" className="block text-slate-300 hover:text-white">QRL Story</a>
          <a href="#network" className="block text-slate-300 hover:text-white">QRL FAQ</a>
          <a href="#developers" className="block text-slate-300 hover:text-white">Quantum News</a>
          <a href="#ecosystem" className="block text-slate-300 hover:text-white">Qubit Tracker</a>
          <a href="#ecosystem" className="block text-slate-300 hover:text-white">QRL 2.0</a>

          <div className="pt-3 border-t border-slate-800 space-y-3">
            <LanguageSelector />

            <a
                href="https://theqrl.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm shadow-lg shadow-blue-600/40 transition text-center"
              >
                Official Site → theqrl.org
              </a>
          </div>
        </div>
      )}
    </div>
  );
}

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

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <a href="#research" className="hover:text-white transition">Home</a>
              <a href="#about" className="hover:text-white transition">About</a>
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
                className="ml-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm shadow-lg shadow-blue-600/40 transition"
              >
                Official Site → theqrl.org
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <MobileMenu />
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
                className="relative rounded-[32px] border border-slate-800 bg-slate-900/70 backdrop-blur-xl shadow-2xl shadow-blue-900/30"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Sparkles className="w-4 h-4" />
                    Post‑Quantum Security
                  </div>

                  <h3 className="mt-3 text-xl font-semibold text-white">
                    Quantum-Safe Cryptocurrency: $QRL
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

                  <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm shadow-lg shadow-blue-600/40 transition w-full sm:w-auto text-center"
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
      <footer className="border-t border-slate-800 bg-slate-950">
        <Container>
          <div className="py-14">

            {/* Official social row */}
            <div className="text-xs text-slate-400 mb-4 text-center uppercase tracking-wider">
              QRL official websites:
            </div>

            <div className="flex items-center justify-center gap-8 flex-wrap">
              <a href="https://discord.gg/theqrl" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform">
                <DiscordIcon className="w-6 h-6" />
              </a>
              <a href="https://x.com/theqrl" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform">
                <XIcon className="w-6 h-6" />
              </a>
              <a href="https://www.reddit.com/r/QRL/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform">
                <RedditIcon className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/theqrl" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@theqrl" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform">
                <YouTubeIcon className="w-6 h-6" />
              </a>
              <a href="https://t.me/theqrl" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform">
                <TelegramIcon className="w-6 h-6" />
              </a>
              <a href="https://github.com/theQRL" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform">
                <GitHubIcon className="w-6 h-6" />
              </a>
              <a href="https://theqrl.org" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform" aria-label="Official Website">
                <Globe className="w-6 h-6" />
              </a>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 pt-6 border-t border-slate-800 text-slate-500 text-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-6">
                <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
                <a href="#terms" className="hover:text-white transition">Terms of Use</a>
              </div>

              <div className="sm:text-right">
                © {new Date().getFullYear()} QRL Hub. All rights reserved. Not affiliated with the QRL Foundation. Educational content only.
              </div>
            </div>

          </div>
        </Container>
      </footer>

      <Analytics />
    </div>
  );
}

// ================= FOOTER ICONS (Official-style SVGs) =================
function IconBase({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      role="img"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 .5C5.73.5.75 5.7.75 12.14c0 5.13 3.31 9.48 7.9 11.02.58.11.8-.26.8-.58 0-.29-.02-1.26-.02-2.28-2.9.55-3.65-.72-3.88-1.38-.13-.34-.67-1.38-1.15-1.66-.38-.21-.92-.72-.02-.74.85-.02 1.46.8 1.66 1.13.97 1.66 2.52 1.19 3.13.9.1-.72.38-1.19.69-1.46-2.57-.29-5.25-1.32-5.25-5.84 0-1.29.45-2.35 1.18-3.17-.12-.3-.52-1.52.11-3.17 0 0 .97-.32 3.18 1.21.92-.26 1.9-.38 2.88-.38.98 0 1.96.13 2.88.38 2.21-1.55 3.18-1.21 3.18-1.21.63 1.65.23 2.87.11 3.17.74.82 1.18 1.88 1.18 3.17 0 4.53-2.7 5.55-5.27 5.84.39.34.74 1.01.74 2.06 0 1.48-.02 2.67-.02 3.04 0 .32.21.7.8.58 4.59-1.54 7.9-5.89 7.9-11.02C23.25 5.7 18.27.5 12 .5z" />
    </IconBase>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M18.9 2H22l-6.8 7.77L23 22h-6.9l-5.4-7.02L4.6 22H1.5l7.3-8.35L1 2h7.1l4.9 6.36L18.9 2zm-1.2 18h1.7L7.2 3.9H5.4L17.7 20z" />
    </IconBase>
  );
}

function RedditIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M24 12c0-1.66-1.34-3-3-3-.73 0-1.4.26-1.92.7-1.64-1.1-3.8-1.8-6.17-1.9l1.04-4.88 3.4.73a2 2 0 1 0 .2-1.13l-4.02-.86a.8.8 0 0 0-.95.62l-1.24 5.82c-2.45.06-4.69.76-6.38 1.9A2.96 2.96 0 0 0 3 9c-1.66 0-3 1.34-3 3 0 1.2.7 2.24 1.71 2.73-.06.28-.09.57-.09.87 0 3.87 4.93 7 11 7s11-3.13 11-7c0-.3-.03-.6-.09-.87A2.99 2.99 0 0 0 24 12zM8.5 14.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8.2 5.55c-1.05 1.05-2.8 1.1-3.7 1.1-.9 0-2.65-.05-3.7-1.1a.75.75 0 1 1 1.06-1.06c.53.53 1.7.66 2.64.66.94 0 2.11-.13 2.64-.66a.75.75 0 0 1 1.06 1.06zM15.5 14.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </IconBase>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M20.3 4.5a16.6 16.6 0 0 0-4.1-1.3l-.2.4a15.2 15.2 0 0 1 3.5 1.7 12.2 12.2 0 0 0-4.7-1.5 12.8 12.8 0 0 0-1.7-.1c-.6 0-1.2 0-1.8.1a12.2 12.2 0 0 0-4.7 1.5 15.2 15.2 0 0 1 3.5-1.7l-.2-.4c-1.4.2-2.8.6-4.1 1.3C2.7 8.1 2 11.6 2 15.1c0 0 1.2 2.1 4.3 2.2.5-.7 1-1.4 1.4-2.1-.8-.2-1.6-.6-2.3-1 .2-.2.3-.3.5-.5 1.3.6 2.7.9 4.1 1.1 1.3.1 2.7.1 4 0 1.4-.2 2.8-.5 4.1-1.1l.5.5c-.7.4-1.5.8-2.3 1 .4.7.9 1.4 1.4 2.1 3.1-.1 4.3-2.2 4.3-2.2 0-3.5-.7-7-2.7-10.6zM8.7 14.2c-.8 0-1.5-.7-1.5-1.6s.7-1.6 1.5-1.6c.8 0 1.5.7 1.5 1.6s-.7 1.6-1.5 1.6zm6.6 0c-.8 0-1.5-.7-1.5-1.6s.7-1.6 1.5-1.6c.8 0 1.5.7 1.5 1.6s-.7 1.6-1.5 1.6z" />
    </IconBase>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.6V5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7v3h2.6v8h3.9z" />
    </IconBase>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12s0 3.8.5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.6 15.5V8.5L15.8 12l-6.2 3.5z" />
    </IconBase>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M9.7 15.3 9.5 19c.4 0 .6-.2.8-.4l1.9-1.8 3.9 2.9c.7.4 1.2.2 1.4-.6l2.6-12.2c.3-1.1-.4-1.6-1.2-1.3L3.4 11.5c-1 .4-1 1.1-.2 1.4l4 1.2 9.3-5.9c.4-.3.8-.1.5.2l-7.3 7z" />
    </IconBase>
  );
}

