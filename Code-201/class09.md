# Formularios y Events en JS

1. ¿Por qué los formularios son tan importantes en el desarrollo web?

Los formularios son importantes en el desarrollo web porque permiten a los usuarios interactuar con un sitio web enviando datos, como registros, comentarios o pedidos. Son una forma crucial de recopilar información y realizar acciones específicas.

2 Al diseñar un formulario, ¿cuáles son algunas de las cosas más importantes a tener en cuenta sobre la experiencia de usuario?

Al diseñar un formulario, es importante tener en cuenta la claridad, la accesibilidad y la facilidad de uso. La disposición visual, las etiquetas descriptivas, los mensajes de error claros y la validación en tiempo real son aspectos cruciales para una buena experiencia de usuario.

3 Enumera 5 elementos de los formularios y explica su importancia.

lgunos elementos importantes de los formularios y su importancia son:
Elemento `<form>`: Define formalmente un formulario en HTML y los atributos que determinan su comportamiento. Es esencial para estructurar correctamente los datos enviados por los usuarios y facilita la implementación de códigos de apoyo para mejorar la accesibilidad.
Elemento `<fieldset>`: Permite crear grupos de controles de formulario que comparten el mismo propósito, facilitando la organización y comprensión del formulario para los usuarios. Además, proporciona un contexto semántico y de estilo, lo que mejora la usabilidad y la accesibilidad.
Elemento `<legend>`: Proporciona una descripción formal del propósito de un conjunto de controles de formulario dentro de un `<fieldset>`. Esto es crucial para los lectores de pantalla, ya que utilizan esta información para contextualizar los controles y guiar a los usuarios en su interacción con el formulario.
Elemento `<label>` : Define etiquetas descriptivas para los controles de formulario, lo que mejora la accesibilidad y la usabilidad al asociar explícitamente cada control con su etiqueta correspondiente. Esto permite a los usuarios entender claramente qué tipo de información se espera en cada campo y facilita la navegación y la interacción con el formulario.
Validación de formulario: Aunque no es un elemento HTML en sí mismo, la validación de formulario es fundamental para garantizar la integridad y la precisión de los datos enviados por los usuarios. La implementación de una validación adecuada ayuda a prevenir errores y proporciona retroalimentación instantánea a los usuarios sobre cualquier dato incorrecto o faltante, mejorando así la experiencia general del usuario.

4 ¿Cómo describirías los event a un amigo sin conocimiento técnico?

Los eventos son acciones que ocurren en un sitio web, como hacer clic en un botón o mover el mouse. Son como señales que el navegador web detecta y puede manejar. Por ejemplo, si haces clic en un botón, el evento "clic" se activa y se puede realizar una acción específica.

5 Al utilizar el método addEventListener(), ¿cuáles son los 2 arguments que debes proporcionar?

Al utilizar el método addEventListener(), debes proporcionar el tipo de evento que deseas escuchar (como "clic" o "enviar") y una función que se ejecutará cuando ocurra ese evento.

6 Describe el objeto event. ¿Por qué el target dentro del objeto event es útil?

El objeto event representa un evento que ocurre en el DOM (Modelo de Objetos del Documento). Contiene información sobre el evento que ocurrió, como el tipo de evento, el elemento objetivo donde ocurrió el evento y otros detalles relacionados. El objetivo dentro del objeto event es útil porque proporciona una referencia al elemento específico que desencadenó el evento, lo que permite realizar acciones específicas en respuesta al evento, como cambiar su estilo o contenido.

7 ¿Cuál es la diferencia entre event bubbling y event capturing?

La diferencia entre event bubbling y event capturing radica en el orden en que se propagan los eventos a través de los elementos DOM. En el event bubbling, el evento se propaga desde el elemento objetivo hacia arriba a través de sus ancestros. En el event capturing, el evento se propaga desde el elemento raíz hacia abajo a través de sus descendientes hasta alcanzar el elemento objetivo.

## Cosas de las que quiero saber más

Quisiera saber más de como usar el addEventListener() para despliegues de menu y mostrar u ocultar elementos.

## Fuentes

[Introducción a Eventos](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)