
let sayayin = confirm("¿Eres sayayin?");

if (sayayin) {
    let nombre = prompt("Por favor, dime tu nombre:");
    if (nombre) {
        let edad = prompt("¿Cuál es tu edad?");
        if (edad) {
            let planeta = prompt("¿De qué planeta eres?");
            document.write("¡Hola, " + nombre + " de " + edad + " años! Bienvenido, sayayin del planeta " + planeta);
        } else {
            document.write("No has proporcionado el planeta. Por favor, inténtalo de nuevo.");
        }
    } else {
        document.write("No has proporcionado un nombre. Por favor, inténtalo de nuevo.");
    }
} else {
    document.write("¡Hola!");
}
let colorHex = prompt("Por favor, ingrese un código hexadecimal:");

if (/^#[0-9A-F]{6}$/i.test(colorHex)) {

    let body = document.body;

    body.style.backgroundColor = colorHex;
} else {
    alert("Por favor, ingrese un código hexadecimal válido (por ejemplo, #RRGGBB).");
}