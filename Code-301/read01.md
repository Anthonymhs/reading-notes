# Introducción a React y los Componentes

![logo react](https://i.pinimg.com/564x/cb/a0/b8/cba0b89d2bf2d96a1ed26edb5849f804.jpg)

## ¿Qué es un “componente”?

Un componente es un conjunto modular, portátil, reemplazable y reutilizable de funcionalidades bien definidas que encapsula su implementación y la expone a través de una interfaz de alto nivel. Está diseñado para interactuar con otros componentes dentro de un sistema.

## ¿Cuáles son las características de un componente?

1. Reusabilidad: Diseñados para ser reutilizados en diferentes aplicaciones.
2. Reemplazable: Pueden ser sustituidos por otros componentes similares.
3. No específico del contexto: Funcionan en diferentes entornos.
4. Extensible: Pueden ser ampliados con nuevas funcionalidades.
5. Encapsulado: Ocultan su implementación interna.
6. Independiente: Tienen mínimas dependencias de otros componentes.

## ¿Cuáles son las ventajas de utilizar una arquitectura basada en componentes?

1. Facilidad de despliegue: Reemplazo sencillo de versiones sin impactar el sistema.
2. Reducción de costos: Uso de componentes de terceros reduce los costos de desarrollo y mantenimiento.
3. Facilidad de desarrollo: Desarrollo sin impacto en otras partes del sistema.
4. Reutilizable: Reducción de costos de desarrollo al reutilizar componentes.
5. Mantenimiento y evolución del sistema: Modificaciones sencillas sin afectar el resto del sistema.
6. Independencia: Desarrollo independiente y flexible de componentes.


## ¿Qué significa “props”?

En React, "props" es una abreviatura de "properties" y se refiere a los datos que se pasan a los componentes como parámetros. Estos datos permiten que un componente acceda a información personalizada para renderizar su contenido de manera dinámica.

## ¿Cómo se utilizan los props en React?

Los props se pasan desde un componente padre a un componente hijo como atributos en el JSX. El componente hijo recibe estos props como un objeto y los utiliza para mostrar el contenido de manera flexible.

## ¿Cuál es el flujo de los props?

El flujo de los props en React es unidireccional, es decir, los datos fluyen del componente padre al hijo. Esto significa que un componente hijo no puede modificar los props que recibe; solo puede usarlos para renderizar su contenido.

## Cosas de las que quiero saber más

* Quisiera saber más sobre como usar React Router para crear aplicaciones con múltiples páginas y manejar rutas.

## Fuentes

1. [Component-Based Architecture](https://www.tutorialspoint.com/software_architecture_design/component_based_architecture.htm)
2. [What is Props and How to Use it in React](https://www.freecodecamp.org/news/how-to-use-props-in-reactjs/)