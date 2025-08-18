let sections = document.querySelectorAll("section");
let body = document.querySelector("body")
let h1 = document.querySelector("h1")
let p = document.querySelector("p")

let mododecolor = true;

let sec1inp = document.querySelector ()



function colores() {

    if (mododecolor) {
         sections.forEach(cambiodecolor => {
    cambiodecolor.style.backgroundColor = "white";
   })
   body.style.backgroundColor = "black"
   h1.style.color = "white"
   p.style.color = "white"


   mododecolor = false;
    } else {
         sections.forEach(s => s.style.backgroundColor = ""); // vacío usa el color original del CSS
        body.style.backgroundColor = "";
        h1.style.color = "";
        p.style.color = "";

        mododecolor = true; // Vuelve a modo claro
    }

  
}


const formulario = document.getElementById("miformulario")

const inputNombre = document.getElementById("nombre")
const inputedad = document.getElementById("edad")
const resultado = document.getElementById("button")

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = inputNombre.value.trim();
    const edad = inputedad.value.trim()

     resultado.textContent = `!Bienvenido ${nombre}, , tienes ${edad}`;
})