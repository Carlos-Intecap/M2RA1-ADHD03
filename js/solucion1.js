let texto1, texto2, texto3, texto4, texto5;

function obtenerTextos(){
    texto1 = document.getElementById("txt_texto1").value;
    texto2 = document.getElementById("txt_texto2").value;
    texto3 = document.getElementById("txt_texto3").value;
    texto4 = document.getElementById("txt_texto4").value;
    texto5 = document.getElementById("txt_texto5").value;
}
function verificarInput(){
    obtenerTextos()
    if(texto1==""||texto2==""||texto3==""||texto4==""||texto5==""){
        alert("Debes llenar todos los campos")
        return false
    }
    return true
}
function concatenar(){
    if(verificarInput()){
        document.getElementById("respuesta").innerHTML=texto1+texto2+texto3+texto4+texto5;
    }
}
function textoLargo(){
    if(verificarInput()){
        let datos = [texto1,texto2,texto3,texto4,texto5]
        let cont;
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                if(datos[j].length<datos[j+1].length){
                    cont = datos[j];
                    datos[j]=datos[j+1];
                    datos[j+1]=cont;
                }
            }
        }
        document.getElementById("respuesta").innerHTML="La palabra más larga es: "+datos[0]+" con "+datos[0].length+" caracteres.";
    }
}
function formarPalabra(){
    if(verificarInput()){
        let palabra = texto1.charAt(texto1.length-1)+texto2.charAt(texto2.length-1)
        +texto3.charAt(texto3.length-1)+texto4.charAt(texto4.length-1)+texto5.charAt(texto5.length-1);
        document.getElementById("respuesta").innerHTML=palabra;
    }
}