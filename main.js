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
var locationVar = animeCards;

let cardHeader = document.createElement("h1");
cardHeader.className = "h1class";
cardHeader.id = "card-title";
cardHeader.textContent = "Anime Trading Cards";
animeCards.appendChild(cardHeader)

const cardFunction = (element => {
    let cardWrap = document.createElement("div");
    cardWrap.className = "cardWrap";
    locationVar.appendChild(cardWrap);

    let cardWrapInt = document.createElement("div");
    cardWrapInt.className = "cardWrapInt";
    cardWrap.appendChild(cardWrapInt);

    let cardFront = document.createElement("div");
    cardFront.className = "cardFront";
    cardWrapInt.appendChild(cardFront);

    let imgsrc = document.createElement("img");
    imgsrc.src = element.image_url;
    cardFront.appendChild(imgsrc);

    let cardBack = document.createElement("div");
    cardBack.className = "cardBack";
    cardWrap.appendChild(cardBack);

    let cardTitle = document.createElement("h8");
    cardTitle.textContent = element.title;
    cardBack.appendChild(cardTitle);

    let cardBreak = document.createElement("hr");
    cardBack.appendChild(cardBreak);

    let showScore = document.createElement("p");
    showScore.textContent = "Community Score: " + element.score;
    cardBack.appendChild(showScore);
    
    let epCount = document.createElement("p");
    epCount.textContent = "Episodes: " + element.episodes;
    cardBack.appendChild(epCount);

    let trailerTitle = document.createElement("p");
    trailerTitle.textContent = "Trailer:"
    cardBack.appendChild(trailerTitle);

    if(element.trailer_url !== null) {
        let trailer = document.createElement("iframe");
        trailer.src = element.trailer_url;
        cardBack.appendChild(trailer);
    } else {
        let noTrailer = document.createElement("p");
        noTrailer.textContent = "The trailer for this title is unavailable.";
        cardBack.appendChild(noTrailer);
    }

    let studio = document.createElement("p");
    studio.textContent = "Studio: " + element.studios[0].name;
    cardBack.appendChild(studio);

    let relYear = document.createElement("p");
    relYear.textContent = "Year: " + element.aired.prop.from.year;
    cardBack.appendChild(relYear);

    let showSource = document.createElement("p");
    showSource.textContent = "Source: " + element.source;
    cardBack.appendChild(showSource);

    let showGenres = document.createElement("p");
    showGenres.textContent = "Genres: " + element.genres[0].name + ", " + element.genres[1].name;
    cardBack.appendChild(showGenres); 


    cardWrapInt.addEventListener('click', function() {
    cardWrapInt.classList.toggle('is-flipped');
    });
}); 

anime.forEach(cardFunction);

let newCardDiv = document.createElement("div");
newCardDiv.id = "new-card-sec";
animeCards.appendChild(newCardDiv);

locationVar = newCardDiv;


let bonusCard = {
    mal_id: 31964,
    image_url: "https://myanimelist.cdn-dena.com/images/anime/10/78745.jpg",
    trailer_url: "https://www.youtube.com/embed/D5fYOnwYkj4?enablejsapi=1&wmode=opaque&autoplay=1",
    title: "Boku no Hero Academia",
    source: "Manga",
    episodes: 13,
    aired: {
        prop: {
            from: {
                year: 2016
            },
        },
    },
    score: 8.43,
    studios: [
        {
        name: "Bones",
    }],
    genres: [
        {
        name: "Action",
        },
        {
        name: "Comedy",
    }],
};



let animeButton = document.createElement("button");
animeButton.textContent = "Press for New Card";
animeCards.appendChild(animeButton);

animeButton.addEventListener("click", () => {
    cardFunction(bonusCard)
})



// swap trailer out for synopsis when null on final version. 
// Synopsis can be pulled out in a box and toggled.

// there are 39 vehicles in the vehiclesArray
// add radio buttons so that the user can do a random film, 
// character, planet, species, starship, or vehicle from Star Wars


