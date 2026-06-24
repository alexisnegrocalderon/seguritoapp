Modificar la sección Hero de la landing para ajustar los objetos flotantes del mockup del celular.

Cambios a realizar en `src/routes/index.tsx`:

1. Actualizar el objeto flotante izquierdo (live metric pill) que actualmente dice "Cumplimiento 98%":
   - Cambiar la etiqueta "Cumplimiento" por "Carta Gantt".
   - Mantener el valor "98%" pero en color verde.

2. Acercar los tres objetos flotantes al teléfono:
   - Objeto inferior izquierdo (Alerta temprana / Inspección en 3 días): reducir la separación actual `-bottom-4 -left-4` para que quede más pegado al borde del celular.
   - Objeto superior derecho (Reporte listo / DIEP / DIAT): reducir la separación actual `-top-3 -right-3` para acercarlo al teléfono.
   - Objeto izquierdo medio (Carta Gantt / 98%): reducir la separación horizontal actual `-left-10` para que quede más cerca del mockup.

3. En `src/styles.css` agregar una variable semántica de color verde (por ejemplo `--success`) para aplicar el 98% sin romper el sistema de tokens, y usarla en el Hero.

Verificación: revisar visualmente en el preview que los tres objetos flotantes queden más próximos al celular y que el texto "Carta Gantt" con "98%" verde se lea correctamente.