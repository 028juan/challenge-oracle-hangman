
var mostrarDibujo = document.querySelector("canvas");
mostrarDibujo.scrollIntoView({block:"end",behavior:"smooth"});
var lapiz =mostrarDibujo.getContext("2d");
lapiz.fillStyle = "grey"
function dibujarBase(){
    
 lapiz.beginPath();
 lapiz.moveTo(30,200); 
 lapiz.lineTo(80,200);
 lapiz.moveTo(010,200);
 lapiz.lineTo(30,200);
 lapiz.lineWidth= 4;
 lapiz.stroke();    
}
function dibujarPoste(){
    
 lapiz.beginPath();
 lapiz.moveTo(30,200);
 lapiz.lineTo(30,10);
 lapiz.lineTo(150,10);
 lapiz.lineTo(150,20);
 lapiz.stroke();
}

function dibujarCabeza(){
    
    lapiz.beginPath();
    lapiz.arc(150,40,20,0,Math.PI*2);
    lapiz.stroke();       
}

function dibujarCuerpo(){
    lapiz.beginPath();
    lapiz.moveTo(150,60);
    lapiz.lineTo(150,100);
    lapiz.stroke();

}

function dibujarBrazos(){
    lapiz.beginPath();
    lapiz.moveTo(150,60);
    lapiz.lineTo(130,100);
    lapiz.stroke();

    lapiz.beginPath();
    lapiz.moveTo(150,60);
    lapiz.lineTo(170,100);
    lapiz.stroke();

}

function dibujarPiernas(){
    lapiz.beginPath();
    lapiz.moveTo(150,100);
    lapiz.lineTo(170,130);
    lapiz.stroke();

    lapiz.beginPath();
    lapiz.moveTo(150,100);
    lapiz.lineTo(130,130);
    lapiz.stroke();

}

function dibujarOjos(){
    lapiz.beginPath();
    lapiz.moveTo(145, 40);
    lapiz.lineTo(130,30);
    lapiz.moveTo(145,30);
    lapiz.lineTo(135,40);
    lapiz.stroke();    

    lapiz.beginPath();
    lapiz.moveTo(155, 40);
    lapiz.lineTo(170,30);
    lapiz.moveTo(155,30);
    lapiz.lineTo(170,40);
    lapiz.strokeStyle = "red";
    lapiz.lineWidth = 5;
    lapiz.stroke();

}
   
   
    
