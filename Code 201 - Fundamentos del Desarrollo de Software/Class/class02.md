# Conceptos básicos de HTML, CSS y JS

## Introducción a HTML

1. ### ¿Por qué es importante utilizar elementos semánticos en nuestro HTML?

Los elementos semánticos proporcionan una estructura clara y significativa al código HTML, lo que facilita su comprensión tanto para los desarrolladores como para los motores de búsqueda.

2. ### ¿Cuántos niveles de encabezado existen en HTML?

Existen seis encabezados cada uno representa un nivel de contenido diferente en el documento( `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`)

3. ### ¿Cuáles son algunos de los usos para los elementos `<sup>` y `<sub>`?

En ocasiones, necesitarás utilizar superíndice y subíndice al marcar elementos como fechas, fórmulas químicas y ecuaciones matemáticas para que tengan el significado correcto. Los elementos `<sup> y <sub>` se ocupan de ello.

4. ### ¿Al utilizar el elemento `<abbr>`, qué atributo se debe añadir para proporcionar una ampliación del término?

Cuando se utiliza el elemento `<abbr>` en HTML para abreviaturas o acrónimos, el atributo que se debe añadir para proporcionar una ampliación del término es el atributo title

## Aprende CSS

1. ### ¿De qué formas podemos añadir CSS a nuestro HTML?

Vincular una hoja de estilo externa a una página web es el método más común y útil para aplicar estilos CSS en múltiples páginas, asegurando una apariencia coherente en todo el sitio.

Una hoja de estilo externa significa que el CSS está escrito en un archivo independiente con una extensión .css y que lo vinculas desde un elemento `<link>` de HTML

2. ### ¿Por qué deberíamos evitar utilizar estilos inline?

Porque son poco recomendables para tener un codigo comodo de leer y manipular.

3. ### Revisa el código a continuación y responde a las siguientes preguntas:

  ```h2 { ```
   ```  color: black;```
   ```  padding: 5px;```
   ```  } ```

4. ### ¿Qué representa el selector?

Un subtitulo

5. ### ¿Qué componentes son declaraciones CSS?

color y padding

6. ### ¿Qué componentes se consideran propiedades?

black para el color y 5px para el padding

## Aprende JS

1. ### ¿Qué tipo de dato es una secuencia de texto entre comillas simples?

Una cadena

2. ### Enumera 4 tipos de operadores en JavaScript.

a. Suma/concatena
b. Resta, multiplicación, división
c. Operador de asignación
d. identidad/igualdad


3. ### Describe un problema práctico que puedes resolver con una función.

Puedes resolver una suma, creas la funcion de "suma" con dos valores y le atribuyes una variable que sea el resultado de la suma.

```function sumar(a, b) {```
    ```let resultado = a + b; ```
    ```return resultado;```
```}```


```let numero1 = 5;```
```let numero2 = 3;```
```let suma = sumar(numero1, numero2);```

4. ### Si una declaración if comprueba un (condición) y si resulta (true), entonces el código se ejecutará.

5. ### ¿Cuál es el uso del else if?

El else if en JavaScript se utiliza para evaluar una segunda condición si la primera condición en un bloque if no se cumple. Permite encadenar múltiples condiciones en una sola declaración condicional.

6. ### Enumera 3 tipos de operadores de comparación.

Operador de Igualdad(=)

Operador de mayor o igual que(>=)

Operador de menor o igual que (<=)

7. ### ¿Cuál es la diferencia entre los operadores lógicos && y ||?

&& (AND): Devuelve true solo si ambas expresiones son true.
|| (OR): Devuelve true si al menos una de las expresiones es true.