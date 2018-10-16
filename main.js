let pokeName = document.querySelector("#pokeName")
let pokeHeight = document.querySelector("#pokeHeight")


fetch("https://pokeapi.co/api/v2/pokemon/92/")
 .then(function(response) {
     return response.json();
 })
 .then(function(myJson) {
     pokeName.textContent = myJson.name;
     pokeHeight.textContent = "Height: " + myJson.height;
     console.log(myJson);
 });

 let cardList = document.querySelector("#cardList")
 import { films } from '.assets/films.js'
