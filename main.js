let share = document.querySelector(".share");
let icons = document.querySelector(".icons")

share.addEventListener("click",function(){
    if(getComputedStyle(icons).display == "none"){
        icons.style.display = "flex";
    }else{
        icons.style.display = "none";
    }
})