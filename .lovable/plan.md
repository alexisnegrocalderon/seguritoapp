# Eliminar modal integrado y restaurar apertura externa

## Objetivo
Quitar el iframe/modal full-screen que carga la plataforma dentro del sitio y volver a abrir SeguritoApp en una pestaña del navegador nueva. Esto evita problemas con pasarelas de pago, sesiones de autenticación y bases de datos que ocurren cuando los usuarios usan la app desde un iframe.

## Cambios técnicos

### 1. Eliminar componente del modal
- Borrar `src/components/PlatformModal.tsx` (provider, hook, contexto e iframe).

### 2. Revertir `src/routes/index.tsx`
- Quitar el import de `PlatformModalProvider` y `usePlatformModal`.
- Quitar el wrapper `<PlatformModalProvider>` alrededor del JSX de `Landing`.
- Reemplazar cada `button` que hoy llama a `platform.open(location)` por un `<a>` que apunte a:
  - `https://seguritoapp-467657972843.southamerica-west1.run.app/`
  - `target="_blank"`
  - `rel="noopener noreferrer"`
- Conservar el tracking de Meta Pixel (`trackPixelCustom`) donde ya existía mediante `onClick`.
- Lugares a cambiar:
  - Nav desktop: "Empezar gratis"
  - Nav móvil: "Empezar gratis"
  - Hero: botón App Store
  - Hero: botón Google Play
  - Tarjetas de planes: botón de cada plan
  - CTA final: botón App Store
  - CTA final: botón Google Play
  - Botón flotante móvil: "Empezar gratis"
- Los enlaces de Instagram y WhatsApp permanecen sin cambios.

### 3. Actualizar `.lovable/plan.md`
- Reemplazar el plan anterior del modal embebido por la nueva decisión: la plataforma se abre en pestaña externa.

### 4. Verificación de limpieza
- Revisar que no queden referencias a `PlatformModal`, `usePlatformModal` ni `PLATFORM_URL` en el repositorio.

## Verificación final
- Ejecutar el build de desarrollo para confirmar que no hay errores de import ni de sintaxis.
- Revisar visualmente que los CTAs sean enlaces que abran la plataforma en una pestaña nueva y que el modal no se renderice.