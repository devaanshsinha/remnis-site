"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Activity,
  FileCode2,
  Globe,
  Linkedin,
  MessageSquare,
  Moon,
  Package,
  Search,
  ShoppingCart,
  Sun,
  TerminalSquare,
  Truck,
} from "lucide-react";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "Demo", href: "#demo" },
  { label: "Everyday Recall", href: "#workflow-lens" },
  { label: "Why Remnis", href: "#why" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Privacy", href: "#privacy" },
  { label: "FAQ", href: "#faq" },
  { label: "Get Started", href: "#get-started" },
];

const featureCards = [
  {
    title: "Intent-Based Recall",
    description:
      "Find context with natural prompts like “that docker error from this morning” instead of exact keyword guessing.",
  },
  {
    title: "Low-Noise Capture",
    description:
      "Context events are normalized, deduplicated, and filtered so your memory timeline stays useful.",
  },
  {
    title: "Tool-Spanning Memory",
    description:
      "Connect the dots across editor work, terminals, browser tabs, and docs in one local workflow memory layer.",
  },
  {
    title: "Fast Local Retrieval",
    description:
      "Designed for quick search and resume so you can recover task context without breaking your flow.",
  },
  {
    title: "macOS-Native Workflow",
    description:
      "Built for how developers actually work on macOS, with local sidecar architecture and desktop-first UX.",
  },
  {
    title: "Searchable Work Timeline",
    description:
      "See where and when things happened so you can return to the exact moment you solved something.",
  },
];

const audienceCards = [
  "Developers who switch between many tools throughout the day.",
  "Builders who lose track of where they solved a specific issue.",
  "Teams that want private, local-first context recall by default.",
];

const faqs = [
  {
    q: "Does Remnis require cloud sync?",
    a: "No. Core functionality is designed for local-first operation with no required cloud dependency.",
  },
  {
    q: "What kind of context can I recover?",
    a: "Task context such as prior errors, related files, app/window history, and useful snippets tied to your workflow timeline.",
  },
  {
    q: "Who is this best for?",
    a: "Developers and builders who regularly jump between editor, terminal, browser, docs, and chat tools.",
  },
  {
    q: "What is the privacy model?",
    a: "Privacy-first by default. Sidecar APIs run locally and context processing is intended to stay on-device.",
  },
];

