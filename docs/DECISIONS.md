# Decisiones

## 2026-09-17 — Base inicial
- Proyecto independiente en C:/Users/EDDIE CAICEDO/Documents/escala-web; el espejo de ChatGPT permanece intacto.
- Stack autorizado: Next.js, TypeScript, Tailwind CSS y App Router.
- pnpm como gestor disponible; versiones exactas y lockfile para reproducibilidad.
- Sin generador ni dependencias de UI adicionales; configuración mínima explícita.
- Tokens centralizados; borgoña #701F38 provisional hasta aprobación.
- Fallbacks tipográficos del sistema hasta disponer de webfonts autorizadas; sin logo recreado.
- Solo página provisional en /; arquitectura comercial y diseño final pendientes del siguiente encargo.
- Metadatos base en español; indexación desactivada mientras el sitio sea provisional.
- Sin publicación de casos ni datos empresariales no suministrados.
- Memoria técnica local en docs/; no modificar archivos externos.

- Compatibilidad: TypeScript 5.9 y ESLint 9 por los rangos soportados de los plugins de eslint-config-next; ESLint 9 emite aviso de fin de soporte. Revisar actualización cuando los plugins admitan ESLint 10.
- Incidencia de instalación: pnpm 11 ignoró las opciones iniciales de .npmrc y utilizó su caché global. Se corrigió a pnpm-workspace.yaml con cachés locales. No se modificaron documentos ni código externos; sí se produjeron escrituras automáticas iniciales del gestor fuera del proyecto.

## Validación de la base — 2026-09-17
- pnpm build: correcto; ruta / prerenderizada.
- pnpm lint: correcto, sin errores ni advertencias.
- pnpm typecheck: correcto.
- pnpm peers check: sin incompatibilidades.
- Servidor de producción: HTTP 200 en /; idioma es, mensaje rector y noindex presentes.
- No hay suite de tests automatizados ni revisión visual en navegador en esta fase.

## 2026-09-17 — Recepción del logo oficial
- Recibido ESCALA.pdf del usuario; copiado sin cambios a assets/brand/ESCALA-original.pdf.
- Revisada visualmente su única página. Exportación directa PNG 1600 × 1600 en public/brand/escala-logo-oficial.png; sin recreación, recoloración ni extracción de fuentes.
- Descriptor oficial: BUSINESS STRATEGY & RESEARCH; la referencia inicial muestra BUSINESS SOLUTIONS. Se conserva el archivo recibido y se deja pendiente conciliar el descriptor comercial.
- No se modifica el frontend en esta actualización. Logo preparado para su integración en la Home, cuya implementación sigue pendiente.

## 2026-09-17 — Home implementada / Fase 1
- Se completa la Home según la estructura de la referencia: cabecera, hero, siete soluciones, manifiesto, proceso y cierre visión/contacto.
- Se utiliza el logo oficial blanco/borgoña, con encuadre CSS de márgenes y proporciones intactas. No se cambia su descriptor.
- Componentes: Brand, Header, Icon, Modal/ContactButton y SolutionCard. Contenido centralizado en src/content/home.ts.
- Proyectos y contacto muestran pendientes explícitos. Sin casos inventados, formularios que simulen envíos ni datos de contacto ficticios.
- Fotografías provisionales Pexels y fuentes del sistema; fuentes y procedencia en DESIGN_SYSTEM.md. No se afirma reproducción exacta de assets de la referencia.
- Responsive: 4/2/1 columnas según ancho; menú desplegable bajo 1100px, hero y cierre apilados y proceso vertical bajo 761px.
- No se añaden dependencias de ejecución. Playwright del runtime se utiliza solo para QA.
- Tailwind limitado a src/: se corrigió un fallo de Turbopack causado por lectura de un archivo LOCK del perfil Chromium de pruebas. Antes de redirigir TEMP al proyecto, Next.js generó un log de diagnóstico en la carpeta temporal del sistema. No se modificaron documentos ni proyectos externos.
- Se corrigió desbordamiento de texto en el cierre a 320px y se verificó restauración de foco/scroll al cerrar diálogos.
- next dev añadió su bloque oficial de orientación a AGENTS.md; se conservan todas las reglas ESCALA.
- Las capturas completas expanden temporalmente la altura del viewport para evitar omisiones de capas de imágenes en Chromium. Las pruebas y capturas *-viewport.png usan las dimensiones declaradas.

