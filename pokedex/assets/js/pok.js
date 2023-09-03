//Fetch API Enxios JQUERY
const buttonNext = document.getElementById("next");
const buttonPrevious = document.getElementById("previous");
 

function convertTiposPokemonHTML(types){
    return types.map((t)=> `<li> Slot ${t.slot} - ${t.type.name} </li>`).join('')
}

function convertPokemonToHtml( pokemon ){
    return `<li class='${pokemon.type}' > 
    <span style='text-transform: capitalize;' >${pokemon.number} - ${pokemon.name} </span> <br/>
    <ol> ${convertTiposPokemonHTML(pokemon.types)} </ol>
        <img  src="${pokemon.photo}" >
    </li>`;
}

function loadPokemonsItens( offset , limit ){
    pokeAPI.getPokemons(offset , limit).then((pokemonList)=>{    
        console.log( pokemonList );
        document.getElementById("OLPokemons").innerHTML += pokemonList.map(convertPokemonToHtml).join('')
    })
    .catch((error)=>console.log( error ))
    .finally(()=>console.log('finally looping'))    
}
//pokemons.map
loadPokemonsItens(offset , limit);



buttonPrevious.addEventListener('click', ()=>{
    
    offset += limit;
    if(offset + limit >= maxRegistros){
        let  newlimit = maxRegistros - ( offset )        
        loadPokemonsItens(offset , newlimit);  
        buttonPrevious.parentElement.removeChild( buttonPrevious );
        return;
    }

    loadPokemonsItens(offset , limit);  
    
})

buttonNext.addEventListener('click', ()=>{
    pokeAPI.getPokemons(10,10).then((pokemonList)=>{    
        console.log( pokemonList );
        document.getElementById("OLPokemons").innerHTML = pokemonList.map(convertPokemonToHtml).join('')
    })
    .catch((error)=>console.log( error ))
})