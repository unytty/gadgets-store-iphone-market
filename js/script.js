let menu=document.querySelector("nav");
let menuBtn=document.querySelector(".menu_btn");
let closeBtn=document.querySelector(".close_btn");

menuBtn.addEventListener("click", function(){
    menu.classList.add("active");
})

closeBtn.addEventListener("click", function(){
    menu.classList.remove("active");
})