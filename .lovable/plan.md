# Integrar la plataforma dentro del sitio (modal embebido)

## Objetivo
Cuando el usuario haga click en "Comenzar" o en cualquier botón que hoy lleva a `https://seguritoapp-467657972843.southamerica-west1.run.app/`, en vez de abrir una pestaña nueva, se abrirá un **modal full-screen** dentro del sitio con la plataforma cargada en un `<iframe>`. Verifiqué los headers del dominio y no envía `X-Frame-Options` ni `frame-ancestors`, así que se puede embeber sin problema.

## UX / Diseño (kinético oscuro, alineado a la marca)
- Overlay full-screen con fondo `bg-background/95` + `backdrop-blur-xl` y borde superior con gradiente naranja→azul (glow sutil).
- Barra superior compacta con:
  - Logo + nombre "Securito App"
  - Píldora con el host de la plataforma + indicador "● Conectado" (punto verde pulsante)
  - Botones: "Abrir en pestaña nueva" (icono `ExternalLink`) y "Cerrar" (icono `X`)
- Estado de carga: skeleton con shimmer + texto "Cargando plataforma segura…" mientras el iframe dispara `onLoad`.
- Animación de entrada: scale + fade (`animate-in zoom-in-95 fade-in`), cierre con `Esc` y click en backdrop.
- Body lock scroll cuando esté abierto.
- Responsive: en móvil ocupa 100vh/100vw, en desktop deja 16px de margen con bordes redondeados y `shadow-elegant`.

## Cambios técnicos
1. **Nuevo componente** `src/components/PlatformModal.tsx`
   - Usa `Dialog` de shadcn (`src/components/ui/dialog.tsx`) en modo full-screen custom.
   - Props: `open`, `onOpenChange`, `url` (default = URL de la plataforma).
   - Render: barra superior + `<iframe src={url} className="h-full w-full" allow="clipboard-read; clipboard-write; camera; microphone; geolocation" />` + estado `loading`.
   - Trackea pixel `PlatformOpen` al abrirse (mismo `trackPixelCustom` ya usado).

2. **Hook ligero** `usePlatformModal` (o contexto simple en `index.tsx`) con `const [platformOpen, setPlatformOpen] = useState(false)` para abrir desde cualquier botón.

3. **Reemplazar los `<a href="…run.app/">`** en `src/routes/index.tsx` por `<button onClick={() => setPlatformOpen(true)}>` conservando estilos y tracking. Lugares:
   - Nav desktop (línea 81) y menú móvil (línea 100)
   - Hero: botones AppStore y GooglePlay (líneas 149, 156)
   - Tarjetas de planes (línea 512)
   - CTA final (líneas 567, 574)
   - Botón sticky inferior (línea 649)
   - El de WhatsApp (línea 663) y el de Instagram **no** cambian.

4. **Montar `<PlatformModal />`** una sola vez al final del árbol de `IndexPage`.

## Detalles técnicos
- El iframe no necesita configuración del backend (no hay X-Frame-Options).
- Botón "Abrir en pestaña nueva" como fallback por si el usuario quiere pantalla completa real o si algún flujo (ej. OAuth) requiere top-level navigation.
- `sandbox` del iframe: **no** se aplica para no romper auth/cookies de la plataforma.
- Sin cambios de copy ni de contenido — solo comportamiento de los CTAs y un componente nuevo.

## Verificación
- Playwright: abrir `/`, clickear "Comenzar", screenshot del modal con iframe cargado, confirmar que la URL del sitio sigue siendo `/` (no navegó fuera), cerrar con Esc, confirmar que el modal desaparece.
