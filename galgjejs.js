let n1 = document.getElementById("kaas");

let array = ["k", "a", "a", "s"];
let ar2 = [];
let levens = 10

let ba = document.getElementById("k");

let le = document.getElementById("L");

for (let i = 0; i < array.length; i++) {
    ar2.push(" _");
    ba.innerText += " _";
}

le.innerText = "Levens: " + levens;

function galgjejs(){
    console.log(n1.value);

   let text = "";
   for (let i = 0; i < array.length; i++) {
    if(n1.value === array[i]){
        ar2[i] = n1.value;
    } 
    text += ar2[i]
}
let wrong = true
for (let j = 0; j < array.length; j++){
if(n1.value === array[j]){
    wrong = false
}
}
if(wrong === true){
    levens -= 1;
}

if(levens === -1){
    levens += 1;
}

if(n1.value === ""){
    levens += 1;
}
 
if(levens === 0){
    alert("Verloren;(");
}

if(ba.innerText == "kaas"){
    alert("Gewonnen!!!!:)");
}

    le.innerText = "levens: " + levens;
    ba.innerText = text;
    n1.value = "";
}

