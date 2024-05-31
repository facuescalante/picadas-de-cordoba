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

    // api---Carga de imágenes aleatorias
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
// form----
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
    else {
        // Si todos los campos están completos, muestra un mensaje de éxito
        alert('Formulario enviado con éxito!');
    }
});


let parallax = document.querySelector(".parallax");
function scrollParallax() {
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translateY(' + scrollTop * -0.1 +'px)';
}
window.addEventListener('scroll', scrollParallax);

// Agrega un evento de clic para cambiar la clase de la tarjeta, la imagen y el texto
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        const image = card.querySelector('img');
        const text = card.querySelector('.card-text');
        
        if (card.classList.contains('flipped')) {
            image.style.display = 'none'; // Oculta la imagen al voltear la tarjeta
            text.classList.add('hidden'); // Oculta el texto al voltear la tarjeta
        } else {
            image.style.display = 'block'; // Muestra la imagen cuando la tarjeta está en su posición original
            text.classList.remove('hidden'); // Muestra el texto cuando la tarjeta está en su posición original
        }

        // Agrega un temporizador para volver automáticamente a la posición original
        setTimeout(() => {
            card.classList.remove('flipped');
            image.style.display = 'block';
            text.classList.remove('hidden');
        }, 5000); // Cambia el valor (en milisegundos) según tus preferencias

        // Oculta el cursor después de un tiempo
        document.body.style.cursor = 'none';
        setTimeout(() => {
            document.body.style.cursor = 'default';
        }, 5000); // Cambia el valor (en milisegundos) según tus preferencias
    });
});
/*-----alemana------*/
document.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;
    var alemanaSection = document.querySelector('.alemana');
    alemanaSection.style.backgroundPositionY = -(scrollPos * 0.5) + 'px'; // Ajusta el valor para un efecto más o menos pronunciado
});












