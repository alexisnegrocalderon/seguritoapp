Plan: Transformar la sección "Casos de uso" en "Opiniones de clientes" con 3 testimonios positivos.

Cambios en `src/routes/index.tsx` (sección `Testimonials`):

1. Actualizar el encabezado de sección:
   - Etiqueta superior: "Casos de uso" → "Opiniones de clientes"
   - Título: "Lo que viven nuestros usuarios" → "Lo que dicen quienes ya usan SeguritoApp"

2. Reemplazar el array `quotes` por 3 testimonios reales con:
   - Calificación de 5 estrellas (visual) al inicio de cada tarjeta.
   - Cita completa del cliente.
   - Nombre y cargo.
   - Color de acento alternado entre naranjo y azul.

3. Ajustar el diseño de las tarjetas:
   - Mostrar 5 estrellas (ícono `Star` de lucide-react) en la parte superior de la tarjeta.
   - Mantener el avatar circular con la inicial del cliente.
   - Mantener el layout de 3 columnas en desktop y 1 en móvil.
   - Preservar la animación del último tramo de la cita resaltado con el color de acento.

4. Contenido exacto a incorporar:

   Testimonio 1 — Carlos M., Prevencionista Independiente:
   "Probé SeguritoApp pensando que sería otra app más. A la primera semana ya tenía mis inspecciones y reportes mucho más ordenados. Hoy no imagino volver al Excel."
   Ventaja destacada: orden y centralización de inspecciones/reportes.

   Testimonio 2 — Fernanda R., Asesora en Prevención de Riesgos:
   "Lo que más me sorprendió fue el tiempo que ahorré. Antes terminaba mis informes de noche, ahora tengo todo centralizado y puedo enfocarme en lo realmente importante."
   Ventaja destacada: ahorro de tiempo y centralización.

   Testimonio 3 — Javier P., Consultor en Prevención de Riesgos:
   "Entré por curiosidad y terminé quedándome. SeguritoApp me dio más control, más tranquilidad y una forma mucho más profesional de gestionar a mis clientes."
   Ventaja destacada: control, tranquilidad y profesionalismo.

5. Verificación:
   - Compilar con `bun run build`.
   - Revisar la sección en vista móvil y desktop para confirmar que las estrellas y el texto se leen bien.

Nota: no se requieren cambios de backend ni nuevas dependencias.