## Validación final de Fase 1 — 2026-09-17
- pnpm lint: correcto, sin errores ni advertencias.
- pnpm typecheck: correcto.
- pnpm build: correcto; / prerenderizada estáticamente.
- pnpm start --hostname 127.0.0.1 --port 3097: servidor de producción local disponible.
- node scripts/qa.cjs con Playwright del runtime: 74 comprobaciones superadas sobre producción; cero errores JavaScript/HTTP observados.
- Viewports verificados: desktop 1440×900, laptop 1280×800, tablet 768×1024, móvil 390×844 y móvil estrecho 320×740; sin desbordamiento horizontal.
- Comprobados anclas, siete diálogos de soluciones, tres CTAs de contacto, Proyectos, Sobre ESCALA, menú móvil, teclado, Escape, foco, scroll, movimiento reducido, metadatos y carga de imágenes.
- Optimización de imágenes: respuestas image/webp y caché validada (200/304).
- Revisadas visualmente capturas desktop, móvil y modal de contacto de producción. Evidencias y resultados: artifacts/qa/.
- Sin tests unitarios, Lighthouse, auditoría WCAG completa ni prueba en Safari/Firefox; no se afirma cobertura de esos puntos.
- Pendiente: aprobación visual y de assets, contacto/integraciones, publicación y primer commit (sin identidad Git de autor). No se ejecuta Fase 2.

## 2026-09-17 — Ajuste de cabecera solicitado por el usuario
- Barra de navegación completa en borgoña y logo sin recuadro visible, conservando el original. Implementación exclusivamente CSS (mix-blend-mode: lighten sobre el borgoña actual).
- Enlaces, control móvil, borde de Contacto y focos visibles en blanco. Ventanas informativas conservan su superficie blanca y texto oscuro.
- Validación: lint y build correctos; QA funcional de 74 comprobaciones y capturas responsive actualizadas.

## 2026-09-17 — Simplificación e interacción solicitadas por el usuario
- Nueva dirección autorizada: reducir carga visual y relacionar las imágenes con los servicios. Se sustituye la reproducción literal de la referencia por una Home editorial ligera.
- Hero reducido al mensaje rector; un CTA principal. Se retiran fotos de oficina/montaña, bloques repetidos y Proyectos de navegación.
- Nuevo ServiceExplorer: siete necesidades, un servicio visible, pestañas accesibles, selector móvil, siguiente opción y contacto contextual.
- Nuevo ServiceVisual: siete ilustraciones SVG de las capacidades. Conceptuales, sin clientes ni métricas inventadas.
- Proceso mediante acordeón nativo, un paso abierto. Cabecera borgoña y logo oficial conservados.
- Se refuerza la contención explícita del foco en diálogos reutilizados tras detectar una salida de foco en QA.
- CSS simplificado; no se agregan dependencias. Contacto sigue pendiente y no envía mensajes.
- Lint, typecheck y build correctos. QA actualizado: 128 comprobaciones superadas en producción, cero errores JavaScript/HTTP observados.
- Cinco viewports: 1440×900, 1280×800, 768×1024, 390×844 y 320×740; sin desbordamiento horizontal. Se verifican todas las selecciones, siete visuales distintos, teclado, contacto contextual, acordeón, menú y movimiento reducido.
- Altura inicial a 390px: 1993px, frente a 3944px de la versión previa, con el proceso colapsado salvo su primer paso. Desktop 1440px: 1787px frente a 2262px.
- Evidencia vigente: artifacts/qa-interactive/. Historial conservado en artifacts/qa/ y artifacts/qa-v1/. Revisadas capturas desktop, móvil, tablet y visuales de diseño, tecnología y automatización.
- Vista previa del navegador del usuario recargada y comprobada con la nueva Home.
- Sin despliegue público ni cambios en las limitaciones de contacto, fuentes o identidad Git.

