let n1 = document.getElementById("kaas");
let n2 = document.getElementsByClassName("k");
let n3 = document.getElementsByClassName("a");
let n4 = document.getElementsByClassName("s");
let k = "k";
let a = "a";
let s = "s";
function galgjejs(){
    console.log(n1.value);
   

    if(n1.value == k){
        for (let i = 0; i < n2.length; i++) {
            n2[i].textContent = "k ";
        }
    }

    if(n1.value == a){
        for (let i = 0; i < n3.length; i++) {
            n3[i].textContent = "a a ";
        }
    }

    if(n1.value == s){
        for (let i = 0; i < n4.length; i++) {
            n4[i].textContent = "s";
        }
    }
}