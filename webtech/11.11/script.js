let response = await fetch("https://rickandmortyapi.com/api");
let data = await response.json;
console.log(JSON.stringify(data));
