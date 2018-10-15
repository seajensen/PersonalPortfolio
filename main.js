let pokeName = document.querySelector("#pokeName")
let abilities = document.querySelector("#abilities")

fetch("https://pokeapi.co/api/v2/pokemon/92/")
 .then(function(response) {
     return response.json();
 })
 .then(function(myJson) {
     pokeName.textContent = myJson.name;
     abilities.textContent = myJson.abilities.ability;
     console.log(myJson);
 });