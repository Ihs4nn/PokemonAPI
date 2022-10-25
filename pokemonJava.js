//Code for the hint button to display text once clicked
let clickHint = document.querySelector(".hintButton")
clickHint.addEventListener("click", () => {
    let headingThree = document.querySelector("h3");
    headingThree.innerHTML = "Only these pokemon can be searched for: Rattata, Ekans, Arbok, Nidoran, Nidorino, Nidoking, Zubat, Golbat, Venonat, Venomoth, Grimer, Muk, Shellder, Cloyster, Gastly, Haunter, Gengar, Koffing, Weezing, Starmine, Ditto, Aerodactyl, Mewtwo, Crobat, Aipom, Espeon, Forretress, Gilgar, Granbull, Mantine, Tyrogue, Cascoon, Delcatty, Sableye, Swalot, Delcatty, Illumise, Swalot, Grumpig, Lileep, Shellos, Gastrodon, Ambipom, Driftloon, Driftblim, Mismagius, Stunky, Skunktank, Spiritomb, Skorupi, Drapion, Palkia, Hoopa, Gliscor, Purrloin, Liepard, Gothita, Gothorita, Gothitelle, Mienshao, Genesect, Goomy, Sliggo, Goodra, Noibat, Noivern'"
})
//End of hint button


const main = document.querySelector('main')
const userInput = document.getElementById('searchBar')
const pokemonSection = document.getElementById('pokemonContainer')

async function getPokemon() {
    let pokemon = userInput.value.toLowerCase().trim()
    const response = await fetch(`https://pokeapi.co/api/v3/pokemon/${pokemon}`)
    if (response.status === 404){
        pokemonSection.innerHTML = "Invalid"
    }
    const data = await response.json
}