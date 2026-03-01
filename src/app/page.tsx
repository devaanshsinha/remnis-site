import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
        <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
          <a href="#home" className="text-sm font-semibold tracking-tight">
            Remnis for macOS
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
          <Button size="sm">Get Early Access</Button>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4">
        <section
          id="home"
          className="scroll-mt-20 flex min-h-[calc(100vh-3.5rem)] flex-col justify-center py-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Built for macOS power users
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            The control center for your most complex workflows.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Remnis helps you manage moving parts across your app without losing
            speed, context, or focus.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button>Download for macOS</Button>
            <Button variant="outline">Watch demo</Button>
          </div>
        </section>

        <section id="features" className="scroll-mt-20 border-t py-20">
          <h2 className="text-3xl font-semibold tracking-tight">Features</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Smart Views</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Organize complex state into clean, actionable views.
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Fast Commands</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Trigger key actions from keyboard-first command flows.
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Reliable Sync</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Keep local and cloud data consistent without manual cleanup.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-20 border-t py-20">
          <h2 className="text-3xl font-semibold tracking-tight">How It Works</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border p-5">
              <p className="text-xs font-medium text-muted-foreground">STEP 1</p>
              <p className="mt-2 font-medium">Connect your workflow</p>
            </div>
            <div className="rounded-lg border p-5">
              <p className="text-xs font-medium text-muted-foreground">STEP 2</p>
              <p className="mt-2 font-medium">Automate routine actions</p>
            </div>
            <div className="rounded-lg border p-5">
              <p className="text-xs font-medium text-muted-foreground">STEP 3</p>
              <p className="mt-2 font-medium">Review insights and iterate</p>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-20 border-t py-20">
          <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Does this work offline?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Yes. Core functionality is designed to run locally on your Mac.
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Which macOS versions are supported?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You can update this with your exact supported version range.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t py-20">
          <h2 className="text-3xl font-semibold tracking-tight">Stay Updated</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Add your waitlist form or contact link here.
          </p>
          <div className="mt-6">
            <Button>Join Waitlist</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
