let playerText=document.querySelector("#playerText");
let computerText=document.querySelector("#computerText");
let resultText=document.querySelector("#resultText");
let ice=document.querySelector("#ice");
let water=document.querySelector("#water");
let fire=document.querySelector("#fire");
let elements= document.querySelectorAll(".element");
function opt1(){
playerText.innerText="fire";
}
function opt2(){
playerText.innerText="ice";
}
function opt3(){
playerText.innerText="water";
}
function Computer(){
let i =Math.floor(Math.random()*3);
let array=['water','fire','ice']

computerText.innerText=array[i];
if(playerText.innerText===computerText.innerText){
    resultText.innerText="draw";
    }
   else if((playerText.innerText.length===4 && computerText.innerText.length===3)|| (playerText.innerText.length===3 && computerText.innerText.length===5)  || (playerText.innerText.length===5 && computerText.innerText.length===4)){
        resultText.innerText="Player Won"; 
    }
   else{
        resultText.innerText="Computer Won"; 
    }

}
