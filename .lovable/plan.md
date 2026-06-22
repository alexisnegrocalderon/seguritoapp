## Cambios solicitados

### 1. "20 días gratis" → "7 días gratis" (en todo el sitio)

Revisé el código y verifiqué que el texto "20 días" NO está dentro de las imágenes de los mockups de celular (esas son imágenes estáticas que muestran un dashboard genérico). El texto que ves "en la parte superior del celular" en vista móvil es un chip de HTML que aparece junto al mockup. Es solo texto, así que se cambia en código.

Aparece en 3 lugares de `src/routes/index.tsx`:

- **Hero (línea 165)** — chip con check: `20 días gratis` → `7 días gratis`
- **Plan Free (línea 450)** — descripción: `Prueba gratuita (20 días full, luego restringido)` → `Prueba gratuita (7 días full, luego restringido)`
- **FAQ (línea 529)** — respuesta: `Tienes 20 días con todas las funcionalidades…` → `Tienes 7 días con todas las funcionalidades…`

### 2. Quitar el bloque "Restricción de uso" de las tarjetas de planes

En `PlanCard` (líneas ~504-510), eliminar todo el recuadro gris que muestra el ícono ⚠️ + título "RESTRICCIÓN DE USO" + texto. Las tarjetas quedan con: nombre, descripción, precio y la lista de checks (sin cambios en los checks).

También limpiar el campo `restriccion` del array `plans` y de la firma del componente `PlanCard`, ya que dejará de usarse.

### Lo que NO cambia

- Los mockups de celular (imágenes) — no contienen el texto "20 días".
- Los precios ni las características (checks) de cada plan.
- El resto de la sección de planes (badge "Más popular", animaciones, layout 3+2).

### Verificación

Después de aplicar los cambios, capturo screenshots con Playwright del hero y de la sección de planes para confirmar que se ven correctos.
