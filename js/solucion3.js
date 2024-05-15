let texto1 = " ";
let texto2 = " ";
let numero1 = " ";
let numero2 = " ";
let nuevaCadena = " ";
let largoCadena = " ";
let promedio = " ";
let comparacion=" ";
let suma=" ";
function concatenarTextos(event) {
    event.preventDefault();
    texto1 = document.getElementById("txt1").value.trim();;
    texto2 = document.getElementById("txt2").value.trim();
    numero1 = parseFloat(document.getElementById("number1").value.trim());
    numero2 = parseFloat(document.getElementById("number2").value.trim());
    if (texto1 === "" || texto2 === "" || isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, ingrese valores en todos los campos.');
        return;
    }
    nuevaCadena = texto1 + texto2;
    largoCadena = nuevaCadena.length;


    document.getElementById('resultados').innerHTML = "El largo de la concatenación de los textos es: " + largoCadena;
    document.getElementById("titulo").innerHTML="Concatenar textos"; 

    

}

function comparacionLargos(event) {
    event.preventDefault();
    texto1 = document.getElementById("txt1").value;
    texto2 = document.getElementById("txt2").value;
    numero1 = parseFloat(document.getElementById("number1").value);
    numero2 = parseFloat(document.getElementById("number2").value);
    if (texto1 === "" || texto2 === "" || isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, ingrese valores en todos los campos.');
        return;
    }
    nuevaCadena = texto1 + texto2;
    largoCadena = nuevaCadena.length;
    promedio = (numero1 + numero2) / 2;

    if (largoCadena>promedio){
        document.getElementById('resultados').innerHTML = "La longitud del texto es más grande que el promedio  " + "<br>"+ "Resultado: "+largoCadena;
    }
    else if(largoCadena<promedio){
        document.getElementById('resultados').innerHTML = "El promedio es más grande que la longitud del texto "  + "<br>"+ "Resultado: "+ promedio;
    }

    else{
        document.getElementById('resultados').innerHTML="Los valores son iguales"
    }

    document.getElementById("titulo").innerHTML="Comparación"; 

}

function formacionPalabras(event){
    event.preventDefault();
    texto1 = document.getElementById("txt1").value;
    texto2 = document.getElementById("txt2").value;
    numero1 = parseFloat(document.getElementById("number1").value);
    numero2 = parseFloat(document.getElementById("number2").value);
    if (texto1 === "" || texto2 === "" || isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, ingrese valores en todos los campos.');
        return;
    }
    suma = numero1 + numero2;
    let primeraLetrac1= texto1.charAt(0);
    let ultimaLetrac1=texto1.charAt(texto1.length-1);
    let primeraLetrac2= texto2.charAt(0);
    let ultimaLetrac2=texto2.charAt(texto2.length-1);
    document.getElementById("resultados").innerHTML="El nuevo texto es: "+ primeraLetrac1+ultimaLetrac1+primeraLetrac2+ultimaLetrac2+suma;
    document.getElementById("titulo").innerHTML="Formación de nuevo texto"; 

   
}