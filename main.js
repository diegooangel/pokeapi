const modoOscuro = document.getElementById('modo-oscuro');
modoOscuro.addEventListener('click', () => {
    if (document.body.classList.contains("modo-claro")) {
        document.body.classList.remove("modo-claro");
        document.body.classList.add("modo-oscuro");
    } else {
        document.body.classList.remove("modo-oscuro");
        document.body.classList.add("modo-claro");
    }
});

const input = document.getElementById('input');
const buscar = document.getElementById('buscar');
const div = document.getElementById('div');
const p = document.getElementById('p');
buscar.addEventListener('click', () => {
    const pokemon = input.value;
    console.log(pokemon);
    obtenerPokemon(pokemon);
});

async function obtenerPokemon (pokemon) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await res.json();
        console.log(data.name);
        mostrarPokemon(data);
        mostrarEvoluciones();
    } catch (error) {
        console.error(error, 'no se pudo encontrar al pokemon' + pokemon);
    }
}
// Funcion para insertar en html la imagen y el nombre del pokemon.
const mostrarPokemon = (e) => {
    const img = document.createElement('img');
    p.textContent = e.name;
    img.src = e.sprites.front_default;

    div.appendChild(img);
}

// Funcion para mostrar las evoluciones.
const mostrarEvoluciones = (e) => {
    const boton = document.createElement('button');
    boton.innerText = "ver evoluciones ..."
    div.appendChild(boton);

    boton.addEventListener("click", (e) => {
        const parrafo = document.createElement('p');
        div.appendChild(parrafo);
        parrafo.innerHTML = `La evolucion del pokemon es: ${e.name}`
    });

}


