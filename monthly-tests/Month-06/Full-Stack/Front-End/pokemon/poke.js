const pokemon_box = document.getElementById("pokemon_box")

const bgcolors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE', 
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5', 
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};
const types_con = Object.keys(bgcolors);
const types_colors = Object.values(bgcolors);

// console.log(types_colors);


const pokemonlist = async () => {
	for (let i = 1; i <= 150; i++) {
		await fetch_poke(i);
	}
};

const fetch_poke = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	// console.log(pokemon);
    create_pok_cards(pokemon);
};

pokemonlist()


function create_pok_cards(pokemon) {
    const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('m-3','border','border-3','rounded-3');

    const poke_types = pokemon.types.map(type => type.type.name);
	// console.log(poke_types);
    const type = types_con.find(type => poke_types.indexOf(type)> -1);
	// console.log(type);

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); 
	console.log(name);

	const back_color = bgcolors[type]
	pokemonEl.style.backgroundColor = back_color
    const pokeInnerHtml = `
    <div d-flex justify-content-center>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/${pokemon.id}.png" >
    </div>
    <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `

    pokemonEl.innerHTML = pokeInnerHtml;

	pokemon_box.appendChild(pokemonEl);
}