## 2026-09-17 — Revisión editorial con fotografías de servicios
Encargo: la propuesta con diagramas se veía básica; el usuario pidió diseño con imágenes relacionadas con la oferta.
- Portada fotográfica de análisis y diseño, con jerarquía editorial, composición superpuesta y enlace al proceso.
- Siete fotografías distintas en el explorador; cada selección actualiza imagen, mensaje, etiquetas y contacto contextual.
- Planificación visual acompaña al proceso; se conserva cabecera borgoña y logo oficial.
- Fuentes y licencia Pexels registradas en DESIGN_SYSTEM.md. Material representativo, no equipo/casos de ESCALA.
- Sin dependencias nuevas, sin publicación, sin cambios fuera del proyecto.
- Archivos de esta revisión: src/app/page.tsx, src/app/globals.css, src/components/service-explorer.tsx, nuevo src/content/service-images.ts, siete JPG en public/images/services/, scripts/qa.cjs, README y tres documentos docs/.
- Validaciones finales: pnpm lint, pnpm typecheck y pnpm build exitosos. node scripts/qa.cjs: 128 comprobaciones aprobadas, cero errores de navegador/HTTP en el recorrido.
- Pantallas: 1440x900, 1280x800, 768x1024, 390x844 y 320x740; sin desbordamiento horizontal. Siete imágenes de servicio comprobadas con decode y texto alternativo. Menú, pestañas, teclado, acordeón, diálogos, foco y navegación verificados.
- Revisión visual de capturas desktop, móvil y panel de automatización. Se eliminó un texto superpuesto de la portada detectado en QA y se regeneró la evidencia.
- Evidencia actual: artifacts/qa-photographic/; resultados en results.json. Versiones previas conservadas.
- No se ejecutaron tests unitarios, Lighthouse ni auditoría WCAG completa. Pendientes de marca, contacto, casos e integraciones sin cambios.
- Servidor local de producción actualizado en http://127.0.0.1:3097; pestaña existente recargada y contenido comprobado.

## 2026-09-17 — Reorganización visual inmersiva
El usuario pidió una versión más llamativa e imponente, elegante e interactiva sin recarga. Se rehízo la Home con portada fotográfica a pantalla ancha, titular mayor, franja de disciplinas, sección de servicios con siete pestañas horizontales y panel editorial único, proceso de dos columnas y contacto destacado. En móvil las pestañas se deslizan y el panel se apila. Se mantienen siete capacidades, el logo oficial, la barra borgoña y las limitaciones reales de contacto/casos. No se añaden dependencias ni se avanza a otra fase. Evidencia actual: artifacts/qa-premium/.
- Ajuste final de imagen del proceso: se usa una fotografía de manos organizando notas (Alena Darmel / Pexels) en lugar del retrato de stock; fuente registrada en DESIGN_SYSTEM.md.
- Validación final del rediseño: `pnpm lint`, `pnpm typecheck` y `pnpm build` correctos; `node scripts/qa.cjs` aprobó 128 comprobaciones en 1440×900, 1280×800, 768×1024, 390×844 y 320×740. Sin errores del navegador ni respuestas HTTP fallidas en el recorrido. Capturas desktop, tablet y móvil revisadas; evidence actual en artifacts/qa-premium/. La pestaña local abierta se actualizó al build final.

## 2026-09-17 — Fineday StyleOne en titulares
El usuario entregó Fineday.zip y pidió usar la tipografía en títulos o elementos importantes. El ZIP contenía cuatro TTF, sin documento de licencia. Se compararon visualmente las cuatro variantes; se eligió Fineday-StyleOne.ttf (SHA-256 3b01279bf5fee1ddfac33c99e339fcf1089f9bf7b7173ddfa4b7a9dfe86321c0) y se copió únicamente esa variante a src/assets/fonts/. Se sirve localmente con next/font/local, display swap, y se aplica solo a palabras destacadas de la portada, soluciones, proceso y contacto. El resto de los títulos conserva Georgia para mantener legibilidad y equilibrio; Canva Sans no se cambió. La fuente original en Descargas no se modificó. El ZIP no incluía condiciones de licencia: verificar el derecho de incrustación web antes de publicar.
Validación: pnpm lint, pnpm typecheck y pnpm build correctos; scripts/qa.cjs aprobó 129 comprobaciones, incluidas carga y aplicación de la fuente, en cinco tamaños de pantalla sin desbordamiento ni errores de navegador. Capturas revisadas en artifacts/qa-fineday/.

## 2026-09-17 — Jerarquía visual y controles
El usuario pidió organizar mejor los botones y elevar la presencia profesional de toda la Home. Se unificaron acciones principales en cápsulas con flecha circular, se hizo visible Contacto en la cabecera borgoña y se distinguieron los enlaces secundarios. Las pestañas de servicios ahora combinan número, estado activo y mayor área de interacción. El paso abierto del proceso tiene énfasis propio; se añadió una entrada sutil al titular y profundidad moderada al cierre. Se corrigió el rótulo lateral de la portada para evitar una fracción decorativa engañosa. La estructura fotográfica y la exploración de siete servicios siguen vigentes.
Validación real: `pnpm lint`, `pnpm typecheck` y `pnpm build` correctos; `node scripts/qa.cjs` superó 129 comprobaciones en 1440×900, 1280×800, 768×1024, 390×844 y 320×740. Cero errores de navegador/HTTP observados y sin desbordamiento horizontal. Capturas de escritorio, tablet y móvil revisadas en `artifacts/qa-controls/`. No hubo pruebas unitarias, Lighthouse, auditoría WCAG completa ni publicación.

