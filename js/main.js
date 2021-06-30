var modes = document.querySelector("svg");
var sunAndMoon = document.querySelector("path");

modes.addEventListener("click", function(){
    console.log("gg");
    sunAndMoon.classList.toggle("to-sun");
sunAndMoon.classList.toggle("to-moon");
modes.classList.toggle("svg-toggle");
});