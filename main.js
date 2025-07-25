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

//--------------------------------------------------------------------------------------------------------------------------------------------------------

async function obtenerPokemon (pokemon) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await res.json();
        console.log(data.name);
        mostrarPokemon(data);
    } catch (error) {
        console.error(error, 'no se pudo encontrar al pokemon' + pokemon);
    }
}


// Declaramos las variables:
const buscar = document.getElementById('buscar');
const input = document.getElementById('input');
const div = document.getElementById('div');
const ul = document.getElementById('ul');

// Capturamos el evento del boton buscar con el click
buscar.addEventListener('click', () => {
    console.log(`Lo que busco fue: ${input.value}`);
    obtenerPokemon(input.value);

    input.value = "";
});

function mostrarPokemon(e) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const img = document.createElement('img');
    p.innerText = e.name;
    img.src = e.sprites.front_default;

    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);
}