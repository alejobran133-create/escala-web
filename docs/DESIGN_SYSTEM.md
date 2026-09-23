# Sistema de diseño

## Dirección vigente
Home editorial, fotográfica e interactiva, por petición expresa del usuario. Se sustituyen la rejilla simultánea de tarjetas, las fotos genéricas y el cierre recargado por exploración progresiva. El historial de decisiones se conserva en DECISIONS.md.

## Tokens
Fuente: src/app/globals.css con @theme.

| Token | Valor |
| --- | --- |
| brand | #701F38, provisional |
| background | #FFFFFF |
| foreground | #211B1D |
| muted | #635B5D |
| surface | #F6F3F1 |
| border | #E4DDDB |




## Tipografías
Dos voces tipográficas visibles: Fineday StyleOne, suministrada por el usuario en Fineday.zip, para palabras destacadas de titulares; Georgia para títulos, navegación, botones, etiquetas y textos de lectura. Fineday se carga localmente mediante next/font/local desde src/assets/fonts/Fineday-StyleOne.ttf. Times New Roman queda como fallback técnico si Georgia no existe, no como tercera familia de diseño. Canva Sans no se utiliza; sigue pendiente de archivo y condiciones de uso web. El ZIP de Fineday no contenía licencia; antes de publicar debe confirmarse que permite incrustación web.
H1 desktop de 60–104px y móvil de 45–73px. Los titulares de sección crecen hasta 68px. Fineday aparece en «avanzar», «una respuesta propia», «implementación» y «Hablemos»; la letra larga se dimensiona para no desbordar a 320px.
No se extrajeron fuentes del PDF.

## Composición, responsive e interacción
Portada de ancho completo con composición vectorial animada en borgoña: capas editoriales, órbitas, nodos y una ruta luminosa atenuada. Al frente, el símbolo blanco oficial suministrado por el usuario se presenta como una pieza de alto relieve orientada hacia el público. Se apoya sobre una tarima arquitectónica con plano superior, frente, perfiles y sombra de contacto; la extrusión del símbolo usa capas del PNG, perspectiva CSS, luz y movimiento lento. No se redibujó la silueta. Una veladura mantiene el contraste del gran titular. En móvil se reserva altura para mostrar la pieza y la tarima antes del texto; en 320 px el conjunto se reduce para mantener la acción principal al alcance. La franja blanca desliza Investigación, Estructura, Diseño, Tecnología y Datos continuamente, sin control de pausa visible. Con movimiento reducido la escena y la franja quedan estáticas, y esta última es desplazable manualmente. Separación generosa antes de la sección de servicios.
Servicios: siete pestañas horizontales con número y categoría, un solo panel protagonista con fotografía a la izquierda y contenido borgoña a la derecha. El visitante inicia un recorrido visual voluntario con Ver recorrido; el panel cambia cada 3,4 segundos, una barra segmentada marca el avance y Pausar detiene el ciclo. Elegir una pestaña o pulsar Siguiente solución detiene la reproducción. La reproducción se detiene al ocultar la pestaña. Ratón, Tab, flechas izquierda/derecha, Home y End; el botón siguiente recorre las siete y vuelve al inicio. En móvil las pestañas se deslizan horizontalmente y acompañan el recorrido, y el panel se apila.
Proceso: escena editorial de una profesional trazando cinco hitos en un panel de trabajo a la izquierda, título y cinco pasos desplegables a la derecha; móvil apilado. Solo un paso abierto a la vez. Cierre borgoña con titular y enlaces oficiales de correo/Instagram a la izquierda y formulario compacto a la derecha. Cuatro campos en dos columnas en escritorio; una columna bajo 520px. Los controles usan bordes claros sobre borgoña y el aviso de procesamiento se lee junto al botón. Los mensajes accesibles de confirmación, activación pendiente y error aparecen bajo el formulario.
Navegación móvil bajo 1100px. Composición apilada bajo 761px y ajustes para 320px. Contenedor máximo de 1600px con margen fluido de 18–82px.
CTAs contextuales hacia el formulario; el diálogo de Sobre ESCALA mantiene foco, Escape y retorno al disparador. La jerarquía de acciones usa cápsulas amplias con flecha circular para la acción principal, enlaces con flecha delineada para la secundaria y un contacto claro que destaca en la cabecera borgoña. Las siete pestañas muestran un índice circular y un estado activo borgoña; el proceso usa controles circulares de expansión y una superficie elevada para el paso abierto. Controles de 44px o más y estados de foco visibles. prefers-reduced-motion desactiva animaciones y desplazamiento suave.
## Imágenes de servicios
Dirección vigente: símbolo oficial 3D sobre animación vectorial en portada y escenas editoriales creadas mediante la herramienta integrada de generación de imágenes para las siete capacidades y el proceso. Se usa una paleta común de borgoña, piedra cálida, marfil y sombras oscuras. Ninguna escena representa al equipo, oficinas, clientes, proyectos, indicadores o resultados reales de ESCALA. Aprobación final o sustitución por material propio pendiente.
Archivos de imágenes en public/images/brand-series/; WebP optimizados localmente con Pillow, calidad 84. `hero.webp` se conserva como historial sin mostrarse. Next Image sirve tamaños responsive para las capacidades y el proceso. Las fuentes PNG de generación no forman parte del repositorio; los WebP finales sí.

