#  Audio, video, imágenes

Es importante conocer CSS Grid porque simplifica el desarrollo de diseños web complejos, mejora la legibilidad del código, proporciona flexibilidad y control en el diseño, se integra bien con responsive design y es una habilidad valiosa en el campo del desarrollo web, lo que puede mejorar la competitividad profesional.

## Contenido de audio y video

### Explica cómo la capacidad de utilizar video y audio en la web ha ido evolucionando desde el comienzo de los 2000

En los primeros años de la web, la incorporación de audio y video era limitada debido a la falta de soporte en tecnologías nativas como HTML. Esto llevó al uso de tecnologías privativas como Flash y Silverlight, que tenían sus propios problemas. Con la llegada de HTML5, se introdujeron elementos nativos como `<video>` y `<audio>`, junto con APIs de JavaScript para controlarlos. Estas características nativas ofrecían una solución más integrada y segura, abordando muchos de los problemas asociados con las soluciones anteriores.

### Describe el uso de los atributos src y controls en el elemento `<video>`

** src: Este atributo especifica la URL del archivo de video que se va a incrustar. Puede ser una ruta relativa o absoluta al archivo de video.

** Controls: Este atributo es un booleano que indica si se deben mostrar controles de reproducción de video estándar. Cuando se establece en controls, se mostrarán controles como botones de reproducción, pausa, avance rápido, volumen, entre otros, que permiten al usuario interactuar con el video.

### ¿Por qué es importante tener contenido de respaldo en el elemento `<video>`?

 El enlace alternativo al archivo de video para que los usuarios puedan acceder a él directamente si no pueden ver el video incrustado.

### Escribe una historia corta en donde `<audio>` y `<video>` son personajes

Una vez en la ciudad de Lima, 'Vídeo' se presentaba en una entrevista de trabajo. Llegó temprano, puntual, bien vestido, perfumado, llevaba su libreta y un puntero para anotar por si faltaba. En la recepción, un señor llamado Navegador le indicó que tendría que esperar en el lobby, una sala que tenía como nombre YouTube, mientras el gerente HTML se preparaba para entrevistarlo. Esperó en el lobby sentado, todo nervioso. Luego de unos minutos, Navegador hizo contacto visual y le hizo señas para que avanzara a la entrevista. Y cuando entró y se topó cara a cara con HTML, se acordó... de que le faltaba el audio. Fin.
Espero que les guste.

### ¿En qué se diferencia el layout Grid del Flex?

** Direccionalidad del diseño:

Grid: El layout Grid es bidimensional, lo que significa que permite organizar elementos en filas y columnas simultáneamente. Puedes controlar tanto el posicionamiento horizontal como vertical de los elementos.
Flex: El layout Flex es unidimensional, lo que significa que es más adecuado para organizar elementos en una sola dirección (fila o columna). Es excelente para crear diseños flexibles en una sola dimensión.

** Control del espacio entre elementos:

Grid: Con Grid, puedes controlar el espacio entre filas y columnas utilizando propiedades como grid-column-gap y grid-row-gap.
Flex: Flexbox ofrece propiedades como justify-content y align-items para controlar el espacio entre elementos a lo largo del eje principal y transversal.

** Control del tamaño de los elementos:

Grid: Grid permite definir el tamaño de los elementos en relación con las filas y columnas de la cuadrícula utilizando propiedades como grid-template-columns y grid-template-rows.
Flex: Flexbox permite controlar el tamaño de los elementos de forma más flexible, permitiendo que los elementos se expandan y contraigan según el contenido o el espacio disponible en el contenedor.

** Anidamiento:

Grid: Con Grid, puedes anidar cuadrículas dentro de otras, lo que proporciona una gran flexibilidad para crear diseños complejos.
Flex: Si bien Flexbox no admite anidamiento directo, es posible combinar Flexbox con Grid para crear diseños complejos y anidados.

### Grid container, grid item, y grid line son algunos de los términos importantes que se deben entender al utilizar Grid. Por favor describe estos términos en unas pocas frases

** Grid container: El elemento sobre el que  display: grid se aplica. Es el padre directo de todos los elementos de la cuadrícula.

** Grid item: Los hijos (es decir,  descendientes directos  ) del Grid container, pero sin incluir a los subelementos.

** Grid line: Las líneas divisorias que conforman la estructura de la grilla. Pueden ser verticales (“líneas de cuadrícula de columnas”) u horizontales (“líneas de cuadrícula de filas”) y residir en cualquier lado de una fila o columna.

## Imágenes Responsivas

### Además de hacer que un sitio se vea atractivo visualmente en diferentes tamaños de pantalla, ¿por qué los desarrolladores deberían hacer imágenes responsivas?

** Experiencia del usuario: Garantiza una experiencia consistente y agradable para los visitantes en cualquier dispositivo.

** Velocidad de carga optimizada: Permite cargar versiones optimizadas de imágenes, lo que reduce el tiempo de carga de la página.

** Ahorro de ancho de banda: Al servir versiones más pequeñas de imágenes en dispositivos móviles, se ahorra ancho de banda tanto al usuario como al servidor.

** Compatibilidad con alta resolución: Proporciona imágenes de alta calidad solo a dispositivos que pueden mostrarlas, mejorando el rendimiento y el uso de datos.

### Define los siguientes atributos de `<img>`: `srcset` y `sizes`. Escribe un ejemplo de cómo se usan

`srcset` permite especificar múltiples fuentes de imágenes con diferentes tamaños, mientras que `sizes` define cómo se ajustará el tamaño de la imagen en función del diseño de la página y el tamaño de la ventana del navegador.

```<img src="default.jpg"
     srcset="small.jpg 500w,
             medium.jpg 1000w,
             large.jpg 2000w"
     sizes="(max-width: 600px) 480px,
            (max-width: 1200px) 800px,
            1600px"
     alt="Descripción de la imagen">
```

### ¿Cómo es que srcset es más útil para las imágenes responsivas que CSS o JavaScript?

porque permite al navegador seleccionar automáticamente la imagen más adecuada según la resolución y el tamaño de pantalla del dispositivo, lo que optimiza la velocidad de carga y el rendimiento del sitio web.

## Cosas que quisiera saber más

 Explorar cómo crear diseños avanzados y complejos utilizando las capacidades de CSS Grid, como diseño de mosaicos, diseños de revistas y diseños de cuadrícula asimétrica.

## Fuentes

[Audio y video](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
[Imágenes Responsivas](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
[Guía de CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/)