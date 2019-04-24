var tombol = document.querySelector(".container-tombol");
var layar = document.querySelector("#layar");

tombol.addEventListener("click", function(e){
    
    var tombolclick = e.target;
    var nilaitombol = tombolclick.innerText;

    if(nilaitombol == "C"){
        layar.value = "";
    }
    else if(nilaitombol == "<"){
        layar.value = layar.value.slice(0, -1);
    }
    else if(nilaitombol == "="){
        layar.value = eval(layar.value);
    }
    else{
        layar.value = layar.value + nilaitombol;
    }

});