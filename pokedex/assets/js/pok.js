//Fetch API Enxios JQUERY
const offset = 10
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
console.log( url );
fetch( url ).then(function(response){    
    return response.json()
})
.then( function( jsonBody ){
    console.log( responseBody )
})
.catch( function(error){
    console.log('error');
    console.log( error );
}).finally(function(){
    console.log('finally')
})
