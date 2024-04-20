
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.buttons button');
    let delay = 0;

    buttons.forEach(button => {
        setTimeout(() => {
            button.style.opacity = '1';
        }, delay);
        delay += 500; // Cambia el valor del retraso (en milisegundos) para ajustar la velocidad de la transición
        
    });
});


let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("carousel-item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


/* acordion */

let acc_boxes = document.querySelectorAll(".acc_box");

acc_boxes.forEach((acc_box, index) => {
    let symbol = acc_box.querySelector(".symbol");
    acc_box.addEventListener("click", () => {
        if (acc_box.classList.contains("active")) {
            // Si el elemento ya está activo, contraerlo nuevamente
            acc_box.classList.remove("active");
            acc_box.querySelector(".acc_text").style.maxHeight = "0";
            symbol.textContent = "+";
        } else {
            // Remover la clase "active" de todos los elementos
            acc_boxes.forEach(eachBox => {
                eachBox.classList.remove("active");
                eachBox.querySelector(".acc_text").style.maxHeight = "0";
                eachBox.querySelector(".symbol").textContent = "+";
            });
            // Agregar la clase "active" solo al elemento clicado
            acc_box.classList.add("active");
            symbol.textContent = "-";
            // Expandir el texto de la caja clicada
            acc_box.querySelector(".acc_text").style.maxHeight = acc_box.querySelector(".acc_text p").scrollHeight + "px";
        }
    });
});





