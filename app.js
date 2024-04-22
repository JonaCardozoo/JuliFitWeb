
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


let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  slideIndex += n;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }

  const offset = -slideIndex * 100;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Automatic slide movement
setInterval(() => {
  moveSlide(1);
}, 5000); // Change slide every 5 seconds




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

//transicion por secciones//

document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('header nav ul li a');

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href').substring(1);
      var targetSection = document.getElementById(targetId);
      var offsetTop = targetSection.offsetTop;
      scrollToTarget(offsetTop);
    });
  });

  function scrollToTarget(offsetTop) {
    var initialPosition = window.scrollY;
    var distance = offsetTop - initialPosition;
    var duration = 500; // Duración del desplazamiento en milisegundos
    var startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, initialPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
});


document.addEventListener('DOMContentLoaded', function(event) {
  // Objeto con los textos a escribir en la máquina de escribir para cada sección
  var dataText = {
    "inicio":["Julian Gonzalez","Personal Trainer"],
    "planes": ["PLANES!", "PLANS!", "PLANOS!", "PIANI!"],
    "cambiosFisicos": ["CAMBIOS FISICOS!", "PHYSICAL CHANGES!", "MUDANÇAS FÍSICAS!", "CAMBIAMENTI FISICI!"],
    // Añade más secciones y sus respectivos textos aquí
  };

  // Función para escribir un texto en la máquina de escribir
  // Se llama a sí misma hasta que se termina el texto
  function typeWriter(elemento, texto, i, fnCallback) {
    // Verificar si el texto no ha terminado aún
    if (i < texto.length) {
      // Agregar el siguiente carácter al elemento h4
      elemento.innerHTML = texto.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // Esperar un momento y llamar a esta función nuevamente para el siguiente carácter
      setTimeout(function() {
        typeWriter(elemento, texto, i + 1, fnCallback)
      }, 100);
    }
    // Texto terminado, llamar al callback si existe una función de callback
    else if (typeof fnCallback == 'function') {
      // Llamar al callback después de un tiempo de espera
      setTimeout(fnCallback, 900);
    }
  }

  // Iniciar la animación de la máquina de escribir para un texto en el objeto dataText
  function startTextAnimation(elementos, i, texts) {
    // Verificar si texts[i] existe
    if (i < texts.length) {
      // El texto existe! Iniciar la animación de la máquina de escribir para cada elemento h4
      elementos.forEach(function(elemento) {
        typeWriter(elemento, texts[i], 0, function() {
          // Después del callback (y cuando se ha animado todo el texto), iniciar el siguiente texto
          startTextAnimation(elementos, (i + 1) % texts.length, texts);
        });
      });
    }
  }

  // Obtener todos los elementos h4 de cada sección y empezar la animación de texto para cada sección
  var secciones = Object.keys(dataText);
  secciones.forEach(function(seccion) {
    var elementosH4 = document.querySelectorAll("#" + seccion + " h4");
    startTextAnimation(elementosH4, 0, dataText[seccion]);
  });
});


window.addEventListener('scroll', function() {
  var section = document.getElementById('inicio');
  var shadow = document.querySelector('.shadow');

  if (shadow) {
    // Calculamos la posición del section
    var sectionBottom = section.offsetTop + section.offsetHeight;
    var windowBottom = window.pageYOffset + window.innerHeight;

    // Si la parte inferior del section está en la vista del usuario
    if (windowBottom >= sectionBottom) {
        shadow.classList.add('show-shadow');
    } else {
        shadow.classList.remove('show-shadow');
    }
  }
});


