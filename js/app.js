'use strict';
const section = document.querySelector(".section");
const container = document.querySelector(".container");

const toggleForm = () => {
    container.classList.toggle("active");
    section.classList.toggle("active");
}