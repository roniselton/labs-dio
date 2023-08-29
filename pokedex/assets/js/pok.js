//Fetch API Enxios JQUERY
const offset = 10
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
//console.log( url );

function convertPokemonToHtml( pokemon ){
    return `<li> 
    ${pokemon.name}
        <img  src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" >
    </li>`;
}

fetch( url )
.then((response)=>response.json())
.then((jsonBody)=>jsonBody.results)
.then((pokemonList)=>{
    
    console.log( pokemonList );
    for(let i in pokemonList){
        const element = pokemonList[i];
        let li = convertPokemonToHtml(element);
        let elem = document.getElementById("OLPokemons");
        elem.innerHTML +=  li ; 
    }
})
.catch((error)=>console.log( error ))
.finally(()=>console.log('finally'))