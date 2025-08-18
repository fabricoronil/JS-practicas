let sections = document.querySelectorAll("section");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let cajadatos = document.getElementById("caja-datos")
let datonombre = document.getElementById("caja-datos-nombre")
let datoedad = document.getElementById("caja-datos-edad")
let mododecolor = true;
 

function colores() {
    if (mododecolor) {
        sections.forEach(cambiodecolor => {
            cambiodecolor.style.backgroundColor = "white";
        });
        body.style.backgroundColor = "black";
        h1.style.color = "white";
        p.style.color = "white";
        cajadatos.style.border = "2px solid black"
        mododecolor = false;
        datonombre.style.color = "black"
        datoedad.style.color = "black"
    } else {
        sections.forEach(s => s.style.backgroundColor = ""); 
        body.style.backgroundColor = "";
        h1.style.color = "";
        p.style.color = "";

        mododecolor = true;
    }
}

const formulario = document.getElementById("miformulario");
const inputNombre = document.getElementById("nombre");
const inputedad = document.getElementById("edad");
const resultado = document.getElementById("button");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = inputNombre.value.trim();
    const edad = inputedad.value.trim();

    resultado.textContent = `¡Bienvenido ${nombre}, tienes ${edad}!`;
});
