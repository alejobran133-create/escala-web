# Contexto del proyecto

ESCALA es una firma integral de soluciones empresariales. Mensajes rectores: “Analizamos antes de avanzar” y “Estrategia, diseño y tecnología para construir mejores negocios”.

## Dirección actual
El usuario solicitó simplificar la Home porque resultaba cargada, aumentar la interacción y utilizar imágenes relacionadas con los servicios. Esta instrucción sustituye la exigencia de replicar literalmente la composición anterior. Se conserva la identidad editorial y la cabecera borgoña solicitada.

## Implementación
- Ruta /: cabecera, portada futurista arquitectónica sin pieza flotante, explorador de siete servicios, proceso desplegable y cierre de contacto.
- Explorador: selección por capacidad; solo un servicio visible. Cambian título, descripción, fotografía, mensaje y etiquetas del servicio.
- Desktop/tablet: siete pestañas horizontales con flechas izquierda/derecha y Home/End. Móvil: pestañas desplazables horizontalmente.
- Botón Siguiente solución con recorrido circular por las siete capacidades.
- Contacto: el usuario proporcionó escalabusinessco@gmail.com y el Instagram @_escalabusiness; ambos figuran como enlaces directos en el cierre. El formulario compacto pide nombre, WhatsApp, correo electrónico y país. Los CTA de cabecera y servicios llevan a #contacto. El envío usa el endpoint AJAX de FormSubmit desde el navegador; hay validación nativa, estado de envío, confirmación, activación pendiente y error. FormSubmit conserva las solicitudes hasta 30 días según su documentación. La web no guarda los datos.
- Proceso de cinco pasos con un solo apartado desplegado.
- Sobre ESCALA conserva información suministrada; se retiró Proyectos de navegación al no haber casos disponibles.
- Anclas #inicio, #soluciones, #capacidades, #proceso, #etapas y #contacto.
- Stack existente conservado; sin nuevas dependencias.

## Recursos
Fineday StyleOne del ZIP suministrado por el usuario se usa localmente en palabras destacadas. El archivo no incluía licencia; confirmar derecho de incrustación web para la publicación ya realizada.
Logo vigente suministrado por el usuario: public/brand/escala-logo-sas.png, con descriptor BUSINESS SOLUTIONS S.A.S. Los PDF y PNG anteriores permanecen como historial. Encaje CSS y mezcla lighten integran el fondo del PNG en la cabecera, sin redibujar el logo.
Las imágenes genéricas de oficina y montaña ya no se muestran. Se conservan como recursos históricos.
Las imágenes editoriales generadas en public/images/brand-series/ cubren siete capacidades y el proceso; `hero-future-architecture.png` es el nuevo fondo abstracto de la portada. La imagen antigua de portada se conserva sin mostrarse. El símbolo oficial permanece separado como asset sin alteraciones. Estas escenas no representan al equipo, oficinas, proyectos o resultados reales de ESCALA. El stock anterior en public/images/services/ y process-planning.jpg queda conservado sin mostrarse. SVG anteriores conservados sin montar.

## Pendientes
Aprobación visual, HEX definitivo, Canva Sans autorizada, confirmación de licencia web de Fineday, teléfono/WhatsApp empresarial si se desea publicar y casos autorizados. El descriptor BUSINESS SOLUTIONS, el correo y el Instagram ya fueron suministrados por el usuario.
Hosting activo en Vercel (`bitiars-projects/escala-web`) con dominio de producción https://escalabusiness.company/ y alias técnico https://escala-web-psi.vercel.app/. Repositorio público: https://github.com/alejobran133-create/escala-web. Pendientes: canonical, sitemap, imagen social y requisitos legales de la publicación.
La indexación sigue desactivada. El envío del formulario está implementado, pero falta que el titular confirme el enlace de activación que FormSubmit envió a escalabusinessco@gmail.com. La respuesta real del proveedor fue HTTP 200 con `success: false` y mensaje de activación pendiente; aún no se verificó entrega al buzón. El sitio ya es públicamente accesible; definir el aviso propio de tratamiento de datos y confirmar la activación en el dominio de Vercel.

## No inventar
No inventar clientes, proyectos, casos, métricas, testimonios, experiencia, certificaciones, equipo, contactos, precios ni información legal. Las fotografías no implican aval, pertenencia del equipo ni resultados propios.

## Revisión fotográfica vigente
El usuario pidió una Home más imponente, llamativa, elegante, interactiva y mejor organizada, sin exceso visual. La versión vigente usa una portada inmersiva, navegación horizontal de capacidades, un panel grande por servicio, proceso editorial y cierre borgoña. Se conserva la exploración de un servicio a la vez.

## Jerarquía de acciones vigente
Los CTAs principales se distinguen por cápsula clara y flecha circular borgoña. Los enlaces secundarios son más ligeros, pero mantienen un destino y un indicador visual. La cabecera ofrece un botón de contacto visible; las capacidades numeradas y el proceso abierto expresan claramente dónde está el usuario. En móvil, las pestañas se desplazan horizontalmente y los botones conservan áreas táctiles amplias.

## Tipografía y recorrido visual
Por petición del usuario se usa Georgia en todo el texto funcional y Fineday únicamente en acentos de titulares. No se usa Arial/Helvetica en la interfaz. La portada muestra una arquitectura abstracta futurista generada en borgoña y marfil, sin cuadro ni símbolo superpuesto; la franja blanca mantiene las cinco disciplinas. El fondo se mueve con una deriva de cámara y luz suave; la preferencia de movimiento reducido detiene las animaciones. En servicios, el usuario puede iniciar y pausar un recorrido temporizado a 3,4 segundos por capacidad, con progreso segmentado; la selección manual toma el control inmediatamente. No se añadió un archivo de video ni se afirma mostrar proyectos reales. El proceso usa una escena de ruta visual y el cierre tiene una composición editorial ampliada.
