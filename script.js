var block= document.getElementById("block");
var hole = document.getElementById("hole");
var char = document.getElementById("character");
let jumping = 0;

hole.addEventListener("animationiteration",()=>{
    var random = -((Math.random()*300)+150);
    
    hole.style.top= random + "px";
})


setInterval(() => {
    var characterpos =
     parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
     character.style.top=(characterpos+3)+"px";}
    
       var blockleft= parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var holetop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
        var charactertop= parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var cTop =-(500-charactertop);
     if((characterpos>450)||(blockleft<20)&&(blockleft>-50)&&((cTop<holetop)||(ctop>holetop+130))){
        alert("game over");
        character.style.top=100+"px";
    }
 
}, 10);


function jump(){

let jumpcounter=0;
var jumpinterval = setInterval(() => {
    var characterpos = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    character.style.top=(characterpos-5)+"px";

    if(jumpcounter>20){
        clearInterval(jumpinterval);
    }
    jumpcounter++;
}, 10);
}