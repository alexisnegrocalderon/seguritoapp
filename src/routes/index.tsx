import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield, FileCheck, Bell, BarChart3, Cloud, Lock,
  Smartphone, ClipboardList, FileText, Check, Apple,
  Mail, MapPin, Instagram, ChevronDown,
  Zap, Award, Building2,

} from "lucide-react";
import logo from "@/assets/logo.asset.json";
import dashboard from "@/assets/app-dashboard.asset.json";
import menu from "@/assets/app-menu.asset.json";
import diep from "@/assets/app-diep.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SeguritoApp — Prevención de riesgos laborales 100% digital" },
      { name: "description", content: "Digitaliza tu prevención: centraliza documentación, automatiza reportes y cumple la normativa desde una sola app." },
      { property: "og:title", content: "SeguritoApp — Prevención digital" },
      { property: "og:description", content: "Digitaliza tu prevención: documentación centralizada, reportes automáticos y cumplimiento legal." },
      { property: "og:image", content: logo.url },
      { property: "twitter:image", content: logo.url },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Logos />
      <Benefits />
      <HowItWorks />
      <Mockups />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#beneficios", label: "Beneficios" },
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#planes", label: "Planes" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <img src={logo.url} alt="SeguritoApp" className="h-9 w-9" />
          <span className="font-display text-lg font-bold tracking-tight">
            <span style={{ color: "var(--brand-blue)" }}>segur</span>
            <span style={{ color: "var(--brand-blue)" }}>ito</span>
            <span style={{ color: "var(--brand-orange)" }}>app</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="https://instagram.com/seguritoapp" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://seguritoapp-467657972843.southamerica-west1.run.app/" target="_blank" rel="noopener noreferrer" className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]" style={{ background: "var(--brand-orange)" }}>
            Empezar gratis
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-4 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted">
                {l.label}
              </a>
            ))}
            <a href="https://seguritoapp-467657972843.southamerica-west1.run.app/" target="_blank" rel="noopener noreferrer" className="mt-2 block rounded-full px-4 py-2.5 text-center text-sm font-semibold text-white" style={{ background: "var(--brand-orange)" }}>
              Empezar gratis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--brand-blue) 35%, transparent), transparent)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: "var(--brand-orange)" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--brand-orange)" }} />
              </span>
              Prevención de riesgos · Ley 16.744
            </div>
            <h1 className="mt-6 text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              La prevención<br />
              <span className="gradient-text">sin papeles</span>,<br />
              sin sustos.
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground sm:text-xl">
              SeguritoApp digitaliza inspecciones, centraliza tu documentación y genera reportes automáticos. Cumple la normativa desde tu celular.
            </p>
            <div id="descargar" className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-foreground backdrop-blur transition-all hover:scale-[1.02] hover:bg-white/10 hover:glow-blue">
                <Apple className="h-6 w-6" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-wider opacity-70">Descarga en</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="group inline-flex items-center gap-3 rounded-2xl px-5 py-3.5 text-primary-foreground transition-all hover:scale-[1.02] hover:glow-orange" style={{ background: "var(--brand-orange)" }}>
                <PlayStoreIcon />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-wider opacity-90">Disponible en</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Check className="h-4 w-4" style={{ color: "var(--brand-orange)" }} /> 7 días gratis</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4" style={{ color: "var(--brand-orange)" }} /> Sin tarjeta</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4" style={{ color: "var(--brand-orange)" }} /> Soporte en español</div>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-6 rounded-[3rem] opacity-30 blur-2xl"
              style={{ background: "linear-gradient(135deg, var(--brand-blue), var(--brand-orange))" }}
            />
            <PhoneFrame src={dashboard.url} />
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-card p-3 shadow-xl sm:flex sm:items-center sm:gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "color-mix(in oklab, var(--brand-orange) 15%, transparent)" }}>
                <Bell className="h-5 w-5" style={{ color: "var(--brand-orange)" }} />
              </div>
              <div className="leading-tight">
                <div className="text-xs text-muted-foreground">Alerta temprana</div>
                <div className="text-sm font-semibold">Inspección en 3 días</div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 hidden rounded-2xl border border-border bg-card p-3 shadow-xl sm:flex sm:items-center sm:gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "color-mix(in oklab, var(--brand-blue) 15%, transparent)" }}>
                <FileCheck className="h-5 w-5" style={{ color: "var(--brand-blue)" }} />
              </div>
              <div className="leading-tight">
                <div className="text-xs text-muted-foreground">Reporte listo</div>
                <div className="text-sm font-semibold">DIEP / DIAT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ src }: { src: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="relative rounded-[2.5rem] border-[10px] p-1 shadow-2xl" style={{ background: "oklch(0.08 0.03 260)", borderColor: "oklch(0.08 0.03 260)" }}>
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full" style={{ background: "oklch(0.08 0.03 260)" }} />
        <div className="overflow-hidden rounded-[2rem]">
          <img src={src} alt="SeguritoApp" className="block w-full" />
        </div>
      </div>
    </div>
  );
}

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
      <path d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l9.3-9.4-9.3-10zM14.3 13l2.6 2.6-10.7 6.1 8.1-8.7zM18.8 10.4l-2.4-1.4-2.7 2.7L16.4 14l2.4-1.4c.9-.5.9-1.7 0-2.2zM6.2 2.2L16.9 8.4l-2.6 2.7-8.1-8.9z"/>
    </svg>
  );
}

