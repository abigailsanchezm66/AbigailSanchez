// link del API de Ghibli en una variable
var urlGhibli = "https://ghibliapi.vercel.app/films";

// Esta función va a internet, se trae las películas y las dibuja
function cargarPeliculas() {
    
    // .contenedor vacío del HTML
    var contenedor = document.getElementById("contenedor-tarjetas");
    
    // pongo un texto de carga temporal (UX)
    contenedor.innerHTML = "Cargando películas de Ghibli...";

    // . aago la conexión AJAX usando fetch 
    fetch(urlGhibli)
        .then(function(respuesta) {
            return respuesta.json(); // Converti los datos para poder leerlos
        })
        .then(function(peliculas) {
            
            // Limpio el texto de Cargando para meter las tarjetas
            contenedor.innerHTML = "";

            // Recorro las películas una por una con un bucle FOR común
            for (var i = 0; i < peliculas.length; i++) {
                
                // Guardo la película actual en una variable 
                var peli = peliculas[i];

                // Creo una tarjeta vacía (un div)
                var tarjeta = document.createElement("div");
                tarjeta.className = "tarjeta"; // Le ponemos la clase de CSS

                // Le metemos la estructura con los datos de la película actual
                tarjeta.innerHTML = `
                    <img src="${peli.image}">
                    <h3>${peli.title}</h3>
                    <h4>${peli.original_title}</h4>
                    <p>Director: ${peli.director}</p>
                    <p>Año: ${peli.release_date}</p>
                `;

                // Meto la tarjeta adentro
                contenedor.appendChild(tarjeta);
            }
            
        });
}

//botón del HTML 
var boton = document.getElementById("btn-cargar");
boton.addEventListener("click", cargarPeliculas);