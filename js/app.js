'use strict';

//const container = document.querySelector(".container");
const btnToggle = document.querySelector(".btnToggle");
btnToggle.addEventListener("click",()=>{
    //container.classList.toggle("active");
    console.log("hoola")
});


function toggleForm(){
    const container = document.querySelector(".container");
    container.classList.toggle("active");
}