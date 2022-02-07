
// arreglo de palabras a adivinar
var palSecreta = ["BICICLETA","AUTOMOVIL","LAVARROPA","SECARROPA","COMPUTADORA","CELULAR","ELEFANTE","HORMIGA","GIRASOL","LAVANDA"];
var letra;
var letRepetida = [];
var letError = [];
var vidas =5
var palabra;
var guionPalabra;
var repetidas;
var letrasDisponibles;
var alfabeto;




//---------------palabra ingresada 
var newPalabra = document.getElementById("nueva-palabra");
newPalabra.addEventListener("click",validacion);
function validacion(){
    var nuePalabra = document.getElementById("input-nueva-palabra").value.toUpperCase();
    var patLetras = /^[A-Z]+$/g

    if (patLetras.test(nuePalabra)){
        palSecreta.push(nuePalabra)
        swal ("agregado")
    }else{
        swal({
            text:"solo letras",
            icon:"error",
            buttons:false,
        })
    }
    document.getElementById("input-nueva-palabra").value = ""
    document.getElementById("input-nueva-palabra").focus()
}
//______________________




document.getElementById("ahorcado").style.display="none";

document.getElementById("reiniciar").style.display="none";
document.getElementById("abecedario").style.display ="none";

var iniciar = document.getElementById("iniciar-juego")
iniciar.addEventListener("click",function(){
    palabra = palSecreta[Math.floor(Math.random()*palSecreta.length)]

    document.getElementById("ahorcado").style.display="block";
    document.getElementById("areaJuego").style.display= "flex";
    
    document.getElementById("abecedario").style.display="block";

    guionPalabra = palabra.replace(/./g,"_ ")

    document.getElementById("palabraSecreta").innerHTML = guionPalabra

    document.getElementById("tituloLetras").innerHTML = "LETRAS ERRONEAS"

    document.getElementById("vida").innerHTML = "vidas restantes:  "+vidas;
    
    dibujarBase()
    
 



})




//-------------alfabeto-----------
letrasDisponibles = document.getElementById("abecedario")
alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");//transforma arreglo
alfabeto.forEach((elemento)=> {
    var button = document.createElement("button")
    button.innerHTML = elemento
    letrasDisponibles.appendChild(button).id= elemento;

    button.addEventListener("click", (e) => {
        var letreaSeleccionada = e.target.id;
        examinarLetra(letreaSeleccionada)

    })


})

function examinarLetra(letra){
    
   var  nueva = "";
   var errar = true
   for (var i=0; i < palabra.length; i++){
       if(letra == palabra[i]){
           nueva = nueva + letra + " ";
           errar = false
       }else{
           nueva = nueva + guionPalabra[i*2]+" ";
        }

    } 

    if(errar){
        var estado = comprobarLetra(letra)
        if(estado){
            vidas -= 1            
        }
        if(vidas == 4){
            dibujarPoste()
            dibujarCabeza()
        }
        if(vidas == 3){
            dibujarCuerpo()
        }
        if(vidas == 2){
            dibujarBrazos()
        }
        if(vidas == 1){
            dibujarPiernas()
        }
        if(vidas == 0){
            dibujarOjos();
            document.getElementById("perdedor").innerHTML = "FIN JUEGO! - era :" +palabra
            document.getElementById("reiniciar").style.display="block";
            document.getElementById("abecedario").style.display ="none";//saco el abecedario
        }
        document.getElementById("vida").innerHTML = "cantidad vidas  " + vidas;        
    }
    
    guionPalabra = nueva;

    document.getElementById("palabraSecreta").innerHTML = guionPalabra;

    if(guionPalabra.search("_") === -1){
        document.getElementById("ganador").innerHTML = "FELICIDADES GANASTE"
        document.getElementById("reiniciar").style.display="block";
        document.getElementById("abecedario").style.display ="none";//saco el abecedario
        
    }

}


function comprobarLetra(valor){
    letra = valor
    var agregar = false
    if(!letError.includes(letra)){
        letError.push(letra)
        document.getElementById("letrasError").innerHTML = letError
        agregar = true
      
    }else{
        letRepetida.push(letra)
        swal ({
            title:"ya fue utilizada  "+ letra,
            buttons:false,
            timer:2500
        })
    }
    return agregar
}


