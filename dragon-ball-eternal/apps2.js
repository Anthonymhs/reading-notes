let sayayin = confirm("¿Eres sayayin?");

function sumar() {
    let num1 = 22;
    let num2 = 22;
    let resultado = num1 + num2;
    return resultado;
}

let muestraResultado = sumar();
console.log(muestraResultado);

function obtenerNombre() {
    let userName = prompt("¿Cuál es tu nombre?");
    document.write("Tienes nombre de guerrero: " + userName);
}


function entrenamientoDeUnSayayin() {
    let añosDeEntrenamiento = prompt("¿Cuántos años llevas entrenando como Sayayin? (0-1000)");
    añosDeEntrenamiento = parseInt(añosDeEntrenamiento);

    if (añosDeEntrenamiento > 500) {
        document.write("Bienvenido SuperSayayin");
    } else {
        alert("Debes tener más experiencia como Sayayin");
        entrenamientoDeUnSayayin();
    }
}



function despedirse(){
    document.write("Espero que nos volvamos a ver guerrero" + userName + ", no te olvides de entrenar");
}