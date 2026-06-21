## Meta Pixel + eventos personalizados

**Pixel ID:** `1994241321199042` — se carga en todo el sitio (Opción 1) con eventos personalizados (Opción B).

### Cambios

1. **`src/routes/__root.tsx`** — Inyectar el script base del Pixel en `RootShell` (dentro de `<head>`) para que cargue en todas las rutas y dispare `PageView` automáticamente. Incluir el `<noscript>` con la imagen de fallback dentro de `<body>`.

2. **`src/lib/meta-pixel.ts`** (nuevo) — Helper tipado `trackPixel(event, params?)` que llama `window.fbq('track', ...)` de forma segura (verifica que exista).

3. **`src/routes/index.tsx`** — Disparar eventos personalizados:
   - **WhatsApp flotante** (`FloatingWhatsApp`, línea 606): `Lead` con `{ content_name: 'WhatsApp flotante' }` al hacer clic.
   - **Botones App Store** (líneas 139 y 517): `trackCustom('DownloadClick', { store: 'AppStore', location: 'hero'|'cta' })`.
   - **Botones Google Play** (líneas 146 y 524): `trackCustom('DownloadClick', { store: 'GooglePlay', location: 'hero'|'cta' })`.

### Detalles técnicos

- El Pixel solo se ejecuta en el cliente; el snippet se inyecta como `<script>` plano dentro del shell SSR — el código original de Meta ya hace `if (f.fbq) return;` por lo que es seguro frente a doble carga.
- Para tipar `window.fbq`, se agrega `declare global { interface Window { fbq?: (...args: any[]) => void } }` en `meta-pixel.ts`.
- Los eventos de descarga usan `trackCustom` (no es estándar de Meta), permitiendo segmentar por tienda y ubicación del botón en Ads Manager.
- No se modifica la lógica de negocio ni el diseño visual — solo se agregan handlers `onClick` que llaman al helper antes de la navegación nativa del enlace.