Prompts finales usados con la herramienta integrada de generación (todos: fotografía editorial natural, sin logos, texto legible, marcas de agua, hologramas o neón):

| Archivo | Escena solicitada |
| --- | --- |
| hero.webp | Mesa de estrategia con manos analizando diagramas, carpeta borgoña y espacio oscuro libre a la izquierda para el titular. |
| estrategia.webp | Investigación de mercado mediante informes, gráficos y cuaderno borgoña sobre piedra cálida. |
| estructuracion.webp | Manos ordenando módulos de un modelo operativo, procesos y documentación. |
| diseno.webp | Composición de identidad visual con muestras táctiles borgoña, marfil y carbón. |
| tecnologia.webp | Revisión de una interfaz de software abstracta y bocetos de producto digital. |
| ia.webp | Comparación de un flujo de trabajo automatizado en papel y pantalla, sin robots. |
| datos.webp | Revisión de visualizaciones e indicadores en un entorno de decisión empresarial. |
| mejora.webp | Comparación de un proceso complejo con una versión más simple y ordenada. |
| proceso.webp | Profesional trazando el último de cinco hitos en un panel de vidrio, con luz cálida y espacio para el texto. |

Los JPG de stock anteriores permanecen en public/images/services/ y process-planning.jpg como historial, pero no se renderizan. Su procedencia se documentó en decisiones anteriores; no se presentan como material de ESCALA.
## Logo y cabecera
Logo vigente: public/brand/escala-logo-sas.png, suministrado por el usuario con el descriptor BUSINESS SOLUTIONS S.A.S. Las versiones previas se conservan en el repositorio como historial.
El símbolo aislado de portada es `public/brand/escala-symbol.png`, copia sin alteraciones de `ESCALA (4).png` suministrado por el usuario. La versión 3D se construye por capas visuales de ese mismo PNG, sin redibujar su forma.
Barra completa borgoña, logo blanco sin recuadro visible mediante encuadre y mezcla CSS lighten. El PNG original conserva su fondo.
Revisar la mezcla si se adopta un borgoña más oscuro. Enlaces y focos de cabecera blancos; Contacto en cápsula clara con flecha borgoña. El control móvil usa cápsula delineada e icono en círculo claro.
El descriptor vigente es BUSINESS SOLUTIONS.

## Iconografía, radios, sombras y animación
Iconos lineales locales, sin librería adicional. Cápsulas para acciones y navegación interactiva; composición editorial de bordes rectos en paneles e imágenes.
Sin tarjetas decorativas generales; sombra contenida en diálogos y en el paso de proceso activo.
Cambio de fotografía en servicios: entrada de 300ms y zoom ligero al pasar el cursor. La portada anima órbitas, capas y una ruta luminosa mediante CSS y SVG; las cinco disciplinas se desplazan continuamente dentro de una banda blanca. Entrada sutil del mensaje principal; hover de controles: 220ms con ligera elevación. El recorrido de servicios requiere activación del visitante. Sin descarga de video ni parallax.
prefers-reduced-motion desactiva animación y desplazamiento suave.

## Recursos históricos fuera de la Home
Se conservan los archivos pero ya no se renderizan:
- public/images/office-placeholder.jpg: Max Vakhtbovych / Pexels, https://www.pexels.com/photo/interior-of-spacious-conference-room-in-modern-office-7046168/
- public/images/mountain-placeholder.jpg: Dziana Hasanbekava / Pexels, https://www.pexels.com/photo/unrecognizable-backpacker-standing-on-top-of-mountain-5480713/
La procedencia se conserva como historial, no como representación de ESCALA.

## SEO y accesibilidad
Idioma español, h1 único, landmarks, foco visible, salto al contenido, estados ARIA y reducción de movimiento.
Metadatos básicos y noindex de revisión. Sin afirmación de certificación WCAG, validación exhaustiva de lectores de pantalla o resultados de Lighthouse.
