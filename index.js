const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
})

/* --------slider----------*/
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_img");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnRight = document.getElementById("slider__btn--right");
const btnLeft = document.getElementById("slider__btn--left");

function next() {
    let sliderSectionFirst = document.querySelectorAll(".slider_img")[0];

    slider.style.marginLeft = "-200%";
    slider.style.transition = "margin-left 1s";

    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%"

    }, 1000);
}

function prev() {
    let sliderSection = document.querySelectorAll(".slider_img");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];

    slider.style.marginLeft = "0";
    slider.style.transition = "margin-left 1s";

    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%"
    }, 1000);
}

btnRight.addEventListener("click", function () {
    next()
})

btnLeft.addEventListener("click", function () {
    prev()
})

 setInterval(() => {
     next()
 }, 4000);

document.getElementById('myForm').addEventListener('submit', function(event) {
    // Obtengo elementos del formulario
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var option = document.getElementById('option');
    var check = document.getElementById('check');

    // Verifico si los campos están vacíos
    if (!fname.value || !lname.value || !email.value || !option.value || !check.checked) {
        alert('Todos los campos son obligatorios.');
        event.preventDefault();  // Previene el envío del formulario
    }
});
document.getElementById('myForm').addEventListener('submit', function(event) {
    // validación de formulario aquí

    // Redirige a index.html
    window.location.href = 'index.html';
});