function Logos() {
  const items = ["Mutual", "ACHS", "ISL", "ISO 45001", "D.S. 594", "Ley 16.744"];
  return (
    <section className="border-y border-border bg-surface/50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Cumple con normativas y estándares
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-semibold text-muted-foreground/70">
          {items.map((i) => (
            <span key={i} className="font-display">{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: FileText, title: "Documentación centralizada", desc: "Todos los registros, IPER, procedimientos y EPP en un solo lugar accesible." },
    { icon: Zap, title: "Reportes automáticos", desc: "Genera PDFs profesionales en segundos: DIEP, DIAT, inspecciones y más." },
    { icon: Bell, title: "Alertas tempranas", desc: "Sistema que te avisa de vencimientos, inspecciones y tareas críticas." },
    { icon: Shield, title: "Cumplimiento legal", desc: "Diseñada para D.S. 594, D.S. 44, D.S. 67 y Ley 16.744." },
    { icon: BarChart3, title: "Indicadores en vivo", desc: "Mide siniestralidad, cumplimiento Gantt y desempeño en tiempo real." },
    { icon: Cloud, title: "Multiempresa en la nube", desc: "Gestiona desde 1 hasta cientos de empresas con datos siempre seguros." },
  ];
  return (
    <section id="beneficios" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--brand-orange)" }}>Beneficios</span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Menos papeles. <span className="gradient-text">Más prevención.</span>
          </h2>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            Todo lo que un prevencionista necesita para trabajar rápido, ordenado y seguro.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl">
              <div className="grid h-12 w-12 place-items-center rounded-xl"
                style={{ background: i % 2 === 0 ? "color-mix(in oklab, var(--brand-blue) 12%, transparent)" : "color-mix(in oklab, var(--brand-orange) 12%, transparent)" }}>
                <b.icon className="h-6 w-6" style={{ color: i % 2 === 0 ? "var(--brand-blue)" : "var(--brand-orange)" }} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", icon: Smartphone, title: "Descarga la app", desc: "Crea tu cuenta gratis y configura tu empresa en menos de 5 minutos." },
    { n: "02", icon: ClipboardList, title: "Registra y gestiona", desc: "Carga trabajadores, inspecciones, EPP y procedimientos desde tu celular." },
    { n: "03", icon: FileCheck, title: "Genera reportes", desc: "Descarga PDFs con validez legal listos para enviar a tus clientes o auditorías." },
  ];
  return (
    <section id="como-funciona" className="relative bg-ink py-24 text-background sm:py-32" style={{ color: "oklch(0.98 0 0)" }}>
      <div className="absolute inset-0 opacity-[0.07]" style={{ background: "radial-gradient(circle at 30% 0%, var(--brand-blue), transparent 50%), radial-gradient(circle at 70% 100%, var(--brand-orange), transparent 50%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--brand-orange)" }}>Cómo funciona</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            En 3 pasos estás operando.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              <div className="font-display text-6xl font-bold" style={{ color: "color-mix(in oklab, var(--brand-orange) 80%, transparent)" }}>{s.n}</div>
              <s.icon className="mt-6 h-7 w-7" style={{ color: "var(--brand-blue)" }} />
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mockups() {
  const shots = [
    { src: dashboard.url, title: "Dashboard inteligente", desc: "Visión completa de tu operación: planes, alertas y métricas." },
    { src: menu.url, title: "Módulos especializados", desc: "MIPER, IRL, GRD, Protocolos Minsal, DIEP/DIAT y más." },
    { src: diep.url, title: "Denuncias y reportes", desc: "Genera DIAT, DIEP e investigaciones con un toque." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--brand-orange)" }}>La app</span>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Diseñada por prevencionistas, para prevencionistas.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Una interfaz limpia, rápida y pensada para resolver lo importante en terreno.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {shots.map((s, i) => (
            <div key={i} className="group">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-all group-hover:-translate-y-1">
                <div
                  className="absolute inset-x-8 top-8 h-40 rounded-2xl opacity-60 blur-2xl"
                  style={{ background: i === 1 ? "color-mix(in oklab, var(--brand-blue) 40%, transparent)" : "color-mix(in oklab, var(--brand-orange) 35%, transparent)" }}
                />
                <PhoneFrame src={s.src} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { q: "Una auditoría no debería quitarte el sueño.", a: "Equipo SeguritoApp", role: "Filosofía de producto", accent: "orange" as const },
    { q: "Pasamos demasiado tiempo ordenando papeles. Y muy poco previniendo riesgos.", a: "Carolina M.", role: "Ingeniera en Prevención", accent: "blue" as const },
    { q: "La prevención no debería depender de recordar dónde guardaste un archivo.", a: "Rodrigo S.", role: "Asesor PRL", accent: "orange" as const },
  ];
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--brand-orange)" }}>Casos de uso</span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Lo que viven nuestros usuarios.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((t, i) => (
            <figure key={i} className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm">
              <blockquote className="font-display text-xl font-semibold leading-snug tracking-tight">
                <span className="text-foreground">"</span>
                {t.q.split(" ").slice(0, -2).join(" ")}{" "}
                <span style={{ color: t.accent === "orange" ? "var(--brand-orange)" : "var(--brand-blue)" }}>
                  {t.q.split(" ").slice(-2).join(" ")}
                </span>
                <span className="text-foreground">"</span>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-white" style={{ background: t.accent === "orange" ? "var(--brand-orange)" : "var(--brand-blue)" }}>
                  {t.a[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.a}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: "Free", price: "$0", period: "para siempre", desc: "Prueba 7 días full, luego restringido.", features: ["1 empresa, 10 trabajadores", "1 PDF por día", "Sin DIEP / DIAT", "Marca de agua"], cta: "Empezar gratis", icon: Shield },
    { name: "Básico", price: "$9.800", period: "CLP / mes", desc: "Para pequeños equipos y asesores.", features: ["Hasta 2 empresas", "100 trabajadores", "3 PDFs diarios", "Sin DIEP / DIAT"], cta: "Suscribirse", icon: Shield },
    { name: "Avanzado", price: "$14.900", period: "CLP / mes", desc: "Para consultoras en crecimiento.", features: ["Hasta 8 empresas", "500 trabajadores", "10 PDFs diarios", "Módulo DIEP / DIAT"], cta: "Suscribirse", icon: Zap, popular: true },
    { name: "Profesional", price: "$21.650", period: "CLP / mes", desc: "Para grandes operaciones.", features: ["Hasta 15 empresas", "3.000 trabajadores", "20 PDFs diarios", "Módulo DIEP / DIAT"], cta: "Suscribirse", icon: Award },
    { name: "Corporativo", price: "$38.850", period: "CLP / mes", desc: "Para instituciones y corporativos.", features: ["Empresas ilimitadas", "Trabajadores ilimitados", "PDFs ilimitados", "Soporte premium"], cta: "Suscribirse", icon: Building2 },
  ];
  return (
    <section id="planes" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--brand-orange)" }}>Planes y precios</span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Un plan para cada tamaño de operación.
          </h2>
          <p className="mt-4 text-muted-foreground">Cambia o cancela cuando quieras. Sin letras chicas.</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.slice(0, 3).map((p) => <PlanCard key={p.name} p={p} />)}
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {plans.slice(3).map((p) => <PlanCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ p }: { p: { name: string; price: string; period: string; desc: string; features: string[]; cta: string; icon: typeof Shield; popular?: boolean } }) {
  return (
    <div className={`relative flex flex-col rounded-3xl border bg-card p-8 transition-all hover:-translate-y-1 ${p.popular ? "border-transparent shadow-2xl" : "border-border"}`}
      style={p.popular ? { boxShadow: "0 0 0 2px var(--brand-orange), 0 30px 60px -20px color-mix(in oklab, var(--brand-orange) 40%, transparent)" } : undefined}>
      {p.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: "var(--brand-orange)" }}>
          Más popular
        </div>
      )}
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: p.popular ? "color-mix(in oklab, var(--brand-orange) 14%, transparent)" : "color-mix(in oklab, var(--brand-blue) 12%, transparent)" }}>
          <p.icon className="h-5 w-5" style={{ color: p.popular ? "var(--brand-orange)" : "var(--brand-blue)" }} />
        </div>
        <div>
          <div className="font-display text-lg font-bold uppercase tracking-wide">{p.name}</div>
          <div className="text-xs text-muted-foreground">{p.desc}</div>
        </div>
      </div>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-4xl font-bold tracking-tight">{p.price}</span>
        <span className="text-xs uppercase tracking-wider text-muted-foreground">{p.period}</span>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--brand-blue)" }} />
            <span className="text-foreground/85">{f}</span>
          </li>
        ))}
      </ul>
      <a href="https://seguritoapp-467657972843.southamerica-west1.run.app/" target="_blank" rel="noopener noreferrer" className={`mt-7 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02]`}
        style={{ background: p.popular ? "var(--brand-orange)" : "var(--brand-blue)" }}>
        {p.cta}
      </a>
    </div>
  );
}

