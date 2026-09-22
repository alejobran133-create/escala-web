# ESCALA Web

## Roles
- ChatGPT actúa como arquitecto: define arquitectura, diseño, fases, criterios y próximos encargos.
- Codex actúa como ejecutor técnico: implementa, prueba, corrige y reporta.
- Codex NO debe adelantar fases no solicitadas ni redefinir la dirección del producto.

## Fuentes de verdad
1. Instrucciones expresas del usuario.
2. Imagen de referencia aprobada.
3. Brief oficial de ESCALA suministrado para el proyecto.
4. Decisiones técnicas documentadas en el repositorio.

Ante contradicciones importantes, detener solo la parte afectada y reportarla; no inventar soluciones empresariales.

## Identidad de ESCALA
ESCALA es una firma integral de soluciones empresariales.
Mensajes rectores:
- “Analizamos antes de avanzar.”
- “Estrategia, diseño y tecnología para construir mejores negocios.”

Evitar apariencia de agencia creativa genérica, software house genérica, startup tecnológica o plantilla SaaS.
Lenguaje visual empresarial, editorial, sobrio, premium, particular y moderno.

## Reglas visuales
- Blanco puro #FFFFFF; borgoña como color principal, con HEX configurable mediante design token hasta aprobación.
- Neutros claros, negro y grises. No usar azul tecnológico como identidad principal.
- Mucho espacio negativo y composición editorial.
- Fineday One + Canva Sans solo cuando estén disponibles legalmente como webfonts. No descargar ni falsificar fuentes.
- No recrear el logo: utilizar únicamente el asset oficial cuando esté disponible.
- Animaciones discretas y funcionales.
- Evitar efectos futuristas, neón, glassmorphism excesivo, tarjetas innecesarias y fotografías corporativas cliché.

## Contenido
Nunca inventar clientes, proyectos, casos de éxito, métricas, testimonios, años de experiencia, certificaciones, integrantes del equipo, direcciones, teléfonos, correos, precios ni información legal.
Si falta un dato, usar un placeholder técnico claramente identificado o dejar la estructura preparada.

## Ingeniería
- Mantener Next.js, TypeScript, Tailwind CSS y App Router mientras sea razonable.
- Componentes reutilizables y design tokens centralizados en src/app/globals.css.
- Responsive real: desktop, laptop, tablet y móvil.
- HTML semántico, accesibilidad, performance, SEO técnico y optimización de assets.
- No introducir dependencias innecesarias. Mantener código limpio y mantenible.
- Usar pnpm y mantener pnpm-lock.yaml; no mezclar gestores.
- Trabajar exclusivamente dentro de escala-web. No modificar el espejo de ChatGPT ni archivos externos.
- No publicar ni configurar servicios externos sin un encargo que lo autorice.

## Forma de trabajar
Antes de cada fase:
1. Inspeccionar el estado actual.
2. Entender el encargo.
3. Implementar únicamente el alcance autorizado.
4. Ejecutar las validaciones disponibles.
5. Corregir errores.
6. Revisar visualmente cuando el entorno lo permita.
7. Entregar informe para ChatGPT.
8. Detenerse y esperar la siguiente fase.

No comenzar automáticamente una fase posterior.

## Documentación
Mantener esta base simple: AGENTS.md, README.md, docs/PROJECT_CONTEXT.md, docs/DESIGN_SYSTEM.md y docs/DECISIONS.md.
Conservar documentación útil, reutilizar equivalentes y evitar duplicación.
La memoria técnica vive en estos documentos; no modificar memorias externas.

## Reportes
Indicar qué se hizo, archivos creados/modificados, decisiones técnicas, pruebas ejecutadas, resultado de build/lint/tests, evidencia visual si existe, pendientes, placeholders y riesgos o discrepancias.
Nunca afirmar que una prueba se ejecutó si no se ejecutó.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
