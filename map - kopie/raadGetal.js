//de gebruiker mag proberen om het 'te raden' getal te raden.
//Het te raden getal mag gewoon een vast getal zijn dat in de code staat (hardcoded)

//Een regel code is gegeven, hoe nu verder?
let number = 6;
let numberGuessed = 0;

while(numberGuessed != number){
    numberGuessed = prompt("Raad het getal (1 tot en met 10)");

if(numberGuessed == number){
alert("gewonnen")
break;
}else{
    if(numberGuessed < number){
        alert("het getal is hoger")
    }
    else{
        alert("het getal is lager")
    }
}}