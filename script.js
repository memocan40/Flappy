var block= document.getElementById("block");
var hole = document.getElementById("hole");
var char = document.getElementById("character");
var jumping = 0;

hole.addEventListener("animationiteration",()=>{
    var random = -((Math.random()*300)+150);
    if(jumping==0){
    hole.style.top= random + "px";}
})


setInterval(() => {
    var characterpos = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    character.style.top=(characterpos+3)+"px";
    if(characterpos>450){
        alert("game over");
        character.style.top=100+"px";
    }
}, 10);


function jump(){
jumping=1;
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