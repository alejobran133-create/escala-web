# ESCALA Web

Home de ESCALA — Fase 1, revisión editorial inmersiva e interactiva. Leer [AGENTS.md](AGENTS.md) antes de cualquier cambio.

## Stack
Next.js 16.3.5, React 19.3, TypeScript 5.9, Tailwind CSS 4.3, App Router y ESLint.
Node.js 24.x y pnpm 11.19.0. Dependencias fijadas por pnpm-lock.yaml.

## Desarrollo
```sh
pnpm install --frozen-lockfile
pnpm dev
```
Abrir http://localhost:3000.

## Validación y producción
```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```
Build genera .next/; start sirve la compilación de producción.
No se requieren variables de entorno para la Home. La indexación está desactivada hasta autorizar publicación.

Despliegue de producción en Vercel: https://escala-web-psi.vercel.app/ (proyecto `bitiars-projects/escala-web`). Está enlazado localmente mediante `.vercel/`, que no se versiona. Para actualizarlo desde este directorio, validar y ejecutar `pnpm dlx vercel deploy --prod --yes` con la cuenta autorizada. `.vercelignore` excluye documentación, fuentes PDF y artefactos de QA del paquete; incluye la fuente web usada por Next.js.

## Revisión funcional en navegador
scripts/qa.cjs usa Playwright y Chrome del entorno de QA; Playwright no es dependencia de la aplicación.
Con Playwright disponible en NODE_PATH y el servidor iniciado:
```sh
node scripts/qa.cjs
```
Variables opcionales: QA_URL (predeterminado http://127.0.0.1:3097), QA_OUTPUT (predeterminado artifacts/qa-mail/) y CHROME_PATH.
En esta máquina se utilizó el Playwright incluido en el runtime de Codex, sin instalar nuevas dependencias.
Resultados y capturas locales: artifacts/qa-mail/. Validación sobre la URL pública: artifacts/qa-vercel/. Historial de revisiones previas: artifacts/qa-logo/, artifacts/qa-channels/, artifacts/qa-contact/, artifacts/qa-refresh/, artifacts/qa-ticker/, artifacts/qa-reel/ y artifacts/qa-controls/. Perfiles y archivos temporales: artifacts/tmp/, excluidos de Git.
La prueba verifica cinco viewports, siete servicios y sus imágenes, las dos familias tipográficas visibles, inicio/avance/pausa del recorrido visual, franja de disciplinas en movimiento continuo, pestañas horizontales en móvil y por teclado, acordeón, CTAs de contacto, validación de formulario, respuestas simuladas de entrega/activación/error, menú, foco, Escape, noindex y errores de navegador. Las pruebas automatizadas no envían datos reales a FormSubmit.
No hay tests unitarios ni auditoría completa de WCAG/Lighthouse.

## Estructura
- src/app/: Home, layout, metadatos y tokens/estilos.
- src/assets/fonts/: Fineday StyleOne, archivo local suministrado por el usuario.
- src/components/: Brand, Header, Icon, Modal, ContactForm, ServiceExplorer y DisciplineTicker. ServiceVisual y SolutionCard se conservan como componentes anteriores sin montar.
- src/content/home.ts: soluciones y proceso.
- public/brand/: logo web vigente Business Solutions S.A.S. y versiones anteriores conservadas.
- assets/brand/: PDF vigente suministrado por el usuario y PDF anterior conservado.
- public/images/brand-series/: nueve imágenes WebP vigentes creadas para la portada, las siete capacidades y el proceso. El stock previo en services/ y process-planning.jpg se conserva sin mostrar.
- scripts/qa.cjs: comprobación funcional.
- artifacts/qa-mail/: evidencias vigentes.
- docs/PROJECT_CONTEXT.md: alcance y pendientes.
- docs/DESIGN_SYSTEM.md: criterios visuales y procedencia de assets.
- docs/DECISIONS.md: decisiones y validaciones.
- AGENTS.md: reglas permanentes.

pnpm-workspace.yaml mantiene almacenamiento y cachés del gestor dentro del proyecto.
Tailwind examina solo src/ para evitar leer cachés o perfiles del navegador.
next dev añade un bloque informativo de Next.js a AGENTS.md, preservando las reglas ESCALA.

## Límites de esta fase
Correo e Instagram proporcionados por el usuario están publicados como enlaces directos: escalabusinessco@gmail.com y @_escalabusiness. El formulario envía los cuatro campos al endpoint AJAX de FormSubmit; un POST nativo sirve de respaldo cuando JavaScript no funciona. El servicio retiene las solicitudes hasta 30 días y las remitirá al correo después de su activación. Una prueba real devolvió activación pendiente y generó el correo de confirmación para escalabusinessco@gmail.com. Eddie debe abrirlo y confirmar el formulario antes de considerar verificada la recepción. La web no almacena los datos. Falta definir el aviso propio de tratamiento de datos; el sitio ya está públicamente accesible, aunque mantiene `noindex`. Referencias del proveedor: https://formsubmit.co/documentation y https://formsubmit.co/help.
Proyectos sin casos inventados. Las escenas editoriales generadas son representaciones de actividades, no equipo, clientes ni resultados de ESCALA. Fineday StyleOne se integró desde el ZIP entregado; Canva Sans y la verificación de derechos web de Fineday siguen pendientes.
Logo oficial vigente con el descriptor BUSINESS SOLUTIONS S.A.S., suministrado por el usuario en PNG. Las versiones anteriores se conservan como historial.
Despliegue activo en Vercel con dominio principal https://escalabusiness.company/ y alias técnico https://escala-web-psi.vercel.app/. Repositorio público: https://github.com/alejobran133-create/escala-web. La rama `main` sigue `origin/main`; el despliegue original se realizó por CLI y la integración automática de despliegues desde GitHub no se ha verificado.
ESLint 9 se mantiene por compatibilidad con sus plugins; su aviso de fin de soporte está documentado.

Documentación técnica oficial: https://nextjs.org/docs/app/getting-started/installation
