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

// ================= LANGUAGE + THEME CONFIG =================
const LANGUAGES = [
  { code: "en", label: "English", dir: "ltr" as const },
  { code: "ar", label: "العربية", dir: "rtl" as const },
  { code: "id", label: "Bahasa Indonesia", dir: "ltr" as const },
  { code: "ms", label: "Bahasa Melayu", dir: "ltr" as const },
  { code: "cs", label: "Čeština", dir: "ltr" as const },
  { code: "de", label: "Deutsch", dir: "ltr" as const },
  { code: "es", label: "Español", dir: "ltr" as const },
  { code: "fr", label: "Français", dir: "ltr" as const },
  { code: "it", label: "Italiano", dir: "ltr" as const },
  { code: "nl", label: "Nederlands", dir: "ltr" as const },
  { code: "pl", label: "Polski", dir: "ltr" as const },
  { code: "pt", label: "Português", dir: "ltr" as const },
  { code: "ru", label: "Русский", dir: "ltr" as const },
  { code: "fi", label: "Suomi", dir: "ltr" as const },
  { code: "th", label: "ไทย", dir: "ltr" as const },
  { code: "tr", label: "Türkçe", dir: "ltr" as const },
  { code: "vi", label: "Tiếng Việt", dir: "ltr" as const },
  { code: "ja", label: "日本語", dir: "ltr" as const },
  { code: "ko", label: "한국어", dir: "ltr" as const },
  { code: "zh", label: "中文", dir: "ltr" as const },
  { code: "zh-TW", label: "繁體中文", dir: "ltr" as const },
];

type Theme = "dark" | "light" | "ar";

type Page = "home" | "about";

// Centralized navigation config (easy to extract later)
const NAV_ITEMS: { label: string; page?: Page; hash?: string }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "QRL Story", hash: "#research" },
  { label: "FAQ", hash: "#network" },
  { label: "News", hash: "#developers" },
  { label: "Qubit Tracker", hash: "#ecosystem" },
  { label: "Community Projects", hash: "#community" },
];
const THEMES: { code: Theme; label: string }[] = [
  { code: "dark", label: "Dark" },
  { code: "light", label: "Light" },
  { code: "ar", label: "Arabic (Green)" },
];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}


