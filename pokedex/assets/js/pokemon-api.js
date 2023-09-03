const pokeAPI = {}

pokeAPI.getPokemons = (offset = 0 , limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    //console.log( url );
    return fetch( url )
        .then((response)=>response.json())
        .then((jsonBody)=>jsonBody.results)
        .catch((error)=>console.log( error ))
}

//chamando varias requisicoes 
Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1/'),
    fetch('https://pokeapi.co/api/v2/pokemon/2/'),
    fetch('https://pokeapi.co/api/v2/pokemon/3/'),
    fetch('https://pokeapi.co/api/v2/pokemon/4/')
]).then( (results) =>{
    console.log(results)
} )