function FAQ() {
  const items = [
    { q: "¿Puedo probar la app gratis?", a: "Sí. Tienes 7 días con todas las funcionalidades sin tarjeta de crédito. Luego puedes seguir con el plan Free restringido o pasar a uno de pago." },
    { q: "¿La app cumple con la normativa chilena?", a: "Sí. SeguritoApp está diseñada en base a la Ley 16.744, D.S. 594, D.S. 44 y D.S. 67. Genera reportes con validez legal listos para fiscalización." },
    { q: "¿Funciona sin conexión a internet?", a: "Puedes registrar inspecciones y datos en terreno; al recuperar conexión se sincroniza automáticamente con la nube." },
    { q: "¿Cuántas empresas puedo gestionar?", a: "Depende del plan: desde 1 empresa en Free hasta empresas ilimitadas en el plan Corporativo." },
    { q: "¿Puedo cambiar de plan en cualquier momento?", a: "Sí, puedes subir o bajar de plan cuando quieras desde tu cuenta. El cambio es inmediato." },
    { q: "¿Mis datos están seguros?", a: "Sí. Usamos cifrado en tránsito y en reposo, respaldos automáticos y servidores con altos estándares de seguridad." },
  ];
  return (
    <section id="faq" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--brand-orange)" }}>FAQ</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Preguntas frecuentes</h2>
        </div>
        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {items.map((it, i) => (
            <details key={i} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-base font-semibold sm:text-lg">{it.q}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-center sm:p-16" style={{ color: "oklch(0.98 0 0)" }}>
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 30%, var(--brand-blue), transparent 50%), radial-gradient(circle at 80% 70%, var(--brand-orange), transparent 50%)" }} />
          <div className="relative">
            <Lock className="mx-auto h-10 w-10" style={{ color: "var(--brand-orange)" }} />
            <h2 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Tranquilidad y protección,<br /><span className="gradient-text">en tu bolsillo.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-white/70">
              Únete a cientos de prevencionistas que ya digitalizaron su gestión con SeguritoApp.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 text-[oklch(0.16_0.04_260)] transition-transform hover:scale-[1.02]">
                <Apple className="h-6 w-6" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-wider opacity-60">Descarga en</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="inline-flex items-center gap-3 rounded-2xl px-5 py-3.5 text-white transition-transform hover:scale-[1.02]" style={{ background: "var(--brand-orange)" }}>
                <PlayStoreIcon />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-wider opacity-90">Disponible en</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo.url} alt="SeguritoApp" className="h-10 w-10" />
              <span className="font-display text-xl font-bold">
                <span style={{ color: "var(--brand-blue)" }}>segurito</span>
                <span style={{ color: "var(--brand-orange)" }}>app</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              App de prevención de riesgos laborales. Tranquilidad y protección para empresas y profesionales.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://instagram.com/seguritoapp" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterCol title="Producto" links={["Beneficios", "Cómo funciona", "Planes", "Descargar"]} />

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider">Contacto</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> ventas@seguritoapp.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SeguritoApp. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5"><span className="text-base">🇨🇱</span> Chile</p>
        </div>
      </div>
    </footer>

  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold uppercase tracking-wider">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}><a href="#" className="transition-colors hover:text-foreground">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
