let boton1 = document.getElementById("botonUno");

function uno() {
    console.log("Uno");
}

boton1.addEventListener("click", uno);

boton1.addEventListener("mouseenter", () => console.log("Ingrese al boton"));