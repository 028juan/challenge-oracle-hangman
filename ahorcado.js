
// arreglo de palabras a adivinar
var palSecreta = ["BICICLETA","AUTOMOVIL","LAVARROPA","SECARROPA","COMPUTADORA","CELULAR","ELEFANTE","HORMIGA","GIRASOL","LAVANDA"];
var letra;
var letRepetida = [];
var letError = [];
var vidas =5
var palabra;
var guionPalabra;
var repetidas;
 
var newPalabra = document.getElementById("nueva-palabra");
newPalabra.addEventListener("click",validacion);
function validacion(){
    var nuePalabra = document.getElementById("input-nueva-palabra").value.toUpperCase();
    var patLetras = /^[A-Z]+$/g

    if (patLetras.test(nuePalabra)){
        palSecreta.push(nuePalabra)
        swal ("agregado")
    }else{
        sawl ({
            tex:"solo mayusculas",
            icon:"error",
            buttons:false,
        })
    }
    document.getElementById("input-nueva-palabra").value = ""
    document.getElementById("input-nueva-palabra").focus()
}
document.getElementById("ahorcado").style.display="none";
document.querySelector(".titulo").style.display="none";
document.getElementById("reiniciar").style.display="none";

var iniciar = document.getElementById("iniciar-juego")
iniciar.addEventListener("click",function(){
    palabra = palSecreta[Math.floor(Math.random()*palSecreta.length)]
    document.getElementById("ahorcado").style.display="block";
    document.querySelector(".titulo").style.display="block";

    guionPalabra = palabra.replace(/./g,"_ ")

    document.getElementById("palabraSecreta").innerHTML = guionPalabra

    document.getElementById("tituloLetras").innerHTML = "LETRAS ERRONEAS"

    document.getElementById("vida").innerHTML = "vidas restantes:  "+vidas;
    
    dibujarBase()

    window.addEventListener("keydown",ingLetra);
})

function ingLetra(e){
    var tecla = e.keyCode || e.which;
    if(tecla>64 && tecla <91){
        letra = e.key.toUpperCase()
        console.log(letra)
        examinarLetra(letra);
    }
}

function examinarLetra(letra){
    console.log(letra)
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
            window.removeEventListener("keydown",ingLetra)
        }
        document.getElementById("vida").innerHTML = "cantidad vidas  " + vidas;        
    }
    
    guionPalabra = nueva;

    document.getElementById("palabraSecreta").innerHTML = guionPalabra;

    if(guionPalabra.search("_") === -1){
        document.getElementById("ganador").innerHTML = "FELICIDADES GANASTE"
        document.getElementById("reiniciar").style.display="block";
        window.removeEventListener("keydown",ingLetra)
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




/*

comienzo();
var btnComienso=getElementById("iniciar-juego");

function ocultarBtn(){
    btnComienso.style.display="none"
}

function comienzo(){
    // la palabra seleccionada aleatoriamente
    palabraSelec = palabras[Math.floor(Math.random()*palabras.length)];
    console.log(palabraSelec)
    //palabra secreta se remplace con guionesp
    guionPalabra = "";
    for(var i =0; i < palabraSelec.length; i++){
        
        guionPalabra = guionPalabra + ("_ ");
    }
    // hacer visible palabra secreta utilisando guiones
    document.getElementById("oculto").innerHTML = guionPalabra;
}


var vida = 5
document.getElementById("vidas").innerHTML = "El total de vidas es: " + vida;
// captura el boton probar-letra
document.getElementById("btn_ingreso").addEventListener("click", verificar)




function verificar(){
    // se captura lo ingresado por el usuario
    var letra = document.getElementById("texto_ingresado").value.toLowerCase();
    var nuevaLetra = "";
    var error = true
    for(var i =0; i < palabraSelec.length; i++){
        if(letra == palabraSelec[i]){
            nuevaLetra = nuevaLetra + letra + " ";
            error = false             
        }else{
            nuevaLetra = nuevaLetra + guionPalabra[i*2] + " "            
        }

    }

    if (error){
        vida --;
        document.getElementById("vidas").innerHTML = "El total de vidas es: " + vida;
    }
    guionPalabra = nuevaLetra
   
    document.getElementById("oculto").innerHTML = guionPalabra;

    if(vida == 0){
        alert("perdiste")
    }
    if (guionPalabra.search("_") == -1){
        alert("ganaste")
    }
    document.getElementById("texto_ingresado").value ="";
    document.getElementById("texto_ingresado").focus();
    dibujar();



}*/
