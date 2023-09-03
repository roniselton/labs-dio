//Fetch API Enxios JQUERY


function convertPokemonToHtml( pokemon ){
    return `<li> 
    ${pokemon.name}
        <img  src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" >
    </li>`;
}

pokeAPI.getPokemons().then((pokemonList)=>{    
    console.log( pokemonList );

    const newList = pokemonList.map((value)=>{
        return convertPokemonToHtml( value )
    })

    console.log( newList );

    let elem = document.getElementById("OLPokemons");

    const newHtmlOL = newList.join('')
    elem.innerHTML =  newHtmlOL ;
    
    // const listaItens = []
    // for(let i in pokemonList){
    //     const element = pokemonList[i];
    //     let li = convertPokemonToHtml(element);
    //     listaItens.push( li ) 
    // }

    //
    // elem.innerHTML +=  li ; 
})
.catch((error)=>console.log( error ))
.finally(()=>console.log('finally looping'))

//pokemons.map