import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield, FileCheck, Bell, BarChart3, Cloud, Lock,
  Smartphone, ClipboardList, FileText, Check, Apple,
  Mail, Instagram, ChevronDown,
  Zap, Award, Building2, Star,

} from "lucide-react";
import logo from "@/assets/logo.asset.json";
import dashboard from "@/assets/app-dashboard.asset.json";
import menu from "@/assets/app-menu.asset.json";
import diep from "@/assets/app-diep.asset.json";
import { trackPixel, trackPixelCustom } from "@/lib/meta-pixel";
import { Reveal } from "@/components/Reveal";
import { PlatformModalProvider, usePlatformModal } from "@/components/PlatformModal";

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
      <FloatingCTA />
      <FloatingWhatsApp />
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
      {/* Animated radial blobs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full opacity-40 blur-3xl animate-blob"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--brand-blue) 35%, transparent), transparent)" }}
      />
      <div
        className="pointer-events-none absolute top-40 -left-32 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl animate-blob"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--brand-orange) 45%, transparent), transparent)", animationDelay: "-6s" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full opacity-30 blur-3xl animate-blob"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--brand-blue) 45%, transparent), transparent)", animationDelay: "-12s" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur animate-pulse-ring">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: "var(--brand-orange)" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--brand-orange)" }} />
              </span>
              Prevención de riesgos · D.S. 44
            </div>
            <h1 className="mt-6 text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              La prevención<br />
              <span
                className="gradient-text animate-shimmer"
                style={{ backgroundImage: "linear-gradient(90deg, var(--brand-blue), var(--brand-orange), var(--brand-blue))" }}
              >sin papeles</span>,<br />
              sin sustos.
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground sm:text-xl">
              SeguritoApp digitaliza inspecciones, centraliza tu documentación y genera reportes automáticos. Cumple la normativa desde tu celular.
            </p>
            <div id="descargar" className="mt-8 flex flex-wrap gap-3">
              <a href="https://seguritoapp-467657972843.southamerica-west1.run.app/" target="_blank" rel="noopener noreferrer" onClick={() => trackPixelCustom("DownloadClick", { store: "AppStore", location: "hero" })} className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-foreground backdrop-blur transition-all hover:scale-[1.03] hover:-translate-y-0.5 hover:bg-white/10 hover:glow-blue">
                <Apple className="h-6 w-6 transition-transform group-hover:-rotate-6" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-wider opacity-70">Descarga en</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="https://seguritoapp-467657972843.southamerica-west1.run.app/" target="_blank" rel="noopener noreferrer" onClick={() => trackPixelCustom("DownloadClick", { store: "GooglePlay", location: "hero" })} className="group inline-flex items-center gap-3 rounded-2xl px-5 py-3.5 text-primary-foreground transition-all hover:scale-[1.03] hover:-translate-y-0.5 hover:glow-orange" style={{ background: "var(--brand-orange)" }}>
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
              className="absolute -inset-6 rounded-[3rem] opacity-40 blur-2xl animate-blob"
              style={{ background: "linear-gradient(135deg, var(--brand-blue), var(--brand-orange))" }}
            />
            <div className="relative animate-float-slow">
              <PhoneFrame src={dashboard.url} />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-card/90 p-3 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-3 animate-float" style={{ animationDelay: "-2s" }}>
              <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "color-mix(in oklab, var(--brand-orange) 15%, transparent)" }}>
                <Bell className="h-5 w-5" style={{ color: "var(--brand-orange)" }} />
              </div>
              <div className="leading-tight">
                <div className="text-xs text-muted-foreground">Alerta temprana</div>
                <div className="text-sm font-semibold">Inspección en 3 días</div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 hidden rounded-2xl border border-border bg-card/90 p-3 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-3 animate-float" style={{ animationDelay: "-4s" }}>
              <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "color-mix(in oklab, var(--brand-blue) 15%, transparent)" }}>
                <FileCheck className="h-5 w-5" style={{ color: "var(--brand-blue)" }} />
              </div>
              <div className="leading-tight">
                <div className="text-xs text-muted-foreground">Reporte listo</div>
                <div className="text-sm font-semibold">DIEP / DIAT</div>
              </div>
            </div>
            {/* Live metric pill */}
            <div className="absolute top-1/2 -left-10 hidden -translate-y-1/2 rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur md:block animate-drift">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Cumplimiento</div>
              <div className="font-display text-2xl font-bold" style={{ color: "var(--brand-blue)" }}>98%</div>
              <div className="mt-1 h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[98%] rounded-full" style={{ background: "var(--brand-blue)" }} />
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
  const items = ["DS 44", "DS 67", "DS 594", "+ley 16.744", "+protocolos MINSAL"];
  const loop = [...items, ...items];
  return (
    <section className="border-y border-border bg-surface/50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Cumplimiento normativo chileno
        </p>
        <div
          className="mt-6 overflow-hidden"
          style={{ maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}
        >
          <div className="flex w-max items-center gap-x-12 text-base font-semibold text-muted-foreground/80 animate-marquee">
            {loop.map((i, idx) => (
              <span key={idx} className="font-display whitespace-nowrap">{i}</span>
            ))}
          </div>
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
            <Reveal key={i} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:border-foreground/25 hover:shadow-2xl">
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(420px circle at var(--mx,50%) var(--my,30%), color-mix(in oklab, ${i % 2 === 0 ? "var(--brand-blue)" : "var(--brand-orange)"} 18%, transparent), transparent 60%)` }}
                />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: i % 2 === 0 ? "color-mix(in oklab, var(--brand-blue) 12%, transparent)" : "color-mix(in oklab, var(--brand-orange) 12%, transparent)" }}>
                    <b.icon className="h-6 w-6" style={{ color: i % 2 === 0 ? "var(--brand-blue)" : "var(--brand-orange)" }} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            </Reveal>
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
    <section id="como-funciona" className="relative bg-ink py-24 text-background sm:py-32 overflow-hidden" style={{ color: "oklch(0.98 0 0)" }}>
      <div className="absolute inset-0 opacity-[0.07] animate-blob" style={{ background: "radial-gradient(circle at 30% 0%, var(--brand-blue), transparent 50%), radial-gradient(circle at 70% 100%, var(--brand-orange), transparent 50%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--brand-orange)" }}>Cómo funciona</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            En 3 pasos estás operando.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.06]">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: i === 1 ? "var(--brand-blue)" : "var(--brand-orange)" }} />
                <div className="relative">
                  <div className="font-display text-6xl font-bold transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" style={{ color: "color-mix(in oklab, var(--brand-orange) 80%, transparent)" }}>{s.n}</div>
                  <s.icon className="mt-6 h-7 w-7 transition-transform duration-500 group-hover:rotate-12" style={{ color: "var(--brand-blue)" }} />
                  <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
                </div>
              </div>
            </Reveal>
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
            <Reveal key={i} delay={i * 120}>
              <div className="group">
                <div className="tilt-hover relative overflow-hidden rounded-3xl border border-border bg-surface p-8">
                  <div
                    className="absolute inset-x-8 top-8 h-40 rounded-2xl opacity-60 blur-2xl animate-blob"
                    style={{ background: i === 1 ? "color-mix(in oklab, var(--brand-blue) 40%, transparent)" : "color-mix(in oklab, var(--brand-orange) 35%, transparent)", animationDelay: `${-i * 4}s` }}
                  />
                  <div className="relative animate-float-slow" style={{ animationDelay: `${-i * 2}s` }}>
                    <PhoneFrame src={s.src} />
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      q: "Probé SeguritoApp pensando que sería otra app más. A la primera semana ya tenía mis inspecciones y reportes mucho más ordenados. Hoy no imagino volver al Excel.",
      a: "Carlos M.",
      role: "Prevencionista Independiente",
      accent: "orange" as const,
    },
    {
      q: "Lo que más me sorprendió fue el tiempo que ahorré. Antes terminaba mis informes de noche, ahora tengo todo centralizado y puedo enfocarme en lo realmente importante.",
      a: "Fernanda R.",
      role: "Asesora en Prevención de Riesgos",
      accent: "blue" as const,
    },
    {
      q: "Entré por curiosidad y terminé quedándome. SeguritoApp me dio más control, más tranquilidad y una forma mucho más profesional de gestionar a mis clientes.",
      a: "Javier P.",
      role: "Consultor en Prevención de Riesgos",
      accent: "orange" as const,
    },
  ];
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--brand-orange)" }}>Opiniones de clientes</span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Lo que dicen quienes ya usan <span className="gradient-text">SeguritoApp.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-foreground/25 hover:shadow-2xl">
                <div>
                  <div className="flex items-center gap-0.5" aria-label="5 de 5 estrellas">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current transition-transform duration-500 group-hover:scale-110" style={{ color: "var(--brand-orange)", transitionDelay: `${s * 40}ms` }} />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                    <span className="text-foreground">"</span>
                    {t.q}
                    <span className="text-foreground">"</span>
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-white transition-transform duration-500 group-hover:scale-110" style={{ background: t.accent === "orange" ? "var(--brand-orange)" : "var(--brand-blue)" }}>
                    {t.a[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.a}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: "Free", price: "$0", period: "para siempre", desc: "Prueba gratuita (7 días full, luego restringido).", features: ["Límite: 1 empresa, 10 trabajadores", "Límite: 1 PDF por día", "Sin DIEP / DIAT", "Marca de agua: 'Generado por Segurito'"], cta: "Empezar gratis", icon: Shield },
    { name: "Básico", price: "$9.800", period: "CLP / mes", desc: "Para pequeños equipos y asesores.", features: ["Hasta 2 empresas", "Hasta 100 trabajadores en total", "Límite: 3 PDFs diarios", "Sin DIEP / DIAT"], cta: "Suscribirse Básico", icon: Shield },
    { name: "Avanzado", price: "$14.900", period: "CLP / mes", desc: "Para consultoras en crecimiento.", features: ["Hasta 4 empresas", "Hasta 250 trabajadores en total", "Límite: 10 PDFs diarios", "Módulo DIEP / DIAT incluido"], cta: "Suscribirse Avanzado", icon: Zap, popular: true },
    { name: "Profesional", price: "$21.650", period: "CLP / mes", desc: "Para grandes operaciones.", features: ["Hasta 6 empresas", "Hasta 500 trabajadores en total", "Límite: 20 PDFs diarios", "Módulo DIEP / DIAT incluido"], cta: "Suscribirse Profesional", icon: Award },
    { name: "Corporativo", price: "$38.850", period: "CLP / mes", desc: "Para instituciones y corporativos.", features: ["Hasta 10 empresas", "Hasta 2.000 trabajadores en total", "PDFs diarios ilimitados", "Todas las funciones premium y soporte"], cta: "Suscribirse Corporativo", icon: Building2 },
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
          {plans.slice(0, 3).map((p, i) => (
            <Reveal key={p.name} delay={i * 90}><PlanCard p={p} /></Reveal>
          ))}
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {plans.slice(3).map((p, i) => (
            <Reveal key={p.name} delay={i * 90}><PlanCard p={p} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ p }: { p: { name: string; price: string; period: string; desc: string; features: string[]; cta: string; icon: typeof Shield; popular?: boolean } }) {
  return (
    <div className={`group relative flex h-full flex-col rounded-3xl border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${p.popular ? "border-transparent shadow-2xl" : "border-border hover:border-foreground/25"}`}
      style={p.popular ? { boxShadow: "0 0 0 2px var(--brand-orange), 0 30px 60px -20px color-mix(in oklab, var(--brand-orange) 40%, transparent)" } : undefined}>
      {p.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 animate-pulse-ring rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: "var(--brand-orange)" }}>
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
    { q: "¿Cuántas empresas puedo gestionar?", a: "Depende del plan: desde 1 empresa en Free hasta 10 empresas en Corporativo." },
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
          <div className="absolute inset-0 opacity-40 animate-blob" style={{ background: "radial-gradient(circle at 20% 30%, var(--brand-blue), transparent 50%), radial-gradient(circle at 80% 70%, var(--brand-orange), transparent 50%)" }} />
          <div className="relative">
            <Lock className="mx-auto h-10 w-10 animate-float" style={{ color: "var(--brand-orange)" }} />
            <h2 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Tranquilidad y protección,<br /><span className="gradient-text">en tu bolsillo.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-white/70">
              Únete a cientos de prevencionistas que ya digitalizaron su gestión con SeguritoApp.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="https://seguritoapp-467657972843.southamerica-west1.run.app/" target="_blank" rel="noopener noreferrer" onClick={() => trackPixelCustom("DownloadClick", { store: "AppStore", location: "cta" })} className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 text-[oklch(0.16_0.04_260)] transition-transform hover:scale-[1.02]">
                <Apple className="h-6 w-6" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-wider opacity-60">Descarga en</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="https://seguritoapp-467657972843.southamerica-west1.run.app/" target="_blank" rel="noopener noreferrer" onClick={() => trackPixelCustom("DownloadClick", { store: "GooglePlay", location: "cta" })} className="inline-flex items-center gap-3 rounded-2xl px-5 py-3.5 text-white transition-transform hover:scale-[1.02]" style={{ background: "var(--brand-orange)" }}>
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

function FloatingCTA() {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-[280px] -translate-x-1/2 md:hidden">
      <a
        href="https://seguritoapp-467657972843.southamerica-west1.run.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center rounded-full border-0 bg-[var(--brand-orange)]/85 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-lg transition-transform hover:scale-[1.03] active:scale-[0.98]"
      >
        Empezar gratis
      </a>
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/message/MOXJZHJABBC7G1"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackPixel("Lead", { content_name: "WhatsApp flotante" })}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-20 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform hover:scale-110 active:scale-95 md:bottom-5 animate-pulse-ring"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