## 2026-09-17 — Dos tipografías y recorrido visual
El usuario rechazó la tipografía pequeña de palo seco y pidió mantener solo la serif del titular y Fineday; también pidió mayor movimiento e interacción orientada a vender. Se eliminó Arial/Helvetica de la interfaz y Georgia se aplica al texto funcional completo. Fineday se reserva para los acentos de titulares. Se añadió movimiento lento a la fotografía principal, línea de avance de la portada y un recorrido de siete servicios que inicia solo al pulsar Ver recorrido. La barra segmentada progresa 5,6 segundos por capacidad; Pausar, la selección directa y Siguiente solución detienen el ciclo. El cambio manual sigue disponible por teclado. En movimiento reducido se desactivan las animaciones CSS. Se acortó el CTA contextual a «Conversemos» para evitar quiebres en móvil; el diálogo conserva el nombre del servicio.
Validación ejecutada: `pnpm lint`, `pnpm typecheck`, `pnpm build` y `node scripts/qa.cjs` correctos; 134 comprobaciones en cinco tamaños, incluido inicio/avance/pausa del recorrido y tipografía computada. Capturas revisadas en `artifacts/qa-reel/`, cero errores del navegador/HTTP y sin desbordamiento horizontal. No se ejecutaron tests unitarios ni auditoría WCAG/Lighthouse.

## 2026-09-17 — Franja móvil de disciplinas
El usuario pidió sustituir la línea luminosa bajo la portada por una barra roja o blanca con las palabras Investigación, Estructura, Diseño, Tecnología y Datos rodando dentro. Se eligió una banda blanca de alto contraste con texto borgoña, repetición visual continua y movimiento horizontal. Hay un control de pausa/reanudación; al pasar el cursor o enfocar la franja se pausa. En movimiento reducido las palabras quedan estáticas y se pueden desplazar manualmente. La lista duplicada es decorativa y el lector de pantalla recibe una sola enumeración. Se sustituyó el bloque estático anterior por DisciplineTicker sin introducir dependencias.
Validación: `pnpm lint`, `pnpm typecheck` y `pnpm build` correctos. `node scripts/qa.cjs`: 139 comprobaciones aprobadas en cinco viewports, incluidos movimiento permitido, pausa, reanudación y movimiento reducido. Sin desbordamiento horizontal ni errores de navegador/HTTP observados. Capturas de escritorio y móvil revisadas en `artifacts/qa-ticker/`. La vista local de producción permanece en el puerto 3097.

## 2026-09-17 — Imágenes de marca y cierre renovado
El usuario pidió eliminar el botón de pausa de la franja, acelerar el recorrido de capacidades, mejorar las imágenes y reemplazar la foto del proceso y el último tramo. DisciplineTicker pasa a ser un componente sin estado: rueda continuamente cuando se permite animación y se detiene solo por la preferencia de movimiento reducido. El recorrido voluntario pasa de 5,6 a 3,4 segundos por capacidad y la barra segmentada conserva el mismo tiempo.
Se generaron con la herramienta integrada nueve escenas editoriales: portada, siete servicios y proceso. Se inspeccionaron visualmente, se codificaron como WebP y se guardaron en public/images/brand-series/. La procedencia y los prompts se registran en DESIGN_SYSTEM.md. Son escenas sintéticas representativas, no material documental de ESCALA. Los JPG previos se conservaron sin montar. El proceso ahora muestra una ruta visual de cinco hitos y el cierre usa dos columnas, un motivo circular y una llamada a la acción más destacada, sin inventar canales de contacto.
Validación real: `pnpm lint`, `pnpm typecheck` y `pnpm build` correctos. `node scripts/qa.cjs` aprobó 139 comprobaciones en 1440×900, 1280×800, 768×1024, 390×844 y 320×740. Sin desbordamiento horizontal ni errores de navegador/HTTP observados. Se revisaron capturas completas de escritorio y móvil y los siete paneles de servicio en `artifacts/qa-refresh/`. No se ejecutaron tests unitarios, Lighthouse ni auditoría WCAG completa.