// ================= MOBILE MENU =================
function MobileMenu({
  theme,
  setTheme,
  lang,
  setLang,
  dir,
  page,
  setPage,
}: {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
  dir: "ltr" | "rtl";
  page: Page;
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="md:hidden relative z-[70] isolate">
      <button
        onClick={() => setOpen(!open)}
        className="text-[color:var(--muted)] hover:text-[color:var(--fg)] transition text-3xl leading-none"
        aria-label="Menu"
      >
        {open ? "✕" : "☰"}
      </button>

      <div
        className={cx(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-200",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cx(
            "absolute inset-0 bg-black/40 transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cx(
            "absolute top-16 w-[min(92vw,360px)] rounded-2xl bg-[color:var(--surfaceSolid)] border border-[color:var(--border)] shadow-2xl p-4 flex flex-col max-h-[calc(100vh-5rem)] transition-all duration-200",
            dir === "rtl" ? "left-4" : "right-4",
            open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          )}
        >
          <div className="space-y-2 text-sm overflow-y-auto pr-1">
            {NAV_ITEMS.map((item) =>
              item.page ? (
                <button
                  key={item.label}
                  onClick={() => {
                    setPage(item.page!);
                    setOpen(false);
                  }}
                  className={cx(
                    "block w-full text-left rounded-xl px-3 py-2 transition",
                    page === item.page
                      ? "text-[color:var(--fg)] bg-[color:var(--surfaceHover)]"
                      : "text-[color:var(--muted)] hover:text-[color:var(--fg)] hover:bg-[color:var(--surfaceHover)]"
                  )}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.hash}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-[color:var(--muted)] hover:text-[color:var(--fg)] hover:bg-[color:var(--surfaceHover)] transition"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          <div className="mt-auto pt-4 border-t border-[color:var(--border)] space-y-3">
            <div>
              <div className="text-xs text-[color:var(--muted)] mb-1">Theme</div>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as Theme)}
                className="w-full rounded-xl px-3 py-2 bg-[color:var(--surfaceHover)] border border-[color:var(--border)] text-[color:var(--fg)]"
              >
                {THEMES.map((t) => (
                  <option key={t.code} value={t.code}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="text-xs text-[color:var(--muted)] mb-1">Language</div>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="w-full rounded-xl px-3 py-2 bg-[color:var(--surfaceHover)] border border-[color:var(--border)] text-[color:var(--fg)]"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>

            <a
              href="https://theqrl.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 rounded-xl bg-[color:var(--primary)] hover:bg-[color:var(--primaryHover)] text-white text-sm shadow-lg shadow-[color:var(--primaryShadow)] transition text-center"
            >
              Official Site → theqrl.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ================= LANGUAGE SELECTOR =================
function LanguageSelector({
  selected,
  onChange,
}: {
  selected: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [open, setOpen] = React.useState(false);
  const current = LANGUAGES.find((l) => l.code === selected);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 hover:text-[color:var(--fg)] transition"
      >
        <Globe className="w-4 h-4" />
        {current?.label} ▾
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-48 rounded-xl bg-[color:var(--surfaceSolid)] border border-[color:var(--border)] shadow-xl z-50 overflow-hidden">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onChange(lang.code);
                setOpen(false);
              }}
              className={cx(
                "block w-full text-left px-4 py-2 text-sm transition",
                selected === lang.code
                  ? "bg-[color:var(--surfaceHover)] text-[color:var(--fg)]"
                  : "text-[color:var(--muted)] hover:bg-[color:var(--surfaceHover)] hover:text-[color:var(--fg)]"
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ThemeSelector({
  theme,
  onChange,
}: {
  theme: Theme;
  onChange: React.Dispatch<React.SetStateAction<Theme>>;
}) {
  const [open, setOpen] = React.useState(false);
  const current = THEMES.find((t) => t.code === theme);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 hover:text-[color:var(--fg)] transition"
        aria-label="Theme"
      >
        <span className="text-xs px-2 py-1 rounded-lg border border-[color:var(--border)] bg-[color:var(--surfaceSolid)] text-[color:var(--muted)]">
          {current?.label}
        </span>
        ▾
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-44 rounded-xl bg-[color:var(--surfaceSolid)] border border-[color:var(--border)] shadow-xl z-50 overflow-hidden">
          {THEMES.map((t) => (
            <button
              key={t.code}
              onClick={() => {
                onChange(t.code);
                setOpen(false);
              }}
              className={cx(
                "block w-full text-left px-4 py-2 text-sm transition",
                theme === t.code
                  ? "bg-[color:var(--surfaceHover)] text-[color:var(--fg)]"
                  : "text-[color:var(--muted)] hover:bg-[color:var(--surfaceHover)] hover:text-[color:var(--fg)]"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ================= SIMPLE I18N LOADER =================
function useTranslations(lang: string) {
  const [t, setT] = React.useState<Record<string, string>>({});

  // Fallback defaults to guarantee hero keys always exist
  const DEFAULT_TRANSLATIONS: Record<string, string> = {
    heroTitle: "Quantum‑Resistant Blockchain Intelligence",
    heroSubtitle:
      "Independent analysis and education on post‑quantum cryptography and the Quantum Resistant Ledger.",
    exploreNews: "Explore News",
    exploreQrl: "Explore QRL",
  };

  React.useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/locales/${lang}.json`);
        if (!res.ok) {
          setT(DEFAULT_TRANSLATIONS);
          return;
        }
        const data = await res.json();
        // Merge defaults so required keys always exist
        setT({ ...DEFAULT_TRANSLATIONS, ...data });
      } catch (e) {
        console.error("Translation load failed", e);
        setT(DEFAULT_TRANSLATIONS);
      }
    }
    load();
  }, [lang]);

  return (key: string) => t[key] ?? DEFAULT_TRANSLATIONS[key] ?? key;
}

export default function QRLHubHomepage() {
  const [lang, setLang] = React.useState("en");
  const [theme, setTheme] = React.useState<Theme>("dark");
  const [page, setPage] = React.useState<Page>("home");

  React.useEffect(() => {
    if (lang === "ar") setTheme("ar");
  }, [lang]);

  React.useEffect(() => {
    document.title =
      page === "home"
        ? "QRL Hub | Quantum‑Resistant Blockchain"
        : "About QRL Hub | Quantum‑Resistant Blockchain Resource";
  }, [page]);

  const dir = (LANGUAGES.find((l) => l.code === lang)?.dir ?? "ltr") as "ltr" | "rtl";

  const t = useTranslations(lang);

  return (
    <div
      dir={dir}
      data-theme={theme}
      className={cx(
        "min-h-screen selection:bg-[color:var(--primary)]/40",
        "bg-[color:var(--bg)] text-[color:var(--fg)]"
      )}
    >
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bgHeader)] backdrop-blur-xl">
        <Container>
          <div className="py-4 flex items-center justify-between">
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold tracking-tight text-[color:var(--fg)]">
                QRL Hub
              </span>
              <span className="text-xs text-[color:var(--muted)]">
                Independent Community Site
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[color:var(--muted)]">
              {NAV_ITEMS.map((item) => {
                if (item.page) {
                  return (
                    <button
                      key={item.label}
                      onClick={() => setPage(item.page!)}
                      className={cx(
                        "relative hover:text-[color:var(--fg)] transition",
                        page === item.page && "text-[color:var(--fg)]"
                      )}
                    >
                      {item.label}
                    </button>
                  );
                }
                return (
                  <a
                    key={item.label}
                    href={item.hash}
                    className="hover:text-[color:var(--fg)] transition"
                  >
                    {item.label}
                  </a>
                );
              })}

              <ThemeSelector theme={theme} onChange={setTheme} />
              <LanguageSelector selected={lang} onChange={setLang} />

              <a
                href="https://theqrl.org"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-4 py-2 rounded-xl bg-[color:var(--primary)] hover:bg-[color:var(--primaryHover)] text-white text-sm shadow-lg shadow-[color:var(--primaryShadow)] transition"
              >
                Official Site → theqrl.org
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <MobileMenu theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} dir={dir} page={page} setPage={setPage} />
          </div>
        </Container>
      </header>

      {page === "home" && (
        <>
          {/* ================= HERO ================= */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,rgba(59,130,246,0.35),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.18),transparent_45%)]" />
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[color:var(--bg)]/60 pointer-events-none" />

            <Container>
              <div className="relative py-16 md:py-20 grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-7">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]"
                  >
                    {t("heroTitle")}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="mt-6 text-lg md:text-xl text-[color:var(--muted)] max-w-2xl leading-relaxed"
                  >
                    {t("heroSubtitle")}
                  </motion.p>

                  {/* Hero Buttons */}
                  <div className="mt-10 flex flex-wrap gap-4">
                    <button
                      className="rounded-2xl px-6 py-3 shadow-md transition transform duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white hover:shadow-blue-400/40"
                    >
                      {t("exploreNews")} <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      className="rounded-2xl px-6 py-3 font-semibold transition transform duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 hover:shadow-amber-400/40"
                    >
                      {t("exploreQrl")} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Meta Row */}
                  <div className="mt-6 flex items-center gap-3 text-sm text-[color:var(--muted)]">
                    <span className="px-3 py-1 rounded-full bg-[color:var(--surfaceHover)] border border-[color:var(--border)]">
                      Updated Feb 16, 2026
                    </span>
                    <span>Educational content • Community maintained</span>
                  </div>
                </div>

                {/* Right Info Card (Restored) */}
                <div className="md:col-span-5">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className={cx(
                    "relative rounded-[32px] backdrop-blur-xl",
                    theme === "light"
                      ? "bg-white shadow-2xl shadow-black/5 border border-transparent"
                      : "border border-[color:var(--border)] bg-[color:var(--surface)] shadow-xl shadow-[color:var(--primaryShadow)]/30"
                  )}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-[color:var(--primary)]">
                        <Sparkles className="w-4 h-4" />
                        Post‑Quantum Security
                      </div>

                      <h3 className="mt-3 text-xl font-semibold text-[color:var(--fg)]">
                        Quantum‑Safe Cryptocurrency: $QRL
                      </h3>

                      <p className="mt-3 text-sm text-[color:var(--muted)]">
                        QRL launched in 2018 with XMSS hash‑based signatures — built for long‑term cryptographic resilience.
                      </p>

                      <div className="mt-5 grid grid-cols-3 gap-3">
                        <div className="rounded-2xl bg-[color:var(--surfaceHover)] border border-[color:var(--border)] p-3">
                          <p className="text-xs text-[color:var(--muted)]">Mainnet Since</p>
                          <p className="font-semibold text-[color:var(--fg)]">2018</p>
                        </div>
                        <div className="rounded-2xl bg-[color:var(--surfaceHover)] border border-[color:var(--border)] p-3">
                          <p className="text-xs text-[color:var(--muted)]">Core</p>
                          <p className="font-semibold text-[color:var(--fg)]">QRL 1.x</p>
                        </div>
                        <div className="rounded-2xl bg-[color:var(--surfaceHover)] border border-[color:var(--border)] p-3">
                          <p className="text-xs text-[color:var(--muted)]">Next</p>
                          <p className="font-semibold text-[color:var(--fg)]">QRL 2.0</p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="mt-6 pt-6 border-t border-[color:var(--border)] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <img
                            src="/qrl-logo.png"
                            alt="QRL Logo"
                            className="h-16 w-auto object-contain flex-shrink-0"
                          />
                          <div>
                            <div className="text-xs text-[color:var(--muted)]">
                              Official Project
                            </div>
                            <div className="text-sm font-medium text-[color:var(--fg)]">
                              theqrl.org
                            </div>
                          </div>
                        </div>

                        <a
                          href="https://theqrl.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-[color:var(--primary)] hover:bg-[color:var(--primaryHover)] text-white text-sm shadow-lg shadow-[color:var(--primaryShadow)] transition whitespace-nowrap inline-flex items-center w-full md:w-auto"
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
          <section id="research" className="py-20 border-t border-[color:var(--border)]">
            <Container>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--fg)] mb-12">Why Post‑Quantum Matters Now</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { title: "Hardware Progress", icon: Cpu },
                  { title: "Public Key Exposure", icon: Activity },
                  { title: "Migration Lag", icon: GitBranch },
                  { title: "Defense From Genesis", icon: Shield },
                ].map(({ title, icon: Icon }) => (
                  <div key={title} className="rounded-3xl p-6 bg-[color:var(--surface)] border border-[color:var(--border)]">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-7 h-7 text-[color:var(--primary)]" strokeWidth={1.5} />
                      <h3 className="text-lg font-semibold text-[color:var(--fg)]">{title}</h3>
                    </div>
                    <p className="text-sm text-[color:var(--muted)]">
                      Understanding quantum impact and long‑term blockchain security implications.
                    </p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* ================= QRL APPROACH ================= */}
          <section className="py-20 border-t border-[color:var(--border)]">
            <Container>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--fg)] mb-12">The QRL Approach</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Mainnet Since 2018", icon: Shield },
                  { title: "XMSS Signatures", icon: Sparkles },
                  { title: "Straight Answers", icon: HelpCircle },
                ].map(({ title, icon: Icon }) => (
                  <div key={title} className="rounded-3xl p-8 bg-[color:var(--surface)] border border-[color:var(--border)]">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-7 h-7 text-[color:var(--primary)]" strokeWidth={1.5} />
                      <h3 className="text-lg font-semibold text-[color:var(--fg)]">{title}</h3>
                    </div>
                    <p className="text-sm text-[color:var(--muted)]">Post‑quantum security designed from day one.</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* ================= NEWS ================= */}
          <section className="py-20 border-t border-[color:var(--border)]">
            <Container>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--fg)] mb-12">Quantum News & Analysis</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Hardware Threshold Update", icon: Activity },
                  { title: "Migration Reality Check", icon: BookOpen },
                  { title: "Qubit Tracker", icon: Cpu },
                ].map(({ title, icon: Icon }) => (
                  <div key={title} className="rounded-3xl p-8 bg-[color:var(--surface)] border border-[color:var(--border)]">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-7 h-7 text-[color:var(--primary)]" strokeWidth={1.5} />
                      <h3 className="text-lg font-semibold text-[color:var(--fg)]">{title}</h3>
                    </div>
                    <p className="text-sm text-[color:var(--muted)]">Latest research and ecosystem developments.</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* ================= FAQ ================= */}
          <section className="py-20 border-t border-[color:var(--border)]">
            <Container>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--fg)] mb-12">The Questions Crypto Avoids</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {["What is the migration plan?","How long do upgrades take?","Can legacy chains pivot safely?","Why is crypto structurally exposed?"].map((item)=> (
                  <div key={item} className="rounded-2xl p-6 bg-[color:var(--surface)] border border-[color:var(--border)]">
                    <p className="text-[color:var(--muted)]">{item}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* ================= NETWORK ================= */}
          <section id="network" className="py-20 border-t border-[color:var(--border)]">
            <Container>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--fg)] mb-12">Network Snapshot</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "XMSS Security Model", icon: Shield },
                  { title: "RandomX Proof‑of‑Work", icon: Cpu },
                  { title: "EVM‑Compatible QRL 2.0", icon: GitBranch },
                ].map(({ title, icon: Icon }) => (
                  <div key={title} className="rounded-3xl p-8 bg-[color:var(--surface)] border border-[color:var(--border)]">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-7 h-7 text-[color:var(--primary)]" strokeWidth={1.5} />
                      <h3 className="text-lg font-semibold text-[color:var(--fg)]">{title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* ================= DEVELOPERS ================= */}
          <section id="developers" className="py-20 border-t border-[color:var(--border)]">
            <Container>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--fg)] mb-12">Developers & Community</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Documentation", icon: BookOpen },
                  { title: "GitHub", icon: GitBranch },
                  { title: "Community", icon: Globe },
                ].map(({ title, icon: Icon }) => (
                  <div key={title} className="rounded-3xl p-8 bg-[color:var(--surface)] border border-[color:var(--border)]">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-7 h-7 text-[color:var(--primary)]" strokeWidth={1.5} />
                      <h3 className="text-lg font-semibold text-[color:var(--fg)]">{title}</h3>
                    </div>
                    <p className="text-sm text-[color:var(--muted)]">Explore resources and join the ecosystem.</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      {page === "about" && (
        <section className="py-20">
          <Container>
            {/* Breadcrumb */}
            <div className="text-sm text-[color:var(--muted)] mb-6">
              <button onClick={() => setPage("home")} className="hover:text-[color:var(--fg)] transition">
                Home
              </button>
              <span className="mx-2">/</span>
              <span className="text-[color:var(--fg)]">About</span>
            </div>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                About QRL Hub
              </h1>

              <p className="text-lg text-[color:var(--muted)] mb-8">
                Your resource for quantum-resistant blockchain information
              </p>

              <div className="space-y-8 text-[color:var(--muted)] leading-relaxed">
                <p>
                  QRL Hub is an independent educational resource dedicated to the Quantum Resistant Ledger and the critical field of quantum-resistant blockchain technology. As quantum computing advances, the cryptographic foundations securing today’s blockchains face structural risk.
                </p>

                <p>
                  The blockchain industry relies heavily on elliptic curve cryptography. Bitcoin, Ethereum, and virtually every major chain are exposed to future quantum attacks. QRL launched its mainnet in 2018 using hash-based post-quantum signatures, positioning itself as the first production-ready quantum-resistant blockchain.
                </p>

                <p>
                  QRL employs XMSS (eXtended Merkle Signature Scheme), a NIST-approved hash-based signature model. With QRL 2.0 introducing EVM compatibility, the network aims to support smart contracts while preserving quantum resilience.
                </p>

                <p>
                  Our mission is simple: provide clear, authoritative, crypto-native education about quantum risk and post-quantum blockchain security.
                </p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[color:var(--border)] bg-[color:var(--bg)]">
        <Container>
          <div className="py-14">

            {/* Official social row */}
            <div className="text-xs text-[color:var(--muted)] mb-4 text-center uppercase tracking-wider">
              Follow QRL:
            </div>

            <div className="flex items-center justify-center gap-8 flex-wrap">
              <a href="https://www.theqrl.org/discord" target="_blank" rel="noopener noreferrer" aria-label="Discord" title="Discord" className="text-slate-500 hover:text-[color:var(--fg)] transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform">
                <DiscordIcon className="w-6 h-6" />
              </a>
              <a href="https://x.com/qrledger" target="_blank" rel="noopener noreferrer" aria-label="X (former Twitter)" title="X (former Twitter)" className="text-slate-500 hover:text-[color:var(--fg)] transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform">
                <XIcon className="w-6 h-6" />
              </a>
              <a href="https://www.reddit.com/r/QRL/" target="_blank" rel="noopener noreferrer" aria-label="Reddit" title="Reddit" className="text-slate-500 hover:text-[color:var(--fg)] transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform">
                <RedditIcon className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/theqrl" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" className="text-slate-500 hover:text-[color:var(--fg)] transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@qrledger" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube" className="text-slate-500 hover:text-[color:var(--fg)] transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform">
                <YouTubeIcon className="w-6 h-6" />
              </a>
              <a href="https://t.me/QRLedgerOfficial" target="_blank" rel="noopener noreferrer" aria-label="Telegram" title="Telegram" className="text-slate-500 hover:text-[color:var(--fg)] transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform">
                <TelegramIcon className="w-6 h-6" />
              </a>
              <a href="https://github.com/theQRL" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="text-slate-500 hover:text-[color:var(--fg)] transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform">
                <GitHubIcon className="w-6 h-6" />
              </a>
              <a href="https://theqrl.org" target="_blank" rel="noopener noreferrer" aria-label="theqrl.org" title="theqrl.org" className="text-slate-500 hover:text-[color:var(--fg)] transition duration-300 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </a>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 pt-6 border-t border-[color:var(--border)] text-slate-500 text-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-6">
                <a href="#privacy" className="hover:text-[color:var(--fg)] transition">Privacy Policy</a>
                <a href="#terms" className="hover:text-[color:var(--fg)] transition">Terms of Use</a>
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


