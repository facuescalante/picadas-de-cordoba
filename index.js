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
    let sliderSection = document.querySelectorAll(".slider_img");
    let sliderSectionFirst = sliderSection[0];

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

// Función que se ejecuta cuando la ventana se carga
window.onload = function() {
    // Ajusta el ancho del contenedor del slider en función del número de slides
    slider.style.width = (sliderSection.length * 100) + "%";

    // Carga de imágenes aleatorias
    var imageContainer = document.getElementById('image-container');

    for (var i = 0; i < 2; i++) {  
        fetch('https://foodish-api.com/api/')
            .then(response => response.json())
            .then(data => {
                var img = document.createElement('img');
                img.src = data.image;
                img.className = 'api-image moving-image';  
                imageContainer.appendChild(img);
            });
    }
}

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