export default function Home() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
        <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
          <a href="#product" className="inline-flex items-center">
            <Image
              src="/Light%20mode%20Logo.png"
              alt="Remnis"
              width={160}
              height={32}
              className="h-8 w-auto dark:hidden"
              priority
            />
            <Image
              src="/Dark%20mode%20logo.png"
              alt="Remnis"
              width={160}
              height={32}
              className="hidden h-8 w-auto dark:block"
              priority
            />
          </a>
          <div className="hidden items-center gap-5 text-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              <Sun className="h-4 w-4 text-muted-foreground" />
              <button
                type="button"
                aria-label="Toggle day and night mode"
                onClick={toggleTheme}
                className="relative h-6 w-11 rounded-full border border-border bg-muted transition-colors dark:bg-primary"
              >
                <span
                  className="absolute left-0.5 top-0.5 h-[18px] w-[18px] translate-x-0 rounded-full bg-background shadow transition-transform dark:translate-x-5"
                />
              </button>
              <Moon className="h-4 w-4 text-muted-foreground" />
            </div>
            <Button size="sm">Get Early Access</Button>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4">
        <section
          id="product"
          className="scroll-mt-20 grid min-h-[calc(100vh-3.5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Local work memory for macOS developers
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Stop losing context. Resume work instantly.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Remnis creates a searchable memory layer for your daily workflow
              so you can recover past decisions, errors, and task context
              without slowing down.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button>Get Early Access</Button>
              <Button variant="outline">See How It Works</Button>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full bg-primary/15 blur-3xl animate-remnis-float" />
            <div className="pointer-events-none absolute -bottom-12 right-4 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl animate-remnis-float-delayed" />

            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-background/95 shadow-[0_30px_90px_-42px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <p className="ml-2 text-xs text-muted-foreground">
                    Remnis Session View
                  </p>
                </div>
                <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                  Live
                </span>
              </div>

              <div className="space-y-3 p-4">
                <div className="rounded-xl border bg-card/70 p-3">
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Current Focus
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Chrome - Amazon Cart - Slack DM
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full border px-2 py-0.5 text-[11px] text-muted-foreground">
                      Browser
                    </span>
                    <span className="rounded-full border px-2 py-0.5 text-[11px] text-muted-foreground">
                      Shopping
                    </span>
                    <span className="rounded-full border px-2 py-0.5 text-[11px] text-muted-foreground">
                      Interruptions detected
                    </span>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border bg-card/65 p-3">
                    <div className="flex items-center gap-2">
                      <TerminalSquare className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium">Terminal</p>
                    </div>
                    <p className="mt-2 font-mono text-xs text-muted-foreground">
                      pytest sidecar/tests/test_search.py
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      8 passed - 1:42 PM
                    </p>
                  </div>
                  <div className="rounded-xl border bg-card/65 p-3">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium">Messages</p>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      “Did you order that mic arm yet?”
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      1:44 PM
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border bg-card/65 p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium">Memory Activity</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Last 2h</p>
                  </div>
                  <div className="mt-3 flex h-14 items-end gap-1.5">
                    <span className="h-3 w-3 rounded-sm bg-primary/25" />
                    <span className="h-5 w-3 rounded-sm bg-primary/35" />
                    <span className="h-8 w-3 rounded-sm bg-primary/45" />
                    <span className="h-6 w-3 rounded-sm bg-primary/35" />
                    <span className="h-10 w-3 rounded-sm bg-primary/55 animate-pulse" />
                    <span className="h-12 w-3 rounded-sm bg-primary/70 animate-pulse" />
                    <span className="h-9 w-3 rounded-sm bg-primary/50" />
                    <span className="h-7 w-3 rounded-sm bg-primary/40" />
                    <span className="h-4 w-3 rounded-sm bg-primary/30" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 hidden w-64 rounded-xl border bg-background/95 p-3 shadow-[0_18px_40px_-25px_rgba(0,0,0,0.65)] backdrop-blur sm:block animate-remnis-float-delayed">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <FileCode2 className="h-3.5 w-3.5" />
                <span>Context hit from yesterday - 5:42 PM</span>
              </div>
              <p className="mt-1 text-sm">
                Fixed by restoring alias path in <code>tsconfig</code>.
              </p>
            </div>
          </div>
        </section>

        <section id="demo" className="scroll-mt-20 border-t py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            Stuck On An Error? Ask Like You Remember.
          </h2>
          <p className="mt-5 max-w-3xl text-muted-foreground">
            You see a failure in terminal. Instead of digging through tabs and
            history, you ask Remnis in plain language and get back the exact
            context that solved it yesterday.
          </p>

          <div className="relative mt-10 grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950 text-zinc-100 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.7)]">
              <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <p className="ml-3 text-xs text-zinc-400">
                  Terminal - npm run build
                </p>
              </div>
              <div className="space-y-1 px-4 py-4 font-mono text-xs sm:text-sm">
                <p className="text-zinc-400">$ npm run build</p>
                <p className="text-zinc-400">Compiling project...</p>
                <p className="text-rose-400">
                  error TS2307: Cannot find module &quot;@/lib/search&quot;
                </p>
                <p className="text-zinc-500">at src/observer/index.ts:14:19</p>
                <p className="pt-2 text-zinc-300">
                  Build failed with 1 error.
                </p>
              </div>
            </div>

            <div className="lg:mt-10">
              <div className="rounded-2xl border border-border/70 bg-background/95 p-4 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.5)] backdrop-blur">
                <div className="flex items-center gap-2 rounded-xl border bg-muted/60 px-3 py-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">
                    how did i fix this yesterday?
                  </span>
                  <span className="ml-auto rounded-md border bg-background px-2 py-0.5 text-[10px] text-muted-foreground">
                    Command-K
                  </span>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="rounded-lg border bg-card/70 p-3">
                    <p className="text-sm font-medium">
                      Fixed by restoring alias path in tsconfig
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      `src/observer/index.ts` • Yesterday • 5:42 PM
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card/70 p-3">
                    <p className="text-sm font-medium">
                      Related terminal run: rebuild succeeded after restart
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Terminal.app • Yesterday • 5:47 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow-lens" className="scroll-mt-20 border-t py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            Remember What You Were Buying Yesterday
          </h2>
          <p className="mt-5 max-w-3xl text-muted-foreground">
            You had an item open on Amazon, got distracted by messages, and
            forgot what it was. Remnis connects browser, chat, and timeline
            context so you can resume instantly.
          </p>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-border/80 shadow-[0_28px_80px_-34px_rgba(0,0,0,0.55)]">
              <div className="border-b bg-zinc-100 px-4 py-3 dark:bg-zinc-900">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <div className="ml-3 rounded-md border border-zinc-300 bg-white px-3 py-1 text-xs text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    Amazon - shopping cart
                  </div>
                </div>
                <div className="mt-3 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  https://www.amazon.com/cart
                </div>
              </div>

              <div className="space-y-3 bg-background p-4">
                <div className="rounded-xl border bg-card/70 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium">
                        Sony WH-1000XM5 Wireless Headphones
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Color: Black • Seller: Amazon
                      </p>
                    </div>
                    <span className="text-sm font-semibold">$328.00</span>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1 rounded-full border bg-muted/60 px-2 py-0.5 text-[11px] text-muted-foreground">
                    <ShoppingCart className="h-3 w-3" />
                    In cart
                  </div>
                </div>

                <div className="rounded-xl border bg-card/70 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium">
                        Elgato Wave Mic Arm LP
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Saved for later • Prime shipping
                      </p>
                    </div>
                    <span className="text-sm font-semibold">$99.99</span>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1 rounded-full border bg-muted/60 px-2 py-0.5 text-[11px] text-muted-foreground">
                    <Package className="h-3 w-3" />
                    Saved item
                  </div>
                </div>

                <div className="rounded-xl border border-amber-300/60 bg-amber-100/40 p-3 dark:border-amber-600/40 dark:bg-amber-500/10">
                  <p className="text-xs text-muted-foreground">
                    Slack DM • 4:18 PM
                  </p>
                  <p className="mt-1 text-sm">
                    “Did you end up ordering that microphone arm?”
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/95 p-4 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="flex items-center gap-2 rounded-xl border bg-muted/60 px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-foreground">
                  what was i buying on amazon yesterday?
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3 rounded-lg border bg-card/70 p-3">
                  <ShoppingCart className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">
                      You were comparing Sony WH-1000XM5 and AirPods Max
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Amazon tab active at 4:11 PM in Chrome.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border bg-card/70 p-3">
                  <Package className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">
                      Cart snapshot found: Sony XM5 + Elgato Wave Mic Arm LP
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Last seen in cart at 4:16 PM.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border bg-card/70 p-3">
                  <Truck className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">
                      Related context: Slack reminder about ordering mic arm
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Message received at 4:18 PM, two minutes after cart update.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="scroll-mt-20 border-t py-20">
          <h2 className="text-3xl font-semibold tracking-tight">Why Remnis</h2>
          <p className="mt-5 max-w-3xl text-muted-foreground">
            Developer context is fragmented. Your terminal knows one part, your
            editor another, your browser another. Remnis helps you recover the
            full picture quickly, using intent instead of memory gymnastics.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {audienceCards.map((item) => (
              <div key={item} className="rounded-lg border p-5">
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="scroll-mt-20 border-t py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            Built For Real Developer Workflows
          </h2>
          <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {featureCards.map((card) => (
              <li key={card.title} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <p className="font-medium">{card.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="how-it-works" className="scroll-mt-20 border-t py-20">
          <h2 className="text-3xl font-semibold tracking-tight">How It Works</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border p-5">
              <p className="text-xs font-medium text-muted-foreground">STEP 1</p>
              <p className="mt-2 font-medium">Observe your context</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Remnis captures active workflow context across the tools you use.
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <p className="text-xs font-medium text-muted-foreground">STEP 2</p>
              <p className="mt-2 font-medium">Clean and organize events</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Events are normalized and deduplicated to remove noise.
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <p className="text-xs font-medium text-muted-foreground">STEP 3</p>
              <p className="mt-2 font-medium">Search by intent</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Ask naturally and recover the exact context you need to continue.
              </p>
            </div>
          </div>
        </section>

        <section id="privacy" className="scroll-mt-20 border-t py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            Privacy-First, Local-First
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">No Required Cloud Dependency</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Core search and memory workflows are designed to run locally on
                your machine.
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Local Sidecar Architecture</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Sidecar APIs are local and intended for on-device indexing and
                retrieval.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-20 border-t py-20">
          <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-lg border p-5">
                <h3 className="font-medium">{item.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="get-started" className="scroll-mt-20 border-t py-20">
          <h2 className="text-3xl font-semibold tracking-tight">Get Started</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Join early access and start building with local memory for your dev
            workflow.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button>Join Waitlist</Button>
            <Button variant="outline">View on GitHub</Button>
          </div>
        </section>

        <footer className="border-t py-10">
          <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>Built by Devaansh Sinha</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/devaanshsinha"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.devaansh.tech"
                target="_blank"
                rel="noreferrer"
                aria-label="Portfolio"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
