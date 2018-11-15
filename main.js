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

anime.forEach(element => {
    let currentID = element.mal_id;

    let cardWrap = document.createElement("div");
    cardWrap.className = "cardWrap";
    cardWrap.id = currentID;
    animeCards.appendChild(cardWrap);

    let outerWrap = document.getElementById(currentID)

    let currentID2 = element.mal_id + "x";
    
    let cardWrapInt = document.createElement("div");
    cardWrapInt.className = "cardWrapInt";
    cardWrapInt.id = currentID2;
    outerWrap.appendChild(cardWrapInt);

    let innerWrap = document.getElementById(currentID2)

    let currentID3 = element.mal_id + "y";

    let cardFront = document.createElement("div");
    cardFront.className = "cardFront";
    cardFront.id = currentID3;
    innerWrap.appendChild(cardFront);

    let frontside = document.getElementById(currentID3)

    let imgsrc = document.createElement("img");
    imgsrc.src = element.image_url;
    frontside.appendChild(imgsrc);

    let currentID4 = element.mal_id + "z";

    let cardBack = document.createElement("div");
    cardBack.className = "cardBack";
    cardBack.id = currentID4;
    innerWrap.appendChild(cardBack);

    let backside = document.getElementById(currentID4)


    let cardTitle = document.createElement("h8");
    cardTitle.textContent = element.title;
    backside.appendChild(cardTitle);

    let cardBreak = document.createElement("hr");
    backside.appendChild(cardBreak);

    let showScore = document.createElement("p");
    showScore.textContent = "Community Score: " + element.score;
    backside.appendChild(showScore);
    
    let epCount = document.createElement("p");
    epCount.textContent = "Episodes: " + element.episodes;
    backside.appendChild(epCount);

    if(element.trailer_url !== null) {
        let trailerTitle = document.createElement("p");
        trailerTitle.textContent = "Trailer:"
        backside.appendChild(trailerTitle);

        let trailer = document.createElement("iframe");
        trailer.src = element.trailer_url;
        backside.appendChild(trailer);
    } else {
        let noTrailer = document.createElement("p");
        noTrailer.textContent = "Synopsis:";
        backside.appendChild(noTrailer);

        let subSynopsis = document.createElement("p");
        subSynopsis.textContent = element.synopsis;
        backside.appendChild(subSynopsis);
    }

    let studio = document.createElement("p");
    studio.textContent = "Studio: " + element.studios[0].name;
    backside.appendChild(studio);

    let relYear = document.createElement("p");
    relYear.textContent = "Year: " + element.aired.prop.from.year;
    backside.appendChild(relYear);

    let showSource = document.createElement("p");
    showSource.textContent = "Source: " + element.source;
    backside.appendChild(showSource);

    let showGenres = document.createElement("p");
    showGenres.textContent = "Genres: " + element.genres[0].name + ", " + element.genres[1].name;
    backside.appendChild(showGenres); 


    let cardFlip = document.getElementById(currentID2);
    cardFlip.addEventListener('click', function() {
    cardFlip.classList.toggle('is-flipped');
    });
}); 

let newCardDiv = document.createElement("div");
newCardDiv.id = "new-card-sec";
animeCards.appendChild(newCardDiv);

let animeButton = document.createElement("button");
animeButton.textContent = "Press for New Card";
animeCards.appendChild(animeButton);

animeButton.addEventListener("click", () => {
    let testingtext = document.createElement("p");
    testingtext.textContent = "yo, wassup";
    newCardDiv.appendChild(testingtext);

    let cardWrap = document.createElement("div");
    cardWrap.className = "cardWrap";
    cardWrap.id = currentID;
    animeCards.appendChild(cardWrap);
})




// there are 39 vehicles in the vehiclesArray
// add radio buttons so that the user can do a random film, 
// character, planet, species, starship, or vehicle from Star Wars