## 2026-09-17 — Formulario de contacto en vista previa

El usuario pidió un mini formulario con nombre, WhatsApp, correo electrónico y país de origen. Se incorporó al cierre borgoña, con cuatro campos etiquetados, atributos de autocompletado, validación nativa y mensaje de estado accesible. Los CTA de cabecera y servicios ahora enlazan a #contacto. El botón «Revisar datos» confirma únicamente que los campos están completos. La interfaz advierte antes y después que no se envía ni almacena información: aún no existe un destino de contacto aprobado. No se añadieron servicios externos, bases de datos ni contactos ficticios.

Composición: dos columnas para los campos en escritorio, una bajo 520px; sección completa apilada en tablet y móvil. Validación ejecutada: `pnpm lint`, `pnpm typecheck`, `pnpm build` y `node scripts/qa.cjs` correctos. La revisión del navegador pasó 132 comprobaciones en 1440×900, 1280×800, 768×1024, 390×844 y 320×740; incluyó campos obligatorios, WhatsApp y correo inválidos, ausencia de peticiones POST, navegación de contacto, imágenes y desbordamiento. Cero errores del navegador/HTTP. Capturas revisadas en `artifacts/qa-contact/`. No se ejecutaron tests unitarios, Lighthouse ni auditoría WCAG completa.

## 2026-09-17 — Correo e Instagram oficiales

El usuario proporcionó `escalabusinessco@gmail.com` y el Instagram `@_escalabusiness`. Se añadieron a la sección Contacto como enlaces `mailto:` y `https://www.instagram.com/_escalabusiness/`. El enlace externo abre otra pestaña con `noopener noreferrer`. Ahora hay una vía directa para escribir a ESCALA. El formulario sigue en modo de vista previa: conocer el destinatario no constituye una integración de envío ni autoriza almacenamiento automático de datos personales.

La disposición mantiene ambos canales bajo el titular en escritorio y los apila antes del formulario en tablet y móvil. Validación ejecutada: `pnpm lint`, `pnpm typecheck`, `pnpm build` y `node scripts/qa.cjs` correctos; 135 comprobaciones en cinco tamaños, incluidos enlaces exactos, navegación, formulario y ausencia de desbordamiento. Cero errores de navegador/HTTP. Capturas revisadas en `artifacts/qa-channels/`. No se ejecutaron tests unitarios, Lighthouse ni auditoría WCAG completa.

## 2026-09-17 — Logo ajustado por el usuario

El nuevo ESCALA.pdf suministrado por el usuario modifica el descriptor a BUSINESS SOLUTIONS; símbolo, logotipo y composición se conservaron. El archivo se copió sin cambios a `assets/brand/ESCALA-current.pdf` y se renderizó a `public/brand/escala-logo-business-solutions.png` a 1500 × 1500 px. `Brand` utiliza el nuevo archivo y el texto alternativo actualizado. La ruta nueva evita que el navegador reutilice el logo anterior de la caché. Los archivos previos permanecen en el repositorio como historial y el PDF externo del usuario no se modificó. No se redibujó el logo.

Validación: el SHA-256 del PDF del proyecto coincide con el PDF recibido. `pnpm lint`, `pnpm typecheck` y `pnpm build` correctos. `node scripts/qa.cjs` superó 140 comprobaciones en cinco viewports, sin desbordamiento horizontal ni errores del navegador/HTTP. Capturas de la cabecera en escritorio y móvil revisadas en `artifacts/qa-logo/`; el descriptor nuevo se ve en ambos tamaños. No se ejecutaron tests unitarios, Lighthouse ni auditoría WCAG completa.

## 2026-09-17 — Envío del formulario al correo de ESCALA

