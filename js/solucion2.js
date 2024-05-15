// FUNCION CALCULAR PROMEDIO

function calcularPromedio() {
    innerHTML = "";

    let notaa = parseFloat(document.getElementById("primerNumero").value);
    let notab = parseFloat(document.getElementById("segundoNumero").value);
    let notac = parseFloat(document.getElementById("tercerNumero").value);
    let notad = parseFloat(document.getElementById("cuartoNumero").value);

    let promedio = (notaa + notab + notac + notad) / 4;
    document.getElementById("respuestaa").innerHTML =
        ("Su promedio es: " + promedio);
}
calcularPromedio();

// FUNCION CALCULAR SI LOS VALORES SON IGUALES O NO

function calcularValores() {
innerHTML = "";

    let notaa = parseFloat(document.getElementById("primerNumero").value);
    let notab = parseFloat(document.getElementById("segundoNumero").value);
    let notac = parseFloat(document.getElementById("tercerNumero").value);
    let notad = parseFloat(document.getElementById("cuartoNumero").value);


    if (notaa === notab && notab === notac && notac === notad) { // === compara valores iguales == compara el tipo
      document.getElementById("respuestab").innerHTML =
            "Los valores son iguales"
    }
    else if (notaa != notab && notab != notac && notac != notad) {
        document.getElementById("respuestab").innerHTML =
            "Los valores son distintos"
    } else {
        document.getElementById("respuestab").innerHTML =
        "Los valores son distintos entre sí"
    }

}

calcularValores();

//MOSTRAR VALORES MAYORES

function mostrarValoresMayores(){
    innerHTML = "";
    let notaa = parseFloat(document.getElementById("primerNumero").value);
    let notab = parseFloat(document.getElementById("segundoNumero").value);
    let notac = parseFloat(document.getElementById("tercerNumero").value);
    let notad = parseFloat(document.getElementById("cuartoNumero").value);

    let maximo = Math.max(notaa, notab, notac, notad);
    document.getElementById("respuestac").innerHTML =
    "El número mayor es: " + maximo;

}