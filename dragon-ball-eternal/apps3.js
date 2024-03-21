"use strict";

function añosDeEntrenamiento() {
    let años = 0;
    while (años < 10) {
        años = prompt("¿Cuántos años llevas entrenando, Saiyajin? (1 - 100)");
        años = parseInt(años);
    }
    console.log("Los años son suficientes para ser un Super Saiyajin");
}

añosDeEntrenamiento();

function esferasDelDragon () {
    let cantidad = prompt("cuantas esferas del dragon tienes?")
    cantidad = parseInt(cantidad);
    for (let i = 0; i < cantidad; i++){
        document.write("<img src='https://tse2.mm.bing.net/th?id=OIP.05e8Xztm5kTMUzg_ulX02QHaHS&pid=Api&P=0&h=180'/>")
    }
}