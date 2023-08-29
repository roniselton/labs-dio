//Fetch API Enxios JQUERY
const offset = 10
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
console.log( url );

fetch( url )
.then( (response)=>response.json())
.then( (jsonBody)=>{
    debugger
    console.log( jsonBody )
})
.catch((error)=>console.log( error ))
.finally(()=>console.log('finally'))
