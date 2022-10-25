//Code for the hint button to display text once clicked
let clickHint = document.querySelector(".hintButton")
clickHint.addEventListener("click", () => {
    let headingThree = document.querySelector("h3");
    headingThree.innerHTML = "Only these pokemon can be searched for: Rattata, Ekans, Arbok, Nidoran, Nidorino, Nidoking, Zubat, Golbat, Venonat, Venomoth, Grimer, Muk, Shellder, Cloyster, Gastly, Haunter, Gengar, Koffing, Weezing, Starmine, Ditto, Aerodactyl, Mewtwo, Crobat, Aipom, Espeon, Forretress, Gilgar, Granbull, Mantine, Tyrogue, Cascoon, Delcatty, Sableye, Swalot, Delcatty, Illumise, Swalot, Grumpig, Lileep, Shellos, Gastrodon, Ambipom, Driftloon, Driftblim, Mismagius, Stunky, Skunktank, Spiritomb, Skorupi, Drapion, Palkia, Hoopa, Gliscor, Purrloin, Liepard, Gothita, Gothorita, Gothitelle, Mienshao, Genesect, Goomy, Sliggo, Goodra, Noibat, Noivern'"
})
//End of hint button

//Creating a card for the pokemon
const card = [
    {
        "Name": "",
        "Id": "",
        "Image": "",
    }
]


const main = document.querySelector('main')
// card.forEach((pokemon) => createPokemonCard(pokemon))

const userInput = document.getElementById('searchBar')
const clickSearch = document.querySelector("#searchButton")


async function getPokemon(e) {
    console.log(e)
    let input = userInput.value.toLowerCase()
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    const data = await response.json()
    if (response.status === 404){
        alert(`${input} Isnt a real pokemon!`);
        return true
    }
    // const p = document.createElement("p");
    // p.innerHTML = data.name;
    // main.appendChild(p);
    createPokemonCard(data)
}

//Calls the actual function
clickSearch.addEventListener("click", (e) => {
    getPokemon(e);
})

function createPokemonCard(data){
    const pokemonName = document.createElement('h2')
    pokemonName.textContent = ('Name: ' + data.name)

    const pokemonId = document.createElement('h2')
    pokemonId.textContent = ('Pokemon Id: ' + data.id)
    console.log(data)

    const pokemonImage = document.createElement('img')
    pokemonImage.setAttribute('src', data.sprites.front_default)

    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemonCard")
    pokemonCard.appendChild(pokemonName)
    pokemonCard.appendChild(pokemonId)
    pokemonCard.appendChild(pokemonImage)

    main.append(pokemonCard)
}