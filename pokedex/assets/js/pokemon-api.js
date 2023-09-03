const pokeAPI = {
}

var offset = 0;
var limit = 10;
var maxRegistros = 51;

function convertPokemontToJson(pokJson){
    console.log(pokJson);
    const p = new Pokemon();
    p.number = pokJson.id;
    p.name = pokJson.name;
    p.photo = pokJson.sprites.other.dream_world.front_default;
    p.types = pokJson.types
    p.type = p.types[0].type.name;
    return p;
}

pokeAPI.getPokemonDetail = (item) => {
    return fetch(item.url)
        .then((response)=>response.json())
        .then(convertPokemontToJson)
}

pokeAPI.getPokemons = (offset = 0 , limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    //console.log( url );
    return fetch( url )
        .then((response)=>response.json())
        .then((jsonBody)=>jsonBody.results)
        .then((results)=>results.map(pokeAPI.getPokemonDetail))
        .then((listaRequest)=>Promise.all(listaRequest))
        .then((pokemonDetailListaJson)=>pokemonDetailListaJson)

        .catch((error)=>console.log( error ))
}

//chamando varias requisicoes 
Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1/'),
    fetch('https://pokeapi.co/api/v2/pokemon/2/'),
    fetch('https://pokeapi.co/api/v2/pokemon/3/'),
    fetch('https://pokeapi.co/api/v2/pokemon/4/')
]).then( (results) => results.map((response)=>response.json) )