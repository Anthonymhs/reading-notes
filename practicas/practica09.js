const btn = document.querySelector("button");

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});

// La primera línea declara una constante btn que selecciona el primer botón que encuentre en el documento HTML.
// La función random genera un número aleatorio entre 0 y el número especificado como parámetro.
// Se agrega un evento de escucha al botón para que cuando se haga clic en él, se ejecute una función de flecha (arrow function).
// Dentro de la función de flecha, se genera un color aleatorio utilizando la función random para cada componente RGB (rojo, verde, azul) y se asigna este color al fondo del cuerpo del documento HTML.
// En resumen, al hacer clic en el botón, se generará un color aleatorio y se establecerá como el color de fondo de la página.
