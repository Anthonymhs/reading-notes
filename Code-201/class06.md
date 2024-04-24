# **Class 06, Lectura sobre JS**

## ¿Cómo le describirías un objeto a un amigo sin conocimiento técnico con el que creciste?

Un objeto en JavaScript es como una caja que puede contener diferentes tipos de información y acciones. Imagina que tienes una caja llamada "coche", dentro de la cual puedes guardar cosas como el color del coche, la velocidad máxima y la cantidad de gasolina que tiene. También puedes hacer que la caja "coche" realice acciones, como arrancar el motor o detenerse.

## ¿Cuáles son algunas de las ventajas de crear objetos literales?

Crear objetos literales en JavaScript es una forma rápida y conveniente de organizar y estructurar datos relacionados. Algunas ventajas incluyen:
Sintaxis simple: Puedes definir objetos literalmente usando llaves {} y separar las propiedades con comas.
Flexibilidad: Puedes agregar, modificar o eliminar propiedades y métodos fácilmente.
Claridad: Los objetos literales permiten una representación clara y legible de la estructura de datos.

## ¿En qué se diferencian los objetos de los arrays?

Los objetos y los arrays en JavaScript son estructuras de datos diferentes con propósitos diferentes:
Objetos: Son colecciones de pares clave-valor, donde cada propiedad tiene un nombre único que actúa como clave. Las propiedades pueden ser de cualquier tipo de datos, incluidos otros objetos, funciones y arreglos.
Arrays: Son objetos especiales en JavaScript diseñados específicamente para almacenar colecciones ordenadas de elementos. Los elementos de un array se acceden mediante índices numéricos, y pueden ser de cualquier tipo de datos, incluidos otros arrays y objetos.

## Da un ejemplo acerca de los momentos en los que necesitarías utilizar bracket notation para acceder a la propiedad de un objeto en vez de dot notation

`const persona = {`
    `nombre: 'Juan',`
    `'apellido materno': 'Pérez',`
`};`

`const propiedad = 'nombre';`
`console.log(persona[propiedad]);`

`console.log(persona['apellido materno']);`

## Evalúa el siguiente código. ¿A qué se refiere el término this y cuál es la ventaja de utilizarlo?

`const dog = {`
  `name: 'Spot',`
  `age: 2,`
  `color: 'white with black spots',`
  `humanAge: function (){`
    `console.log(``${this.name} is ${this.age*7} in human years``);`
  `}`
`}`

En este código, this se refiere al objeto actual en el que se está ejecutando el método humanAge(), que es el objeto dog. La ventaja de utilizar this es que permite que el método acceda a las propiedades del objeto sin necesidad de conocer el nombre del objeto de antemano. Esto hace que el código sea más flexible y reutilizable, ya que el método funcionará correctamente incluso si el nombre del objeto cambia en el futuro.

## **Introducción al DOM**

## ¿Qué es el DOM?

El DOM, o Document Object Model (Modelo de Objetos del Documento), es una representación del contenido de un documento HTML/XML como un árbol de nodos accesible a través de JavaScript. Proporciona una interfaz estructurada que permite a los programas cambiar dinámicamente el contenido, la estructura y el estilo de un documento.

## Describe brevemente la relación entre el DOM y JavaScript

JavaScript y el DOM están estrechamente relacionados en el desarrollo web. JavaScript se utiliza para interactuar con el DOM, lo que significa que puedes manipular la estructura, el contenido y el estilo de una página web en tiempo real. Por ejemplo, puedes agregar, eliminar o modificar elementos HTML, cambiar estilos CSS, y responder a eventos del usuario como clics de mouse o pulsaciones de teclas. Esta interacción dinámica entre JavaScript y el DOM es lo que permite crear aplicaciones web interactivas y dinámicas.

## Cosas de las que quiero saber más

    Quisiera saber más sobre las funciones en un escenario real de los objetos y ver como se ejecuta el DOM en relación con JS

## Fuentes

[Conceptos básicos de los objetos JavaScript](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics#establecer_miembros_de_objetos)
