## Objetivo
Aplicar un tema oscuro elegante con fondo azul oscuro profundo en toda la landing de SeguritoApp, manteniendo la identidad azul/naranja y asegurando excelente contraste y legibilidad.

## Paleta de fondo (azul oscuro elegante)
- `--background`: `oklch(0.16 0.04 260)` — azul marino muy oscuro, base principal
- `--surface`: `oklch(0.19 0.045 260)` — superficie secundaria sutilmente más clara
- `--surface-2`: `oklch(0.22 0.05 260)` — para bandas alternas (Logos, Testimonials)
- `--card`: `oklch(0.20 0.045 260)` — tarjetas con leve elevación
- `--foreground`: `oklch(0.98 0.005 250)` — texto principal casi blanco
- `--muted-foreground`: `oklch(0.72 0.02 260)` — texto secundario azul-grisáceo
- `--border`: `oklch(1 0 0 / 10%)` — bordes sutiles translúcidos
- `--primary` (azul brillante para acentos sobre oscuro): `oklch(0.72 0.18 260)`
- `--brand-orange` se mantiene vibrante: `oklch(0.72 0.19 38)` para CTAs y acentos

## Cambios en `src/styles.css`
1. Mover los tokens oscuros al `:root` (no depender de la clase `.dark`) para que todo el sitio sea oscuro por defecto.
2. Subir luminosidad de `--brand-blue` para que destaque sobre fondo oscuro.
3. Ajustar `bg-grid` a líneas con `var(--brand-blue)` al ~12% para que la cuadrícula del Hero se vea sutil sobre el azul oscuro.
4. Ajustar opacidades de `glow-blue`/`glow-orange` (más intensas, ~70%) para conseguir el efecto premium.

## Cambios en `src/routes/index.tsx`
Reemplazar utilidades hardcoded que rompen el modo oscuro y ajustar contrastes:
- Nav: botón "Empezar gratis" pasa de `bg-foreground text-background` a `bg-primary text-primary-foreground` (o gradient azul→naranja) para no quedar como botón blanco sobre oscuro.
- Hero: botón App Store de `bg-foreground` a una variante con borde blanco translúcido (`bg-white/5 border border-white/15 text-foreground backdrop-blur`).
- `PhoneFrame`: el marco con `border-foreground bg-foreground` queda blanco en oscuro; cambiar a `border-[oklch(0.08_0.03_260)] bg-[oklch(0.08_0.03_260)]` (un negro azulado) para que siga pareciendo un teléfono.
- Sección `HowItWorks`: actualmente usa `bg-ink` con texto claro; al ser todo oscuro ya, cambiarla a `bg-surface-2` para crear contraste de banda más clara y mantener variedad visual.
- Sección `Logos` y `Testimonials`: `bg-surface/50` y `bg-surface` se ven bien con los nuevos tokens — verificar contraste de textos.
- Pricing: tarjeta destacada y tarjetas normales — confirmar que `bg-card` y bordes funcionan; subir el plan "Más popular" con `border-brand-orange` y leve glow naranja.
- Footer: ya neutral; verificar que enlaces tengan suficiente contraste.

## Verificación
- Cargar la preview tras los cambios y revisar visualmente Hero, Benefits, HowItWorks, Mockups, Pricing y Footer.
- Comprobar que CTAs, badges y textos secundarios mantengan contraste AA.

## Archivos a modificar
- `src/styles.css`
- `src/routes/index.tsx`
