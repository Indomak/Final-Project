let close = document.querySelector(".close");
let open = document.querySelector(".ham");
let menu = document.querySelector(".menu");

close.addEventListener("click", () => {
    menu.style.visibility="hidden";
});
open.addEventListener("click", () => {
    menu.style.visibility="visible";
});

let items = document.getElementsByClassName("items");
let button = document.getElementsByClassName("showmore");

button.onclick = function(){

    if(items.className == "open"){
        items.className = "";
        button.innerHTML = "show More";

    } else{
        items.className ="open";
        button.innerHTML = "Show Less";
    }
};

