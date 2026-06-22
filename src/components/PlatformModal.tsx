import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { ExternalLink, X, Shield, Loader2 } from "lucide-react";
import { trackPixelCustom } from "@/lib/meta-pixel";

export const PLATFORM_URL = "https://seguritoapp-467657972843.southamerica-west1.run.app/";

type Ctx = { open: (location?: string) => void; close: () => void; isOpen: boolean };
const PlatformCtx = createContext<Ctx | null>(null);

export function PlatformModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const open = useCallback((location = "cta") => {
    setLoaded(false);
    setIsOpen(true);
    try { trackPixelCustom("PlatformOpen", { location }); } catch { /* noop */ }
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  // Lock body scroll + ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <PlatformCtx.Provider value={{ open, close, isOpen }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-background/95 backdrop-blur-xl animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Plataforma SeguritoApp"
        >
          {/* Top accent line */}
          <div
            className="h-[2px] w-full shrink-0"
            style={{ background: "linear-gradient(90deg, transparent, var(--brand-orange), var(--brand-blue), transparent)" }}
          />

          {/* Top bar */}
          <div className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-border/60 bg-background/80 px-3 sm:px-5">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl"
                style={{ background: "color-mix(in oklab, var(--brand-orange) 18%, transparent)" }}
              >
                <Shield className="h-4 w-4" style={{ color: "var(--brand-orange)" }} />
              </div>
              <div className="min-w-0">
                <div className="font-display text-sm font-bold leading-none">
                  <span style={{ color: "var(--brand-blue)" }}>segurito</span>
                  <span style={{ color: "var(--brand-orange)" }}>app</span>
                  <span className="ml-1.5 text-muted-foreground">/ plataforma</span>
                </div>
                <div className="mt-1 hidden items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground sm:flex">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Conexión segura · TLS 1.3
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-[var(--brand-orange)] hover:text-foreground sm:inline-flex"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Abrir en pestaña
              </a>
              <button
                onClick={close}
                aria-label="Cerrar plataforma"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background/50 text-muted-foreground transition-all hover:border-[var(--brand-orange)] hover:text-foreground hover:scale-105"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Iframe area */}
          <div className="relative flex-1 overflow-hidden bg-[oklch(0.12_0.03_260)]">
            {!loaded && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-background/80 backdrop-blur-sm">
                {/* shimmer skeleton */}
                <div className="absolute inset-0 opacity-30">
                  <div
                    className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-3xl animate-blob"
                    style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--brand-blue) 40%, transparent), transparent)" }}
                  />
                  <div
                    className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full blur-3xl animate-blob"
                    style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--brand-orange) 45%, transparent), transparent)", animationDelay: "-6s" }}
                  />
                </div>
                <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-border bg-card animate-pulse-ring">
                  <Loader2 className="h-6 w-6 animate-spin" style={{ color: "var(--brand-orange)" }} />
                </div>
                <div className="relative text-center">
                  <div className="font-display text-base font-semibold">Cargando plataforma segura…</div>
                  <div className="mt-1 text-xs text-muted-foreground">Estableciendo conexión cifrada con SeguritoApp</div>
                </div>
              </div>
            )}
            <iframe
              src={PLATFORM_URL}
              title="Plataforma SeguritoApp"
              onLoad={() => setLoaded(true)}
              className="h-full w-full border-0"
              allow="clipboard-read; clipboard-write; camera; microphone; geolocation; fullscreen"
            />
          </div>
        </div>
      )}
    </PlatformCtx.Provider>
  );
}

export function usePlatformModal() {
  const ctx = useContext(PlatformCtx);
  if (!ctx) throw new Error("usePlatformModal must be used within PlatformModalProvider");
  return ctx;
}
