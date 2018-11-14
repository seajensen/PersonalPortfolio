let pokeName = document.querySelector("#pokeName")
let pokeHeight = document.querySelector("#pokeHeight")
let pokeWeight = document.querySelector("#pokeWeight")


fetch("https://pokeapi.co/api/v2/pokemon/92/")
 .then(function(response) {
     return response.json();
 })
 .then(function(myJson) {
     pokeName.textContent = myJson.name;
     pokeHeight.textContent = "Height: " + myJson.height;
     pokeWeight.textContent = "Weight: " + myJson.weight;
     console.log(myJson);
 });

 let cardList = document.querySelector("#cardList")
import {films} from "/assets/films.js"
films.forEach(film => {
    let listItem = document.createElement("li");
    listItem.textContent = film.title;
    cardList.appendChild(listItem);
});

import {vehicles} from "/assets/vehicles.js"
const vehiclesArray = vehicles.map(vehicles => vehicles.name);
let randVeh = document.getElementById("randomVeh");

const ranButton = document.getElementById("randomButton")

ranButton.onclick = function() {
    const x = Math.floor(Math.random() * (39));
    randVeh.textContent = vehiclesArray[x];
}

import {anime} from "/assets/anime.js"

let animeCards = document.querySelector("#card-div")
anime.forEach(anime => {
    let currentID = anime.mal_id;

    let cardWrap = document.createElement("div");
    cardWrap.className = "cardWrap";
    cardWrap.id = currentID;
    animeCards.appendChild(cardWrap);

    let outerWrap = document.getElementById(currentID)

    let currentID2 = anime.mal_id + "x";
    
    let cardWrapInt = document.createElement("div");
    cardWrapInt.className = "cardWrapInt";
    cardWrapInt.id = currentID2;
    outerWrap.appendChild(cardWrapInt);

    let innerWrap = document.getElementById(currentID2)

    let currentID3 = anime.mal_id + "y";

    let cardFront = document.createElement("div");
    cardFront.className = "cardFront";
    cardFront.id = currentID3;
    innerWrap.appendChild(cardFront);

    let frontside = document.getElementById(currentID3)

    let imgsrc = document.createElement("img");
    imgsrc.src = anime.image_url;
    frontside.appendChild(imgsrc);

    let currentID4 = anime.mal_id + "z";

    let cardBack = document.createElement("div");
    cardBack.className = "cardBack";
    cardBack.id = currentID4;
    innerWrap.appendChild(cardBack);

    let backside = document.getElementById(currentID4)


    let cardTitle = document.createElement("h8");
    cardTitle.textContent = anime.title;
    backside.appendChild(cardTitle);

    let cardBreak = document.createElement("hr");
    backside.appendChild(cardBreak);

    let showScore = document.createElement("p");
    showScore.textContent = "Community Score: " + anime.score;
    backside.appendChild(showScore);
    
    let epCount = document.createElement("p");
    epCount.textContent = "Episodes: " + anime.episodes;
    backside.appendChild(epCount);

    let trailerTitle = document.createElement("p");
    trailerTitle.textContent = "Trailer:"
    backside.appendChild(trailerTitle);

    let trailer = document.createElement("iframe");
    trailer.src = anime.trailer_url;
    backside.appendChild(trailer);

    let studio = document.createElement("p");
    studio.textContent = "Studio: " + anime.studios[0].name;
    backside.appendChild(studio);

    let relYear = document.createElement("p");
    relYear.textContent = "Year: " + anime.aired.prop.from.year;
    backside.appendChild(relYear);

    let showSource = document.createElement("p");
    showSource.textContent = "Source: " + anime.source;
    backside.appendChild(showSource);


    let cardFlip = document.getElementById(currentID2);
    cardFlip.addEventListener('click', function() {
    cardFlip.classList.toggle('is-flipped');});
});




// there are 39 vehicles in the vehiclesArray
// add radio buttons so that the user can do a random film, 
// character, planet, species, starship, or vehicle from Star Wars


