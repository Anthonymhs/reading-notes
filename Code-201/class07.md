# Programación orientada a objetos, Tablas en HTML

## **Explica por qué necesitamos los modelos de dominio**

Los modelos de dominio son representaciones conceptuales que capturan la estructura, relaciones y comportamientos de un sistema o problema específico, facilitando la comunicación, comprensión y diseño del software

## **¿Qué es un constructor y cuáles son las ventajas de utilizarlo?**

Qué es un constructor y cuáles son las ventajas de utilizarlo?

## **¿Cómo es que el término this se diferencia cuando se utiliza en un objeto literal y cuando se utiliza en un constructor?**

El término this en JavaScript se refiere al contexto de ejecución actual. Su comportamiento puede variar dependiendo de cómo se utiliza, ya sea en un objeto literal o en un constructor. Aquí te explico cómo se diferencia su comportamiento en ambos casos:

En un objeto literal:
Cuando se utiliza this dentro de un objeto literal, hace referencia al propio objeto en el que se encuentra. Es decir, this apunta al objeto en el que se está definiendo o utilizando.
Por ejemplo:

```const persona = {
    nombre: "Juan",
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};
```

persona.saludar(); // Salida: Hola, soy Juan
En este caso, this dentro del método saludar hace referencia al objeto persona.

En un constructor:
Cuando se utiliza this dentro de un constructor, hace referencia a la instancia del objeto que se está creando mediante ese constructor. Es decir, this apunta al objeto que está siendo instanciado.

```function Persona(nombre) {
    this.nombre = nombre;
    this.saludar = function() {
        console.log("Hola, soy " + this.nombre);
    };
}
```

```const juan = new Persona("Juan");
juan.saludar(); // Salida: Hola, soy Juan
```

En este caso, this dentro del constructor Persona hace referencia al objeto que está siendo creado con new Persona().

### *Herencia prototípica:*

En JavaScript, los objetos pueden heredar propiedades y métodos de otros objetos a través de la cadena de prototipos. Cada objeto tiene un prototipo del cual hereda propiedades y métodos. La herencia prototípica se basa en la delegación de propiedades y métodos de un objeto a otro a lo largo de la cadena de prototipos.

### *Prototipos nativos:*

 JavaScript proporciona un conjunto de objetos nativos que actúan como prototipos para otros objetos. Estos prototipos nativos, como Object, Array, String, etc., contienen métodos y propiedades que están disponibles para todos los objetos que heredan de ellos. Por ejemplo, todos los objetos en JavaScript heredan métodos como toString(), hasOwnProperty(), etc., del prototipo Object.

En resumen, this en JavaScript se refiere al contexto de ejecución actual, y su comportamiento varía dependiendo de si se utiliza dentro de un objeto literal o un constructor. Además, JavaScript utiliza la herencia prototípica para compartir propiedades y métodos entre objetos, y proporciona prototipos nativos que actúan como modelos para la creación de nuevos objetos.

## **Explica los prototipos y las herencias por medio de una analogía sobre tu experiencia laboral previa.**

Imagina que estás en una cocina y quieres hacer diferentes tipos de pasteles. Cada tipo de pastel tiene su propia receta base (prototipo) que define los ingredientes y pasos comunes. Por ejemplo, la receta base de un pastel de chocolate y la de un pastel de vainilla.

Ahora, si quieres hacer un pastel nuevo, digamos un pastel de fresa, puedes tomar la receta base del pastel de vainilla y agregarle algunas características únicas, como puré de fresas.

## Cosas de las que quiero saber más

Practicar en un escenario real los this para saber un poco más de ellos

## Fuentes

[Dominio](https://github.com/codefellows/domain_modeling#domain-modeling)
[Conceptos de tablas HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Tables/Basics)
[Introducción a los constructores](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics#introducing_constructors)
[Prototipos nativos](https://es.javascript.info/native-prototypes)
[Herencia prototípica](https://es.javascript.info/prototype-inheritance)
