# Listas en HTML, Control de flujo en JS, y CSS: Box Model

### este contenido es importante para nuestro aprendizaje ya que es la estructura que se desarrolla comunmente para un sitio web.

## Html

### Lista ordenada y lista no ordenada

1. ¿Cuándo se puede utilizar una `lista no ordenada` en tu documento HTML?
Cuando no se requira ennumerar dicha lista o no se desea un orden en concreto.

2. ¿Cómo cambias el `estilo bullet` de la lista de elementos no ordenados?
Para cambiar el estilo predeterminado que llevan las listas no ordenas por defecto, puedes hacerlo mediante css, hay varias formas pero dejaré dos ejemplos: usando la propiedad list-style-type y list-style-imagen

a. list-style-type para cambiar de viñeta a un circulo:
`ul {`
    `list-style-type: circle;`
`}`
y
b. para cambiarlo por una imagen personalisada

`ul {`
   `list-style-image: url('imagen.png');`
`}`
3. ¿Cuándo debes usar una `lista ordenada` o `lista no ordenada` en tu documento HTML?
La lista ordenada se utiliza cuando la lista de por sí debe seguir un orden o una lista de pasos y la lista no ordenada es cuando seguir el orden no sea importante sino se centra en mostrar el contenido.

4. Describe dos formas en las que puedes cambiar los números en los `elementos de la lista` proporcionados por una `lista ordenada`

Para cambiar los números en los elementos de la lista proporcionados por una lista ordenada, aquí hay dos formas:

Utilizando la propiedad list-style-type:
Puedes cambiar el estilo de los números utilizando la propiedad list-style-type. Por ejemplo, para cambiar los números a letras minúsculas:

`ol {`
    `list-style-type: lower-alpha;`
`}`
Utilizando la propiedad counter-increment y el pseudo-elemento ::before
 para cambiar los números a números romanos:

`ol {`
   `counter-reset: list-counter;`
`}`
`ol li::before {`
    `content: counter(list-counter, lower-roman) ".";`
    `counter-increment: list-counter;`
`}`

## Vamos con CSS

1. ### Describe las propiedades de margin y padding en CSS como si fueran los personajes de una historia. ¿Cuál es su rol en la historia: “El Box Model”?

Margin era como el guardián del espacio exterior. Él era responsable de mantener una distancia entre los elementos HTML y el mundo exterior. Actuaba como un escudo protector, manteniendo a los elementos HTML alejados de otros elementos circundantes y del borde de la ventana del navegador.

Padding, por otro lado, era más íntimo. Él era el encargado de proporcionar un espacio interno dentro de cada elemento HTML. Como un abrazo cálido, Padding rodeaba el contenido dentro de su elemento, asegurándose de que tuviera suficiente espacio para respirar y no sentirse apretado.

2. ### Enumera y describe las cuatro partes de un box del elementos HTML según el box model

a. Content (Contenido): Aquí es donde reside el contenido del documento html.

b. Padding (Relleno): Este se encarga de controlar de que el contenido no es pegado a todos los bordes generando un espacio.

c. Border (Borde): Este es el limite invisible del elemento el cual se le puede cambiar de color, grosor y forma para darle protagonismo.

d. Margin (Margen): Y aquí tenemos el espacio que distancia un elemento de otro.

## JS

1. Tipos de datos en un Array:
 Un Array en JavaScript puede almacenar una variedad de tipos de datos, incluyendo números, cadenas de texto, booleanos, objetos, y otros Arrays.

2. ¿El array `people` es un array de JavaScript válido? De ser así, ¿cómo puedo acceder a los valores almacenados? Y si no, ¿por qué?

 `const people = [['pete', 32, 'librarian', null], ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'], ['bill', null, 'artist', null]];`
  
El array people: Sí, el array people es válido en JavaScript. Para acceder a los valores almacenados en el array, puedes utilizar la notación de corchetes `[índice]`. Por ejemplo, `people[0]` accedería al primer elemento del array, y `people[1][0]` accedería al primer elemento del segundo array dentro de people.

3. Enumera cinco opreadores abreviados de asignación en javascript y describe lo que hacen

+=: Añade el valor a la variable y asigna el resultado.
-=: Resta el valor de la variable y asigna el resultado.
*=: Multiplica el valor de la variable por el valor y asigna el resultado.
/=: Divide el valor de la variable por el valor y asigna el resultado.
%=: Calcula el módulo del valor de la variable y asigna el resultado.
Evaluación de la última expresión:

4. Lee el código a continuación, evalúa la últimaexpresión y explica cuál sería el resultado y por qué.

let a = 10;
let b = 'dog';
let c = false;

// evalúa esto
(a + c) + b;

La expresión (a + c) evaluará a 10 + false, lo cual dará como resultado 10 (porque false se convierte a 0 en una operación aritmética). Luego, se concatenará 'dog' a 10, resultando en '10dog'.

5. Uso de una declaración condicional: Imagina que estás creando una aplicación de inicio de sesión donde los usuarios deben ingresar su nombre de usuario y contraseña. En este caso, podrías usar una declaración condicional para verificar si el nombre de usuario y la contraseña ingresados por el usuario son correctos.

6. Utilidad de un Bucle en JavaScript: Un bucle es útil en JavaScript cuando necesitas repetir una tarea varias veces. Un caso puede resultar arrojar la misma pregunta de un prompt hasta que sea correcta.