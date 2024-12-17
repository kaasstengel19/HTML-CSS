let username = document.getElementById("fname");
let ww = document.getElementById("lname");
let Hans = "Hans";
let Phaedon = "Phaedon";
function ippuller(){
    console.log(username.value);
    if(username.value == Hans && ww.value == Phaedon){
        document.location.href = "info.html";
    }
}

