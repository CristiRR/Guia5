function aviso(){
    alert("Bienvenido al mundo JavaScript");

}

function confirmacion(){
//aqui hay true o false
    let confirmacion = confirm("Desea salir de Sesión?");

    alert(`Valor seleccionado ${confirmacion}`);
}

function capturarDatos(){
    let nombre = prompt("Cual es su nombre?");

    let edad = prompt(" Cual es si edad?", 0);
    alert(`Su nombre es ${nombre} y su edad ${edad}`);
}

function dibujarParrafo(){
    let parrafo = prompt(
          "Escriba la información que desea visualizar en el parrafo"
    );
    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo;

}
