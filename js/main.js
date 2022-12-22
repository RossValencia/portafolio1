//Inicia la Carga de contenido

window.onload = function () {
  document.getElementById("cargando").remove();
  document.getElementById("corte").classList.remove("corte");

  document.getElementById("sobre").classList.add("animate__fadeIn");
  document.getElementById("sobre").classList.add("animate__slow");
  document.getElementById("sobre").classList.add("animate__delay-1s");
};

//cambio de colores

var r = document.querySelector(":root");

function cambioColor(e) {
  r.style.setProperty("--color4", e);
}

// opacidad de elementos con scroll

let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;

  for (var i = 0; i < animado.length; i++) {
    let alturaPag = animado[i].offsetTop;
    if (alturaPag - 680 < scrollTop) {
      animado[i].style.opacity = 1;
      animado[i].classList.add("animate__animated");
      animado[i].classList.add("animate__fadeIn");
      animado[i].classList.add("animate__slow");
    }
  }
}

window.addEventListener("scroll", mostrarScroll);

// filtro

const liItem = document.querySelectorAll("ul li");
const imgItem = document.querySelectorAll(".tarjetas .fotos");

liItem.forEach((li) => {
  li.onclick = function () {
    //activo
    liItem.forEach((li) => {
      li.className = "";
    });
    li.className = "activo";

    //Filtrar
    const value = li.textContent;

    imgItem.forEach((img) => {
      img.style.display = "none";
      if (
        img.getAttribute("data-filter") == value.toLowerCase() ||
        value == "Todos"
      ) {
        img.style.display = "";
      }
    });

    // light-box filtrar arrow

    const next = document.querySelectorAll(".light-box .next");

    next.forEach((e) => {
      e.style.display = "none";
      if (
        e.getAttribute("data-filter") == value.toLowerCase() ||
        value == "Todos"
      ) {
        e.style.display = "";
      }
    });
  };
});

// enviar correo

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_4sm771l";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar";
      alert("Correo Enviado");
      location.reload();
    },
    (err) => {
      btn.value = "Enviar";
      alert(JSON.stringify(err));
    }
  );
});