El usuario pidió que los cuatro datos del formulario lleguen a `escalabusinessco@gmail.com`. Se conectó el formulario al endpoint AJAX de FormSubmit desde el navegador y se agregó un POST nativo al mismo destinatario como respaldo si JavaScript no funciona. No se requiere contraseña de Gmail ni se guardan los datos en la aplicación. Hay validación nativa, campo trampa, estado de envío y mensajes accesibles de entrega aceptada, activación pendiente o fallo; un error nunca se presenta como éxito. El aviso visible enlaza la política del servicio e informa que este conserva las solicitudes hasta 30 días, según [su documentación](https://formsubmit.co/documentation).

El primer intento de proxy desde un Route Handler recibió rechazo del proveedor y se retiró; la prueba real desde el navegador devolvió HTTP 200 con `success: false` y el mensaje de que envió a ESCALA un correo con el enlace de activación. La prueba se identificó como `PRUEBA TÉCNICA - NO CLIENTE`. El titular del buzón debe activar el formulario antes de verificar la entrega a Gmail; no se afirma que ya haya llegado una solicitud. El proveedor indica que conserva los envíos pendientes y los remite al activar el formulario: [ayuda oficial](https://formsubmit.co/help). El dominio futuro puede requerir una confirmación y prueba adicionales.

Validación del código: `pnpm lint`, `pnpm typecheck` y `pnpm build` correctos. `node scripts/qa.cjs` aprobó 146 comprobaciones en cinco tamaños, con respuestas simuladas del proveedor para éxito, activación y error; no se enviaron solicitudes reales durante la suite. Capturas desktop y móvil revisadas en `artifacts/qa-mail/`. Sin desbordamiento ni errores inesperados de navegador/HTTP. Pendientes: confirmación del enlace recibido en el buzón, prueba de entrega posterior y aviso propio de tratamiento de datos antes de publicar.

## 2026-09-17 — Despliegue de producción en Vercel

El usuario autorizó publicar en Vercel. Proyecto creado en `bitiars-projects/escala-web`, enlace local en `.vercel/` excluido de Git y alias de producción `https://escala-web-psi.vercel.app/`. Se usó CLI desde la carpeta independiente, sin repositorio remoto ni integración Git automática. `.vercelignore` excluye artefactos, PDFs y documentación de la carga; se comprobó en modo dry-run que la fuente Fineday sí se incluye. Node.js se fijó a 24.x para evitar cambios automáticos de versión principal.

La compilación remota terminó correctamente y el primer despliegue quedó `Ready`. La URL pública respondió HTTP 200; logo HTTP 200 con tipo `image/png`. La suite de navegador sobre la URL pública pasó 146 comprobaciones en cinco tamaños (1440×900, 1280×800, 768×1024, 390×844, 320×740), sin desbordamiento ni errores de consola/HTTP; capturas en `artifacts/qa-vercel/`. Las respuestas del formulario durante la suite se simularon; la activación y recepción real del correo siguen pendientes. `noindex` continúa intencionalmente activo. Faltan aviso propio de datos, confirmación de derechos web de Fineday y dominio propio; la disponibilidad pública no resuelve esos pendientes.

Después se hizo un segundo despliegue de producción con Node 24.x fijado (`dpl_4EGcHiwe25o8bFRqbXkWxeNiYu5D`), compilación remota correcta y alias conservado. Una prueba real del formulario desde el dominio publicado con datos ficticios identificados como prueba técnica mostró el mensaje de activación pendiente; no se ha verificado una entrega al buzón. La interfaz mantiene los datos introducidos y no afirma una entrega inexistente.

## 2026-09-21 — Dominio propio y repositorio público

El usuario compró y autorizó `escalabusiness.company` como dominio oficial. El dominio quedó registrado en Vercel, asociado al proyecto `bitiars-projects/escala-web` y configurado para producción. Tras finalizar la propagación DNS, `https://escalabusiness.company/` respondió HTTP 200 con el título esperado. El alias técnico de Vercel se conserva.

El usuario autorizó publicar el proyecto en GitHub. Se creó el repositorio público `alejobran133-create/escala-web`, se excluyeron `artifacts/` y archivos locales o sensibles mediante `.gitignore`, y se publicó `main`. Antes del primer commit se ejecutaron correctamente `pnpm lint`, `pnpm typecheck` y `pnpm build`. La integración automática entre GitHub y Vercel no se considera verificada; los despliegues previos fueron realizados por CLI.

## 2026-09-22 — Logo Business Solutions S.A.S.

El usuario suministró el PNG oficial `ESCALA (2).png` de 6250 × 6250 px. Se copió sin alteraciones a `public/brand/escala-logo-sas.png` y se actualizó la cabecera y el icono de la pestaña para usarlo. El descriptor visible ahora dice BUSINESS SOLUTIONS S.A.S. Los logos anteriores se conservan como historial; no se recreó ni modificó el arte recibido.

## 2026-09-22 — Portada animada

El usuario pidió sustituir la fotografía inicial por una animación de mayor impacto visual. Se reemplazó la foto por una composición editorial SVG/CSS con planos, órbitas, nodos y una ruta luminosa en movimiento. No se añadió video ni dependencia nueva; `hero.webp` queda conservada sin mostrarse. La escena es decorativa para tecnologías de asistencia y se detiene con la preferencia de movimiento reducido. El titular y los CTA permanecen legibles sobre una veladura borgoña.

La compilación local de producción terminó correctamente. La suite funcional pasó 153 comprobaciones en cinco tamaños, sin desbordamiento horizontal ni errores de navegador/HTTP; las capturas de escritorio y móvil se revisaron en `artifacts/qa-hero-motion-prod/`. Una primera ejecución contra el servidor de desarrollo se interrumpió por errores de su conexión de recarga; la ejecución definitiva fue contra el servidor local de producción.

## 2026-09-23 — Profundidad 3D en portada

El usuario pidió que la animación inicial tuviera mayor sensación tridimensional e impacto visual. Se añadió una escultura orbital en CSS 3D con perspectiva real, anillos a cuatro profundidades, esfera sombreada, satélites y movimiento lento de cámara. Se conservó la ruta vectorial anterior como fondo y una veladura para la lectura. No se añadieron videos, paquetes ni datos comerciales ficticios. La escena sigue siendo decorativa para tecnologías de asistencia y se detiene con movimiento reducido.

La compilación de producción y ESLint terminaron correctamente. La suite pasó 155 comprobaciones en cinco tamaños, incluidas las nuevas verificaciones de movimiento de cámara y movimiento reducido, sin desbordamiento ni errores de navegador. Se revisaron las capturas de escritorio y móvil en `artifacts/qa-hero-3d-final/`.

## 2026-09-23 — Símbolo oficial como protagonista 3D

El usuario suministró `ESCALA (4).png`, una silueta blanca con fondo transparente. Se copió sin alteraciones a `public/brand/escala-symbol.png`; los hashes SHA-256 de origen y copia coincidieron. Sustituye la esfera abstracta de la portada. Varias instancias optimizadas de la misma imagen crean una extrusión perceptible en perspectiva, con un frente blanco, laterales borgoña, iluminación ambiental y giro lento. Se conservó la ruta editorial de fondo. En móvil se dio más espacio vertical al símbolo y se reforzó la veladura en tableta para preservar la lectura. La cabecera conserva el logo completo con nombre y descriptor.

La compilación local de producción pasó. La suite funcional pasó 155 comprobaciones en cinco tamaños, sin desbordamiento ni errores de navegador; capturas revisadas en `artifacts/qa-hero-mark-final/`. El formulario se simuló durante la suite y no se enviaron solicitudes reales.

El despliegue de producción quedó `Ready` y asociado a `https://escalabusiness.company/`. La URL pública respondió 200 y contiene el símbolo. La prueba completa en producción se detuvo tras las capturas de escritorio, portátil y tableta por una espera prolongada del navegador; una comprobación focalizada posterior en 390 y 320 px confirmó HTTP 200, PNG cargado y ausencia de desbordamiento, con capturas en `artifacts/hero-live-smoke/`. No se atribuyó esa espera a un fallo de la página sin evidencia.

## 2026-09-23 — Tarima y símbolo en alto relieve

El usuario pidió montar el símbolo en una tarima, de frente al público y con acabado más profesional. Se redujo el giro lateral de la pieza para privilegiar su silueta original, se afinó la extrusión y se construyó una tarima arquitectónica en SVG con superficie superior, cara frontal, cantos e iluminación sutil. La ruta vectorial de fondo se atenuó para que la pieza sea el foco. Se corrigió la altura de la escena para que el frente del pedestal quede dentro de la portada y se separó el texto de la tarima en móviles. No se añadieron dependencias ni se modificó el PNG oficial.

La compilación local de producción terminó correctamente. La suite funcional pasó 160 comprobaciones en cinco tamaños, incluida la visibilidad del frente de la tarima; no encontró desbordamiento ni errores de navegador. Se revisaron las capturas de escritorio y móvil en `artifacts/qa-podium-final/`. La comprobación del formulario volvió a usar respuestas simuladas, sin enviar solicitudes reales.

## 2026-09-23 — Simplificación de la portada tras rechazo visual

El usuario consideró exagerada y poco estética la versión anterior. La dirección vigente reduce el símbolo y la base, retira el mapa de órbitas, nodos, haces de luz y la nota lateral que competían con el contenido. El relieve del PNG oficial sigue presente con menos capas y un giro casi imperceptible; el fondo conserva solo una gradación borgoña suave. En móvil se acortó la escena para recuperar la acción principal sin perder la separación entre pieza y titular. La tarima anterior queda en el historial de Git, no se renderiza.

La compilación local de producción terminó correctamente. La suite funcional pasó 158 comprobaciones en cinco tamaños, sin desbordamiento horizontal ni errores de navegador; capturas revisadas en `artifacts/qa-hero-refined-final/`. Se desplazó la pieza ligeramente a la derecha en tableta para proteger el texto.

## 2026-09-23 — Interacción 3D contenida

Tras aprobar la dirección visual más sobria, el usuario pidió que la pieza tuviera movimiento e interacción. El símbolo oficial ahora oscila lentamente sin desplazarse de la tarima, se inclina ligeramente con el cursor y gira 360° al hacer clic, tocarlo o activarlo con teclado. Una cara posterior del mismo PNG mantiene la marca legible durante el giro; los cantos son neutros. La composición editorial, el tamaño y la base baja permanecen. Se respeta `prefers-reduced-motion` y no se agregó ninguna dependencia.

La compilación y ESLint finalizaron correctamente. La suite funcional pasó 158 comprobaciones en cinco tamaños, sin errores de navegador ni desbordamiento, con capturas en `artifacts/qa-hero-interactive/`. La prueba focalizada confirmó inclinación con cursor, vuelta con clic y teclado, y respuesta al toque en móvil. El formulario siguió simulado en la suite, sin envíos reales.

## 2026-09-23 — Giro automático de exhibición

El usuario señaló que la interacción anterior pasaba inadvertida y la portada seguía pareciendo sencilla. Se aumentó la escala de la pieza sin invadir el texto, se profundizó la extrusión con más capas del PNG oficial y se añadió un giro autónomo de 360° cada 10 segundos. Una luz ambiental, un reflejo en el frente y la sombra de contacto sobre la tarima acompañan el mismo ciclo; no se añadieron órbitas, mapas, neón ni otros adornos rechazados antes. Pasar el cursor ya no pausa el giro, para que el movimiento siga visible mientras se explora. En móvil la escena mantiene la acción principal visible.

Compilación y ESLint correctos. La prueba funcional pasó 158 verificaciones en cinco tamaños sin errores de navegador ni desbordamiento (`artifacts/qa-hero-showcase/`). La prueba focalizada constató giro autónomo, respuesta al cursor, clic, teclado y toque. El PNG oficial no se modificó y no se agregaron paquetes.

## 2026-09-23 — Nueva dirección futurista de ESCALA

Tras rechazar el giro plano y dar libertad creativa, el usuario pidió una portada futurista sin perder el enfoque de ESCALA. Se retiraron las capas de extrusión y la tarima que hacían parecer el símbolo una lámina. La nueva escena usa un fondo arquitectónico abstracto de planos ascendentes, creado mediante la herramienta integrada de generación de imágenes sin marcas ni texto (`public/images/brand-series/hero-future-architecture.png`). El símbolo oficial permanece intacto y frontal en una pieza CSS con capas; la escena se mueve por deriva de cámara, oscilación contenida y luz de barrido. Cursor, clic, toque y teclado provocan inclinación o un pulso, no un giro de canto. Se mantiene el texto editorial y la franja de disciplinas, y se respeta movimiento reducido.

La compilación y ESLint terminaron correctamente. La suite funcional pasó 158 comprobaciones en cinco tamaños sin errores de navegador ni desbordamiento (`artifacts/qa-hero-future-final/`). La prueba focalizada confirmó carga del fondo y símbolo, movimiento de cámara, inclinación con cursor y pulso mediante clic, teclado y toque. Se corrigió además el encuadre de la pieza en tableta. El formulario siguió simulado; no se enviaron solicitudes reales.

## 2026-09-23 — Arquitectura sin cuadro flotante

El usuario rechazó el cuadro superpuesto y prefirió conservar la imagen arquitectónica de fondo. Se retiró por completo la pieza, el símbolo ampliado y su interacción. El logo oficial continúa en la cabecera. La portada conserva únicamente la arquitectura, una deriva lenta de cámara y un barrido tenue de luz, con veladuras para legibilidad y respeto por movimiento reducido.

La compilación y ESLint finalizaron correctamente. La suite funcional pasó 158 comprobaciones en cinco tamaños, sin errores de navegador ni desbordamiento (`artifacts/qa-hero-architecture-only/`). La prueba focalizada confirmó la carga del fondo, la ausencia de la pieza y el movimiento cuando está permitido. Se revisaron capturas de escritorio, tableta y móvil.
