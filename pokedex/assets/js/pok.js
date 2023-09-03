//Fetch API Enxios JQUERY


function convertTiposPokemonHTML(types){
    return types.map((t)=> `<li> Slot ${t.slot} - ${t.type.name} </li>`).join('')
}

function convertPokemonToHtml( pokemon ){
    return `<li> 
    ${pokemon.id} - ${pokemon.name} <br/>
    <ol> ${convertTiposPokemonHTML(pokemon.types)} </ol>
        <img  src="${pokemon.sprites.other.dream_world.front_default}" >
    </li>`;
}

pokeAPI.getPokemons().then((pokemonList)=>{    
    console.log( pokemonList );
    document.getElementById("OLPokemons").innerHTML = pokemonList.map(convertPokemonToHtml).join('')
})
.catch((error)=>console.log( error ))
.finally(()=>console.log('finally looping'))

//pokemons.map