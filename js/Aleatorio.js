const numeroAleatorio = Math.floor(Math.random() * 25) +1;
const numeroIntentos = 3;

let intentos = 1 ; 
function generarNumeroAleatorio(){
     let mensaje;
     const parrafo = document.querySelector("#idParrafo");

     if (intentos <= numeroIntentos){
        let numero = prompt(
            "¿Que número se ha generado (Intento "+ intentos +")?"
        );
        
        if (numero == numeroAleatorio) {
            mensaje = `¡Es sorprendente, pudiste adivinar el número oculto (${numeroAleatorio})! Refresca la página para volver a jugar.`;
        } else if (intentos == numeroIntentos) {
            mensaje = `Su número de intentos ha terminado. El número oculto era: ${numeroAleatorio}. Refresca la página para volver a jugar.`;
        } else {
            if (numero < numeroAleatorio) {
                mensaje = `El número oculto es más alto. Vuelve a intentar. Quedan ${numeroIntentos - intentos} intentos.`;
            } else {
                mensaje = `El número oculto es más bajo. Vuelve a intentar. Quedan ${numeroIntentos - intentos} intentos.`;
            }
        }

        intentos++;
    } else {
        mensaje = `Su número de intentos ha terminado. El número oculto era: ${numeroAleatorio}. Refresca la página para volver a jugar.`;
    }
    parrafo.innerHTML = mensaje;
}