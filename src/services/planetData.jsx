import tatooinePic from "../PlanetsForCard/Tatooine.png";
import nabooPic from "../PlanetsForCard/Naboo.png";
import coruscantPic from "../PlanetsForCard/coruscant.png";
import kashyyykPic from "../PlanetsForCard/kashyyyk.png";
import hothPic from "../PlanetsForCard/hoth.png"
import deathStarPic from "../PlanetsForCard/deathstar.png"
import mustafarPic from "../PlanetsForCard/mustafar.png"
import endorPic from "../PlanetsForCard/endor.png"
import alderaanPic from "../PlanetsForCard/alderaan.png"
import feluciaPic from "../PlanetsForCard/felucia.png"

const planets = {
  Tatooine: {
    long: 5.5153,
    lat: 22.8268,
    picture: tatooinePic,
    size: 6,
    bgsize: 120,
    timezone: 0,
    idApi: 1,
    pictureInfo: "Tatooine",
    faction: "Hutt",
    creature: ["Bantha", "Dewback"],
    text: "Tatooine is harsh desert world orbiting twin suns in the galaxy’s Outer Rim. In the days of the Empire and the Republic, many settlers scratched out a living on moisture farms, while spaceport cities such as Mos Eisley and Mos Espa served as home base for smugglers, criminals, and other rogues. Anakin Skywalker and Luke Skywalker both once called Tatooine home, although across the stars it was more widely known as a hive of scum and villainy ruled by the crime boss Jabba the Hutt.",
  },
  Naboo: {
    long: 0.3401,
    lat: 46.5802,
    picture: nabooPic,
    size: 6,
    bgsize: 150,
    timezone: 0,
    idApi: 8,
    pictureInfo: "Naboo",
    faction: "Empire",
    creature: ["Kaadu", "Opeeseakiller"],
    text: "An idyllic world close to the border of the Outer Rim Territories, Naboo is inhabited by peaceful humans known as the Naboo, and an indigenous species of intelligent amphibians called the Gungans. Naboo's surface consists of swampy lakes, rolling plains and green hills. Its population centers are beautiful -- Naboo's river cities are filled with classical architecture and greenery, while the underwater Gungan settlements are a beautiful display of exotic hydrostatic bubble technology.",
  },
  Coruscant: {
    long: 74.3141,
    lat: 31.5656,
    picture: coruscantPic,
    size: 6,
    bgsize: 130,
    timezone: 5,
    idApi: 9,
    pictureInfo: "Coruscant",
    people: [13, 80],
    faction: "Empire",
    creature: ["Kouhun", "Tooka"],
    text: "Coruscant is the vibrant heart and capital of the galaxy during the age of the Empire, featuring a diverse mix of cultures and citizens spread over hundreds of levels. Once the home of the main Jedi Temple -- the central hub of Jedi training and learning for over a thousand generations and the repository of the Jedi Archives -- these traditions ended when the planet bore witness to Order 66.",
  },
  Kashyyyk: {
    long: -60.0257,
    lat: -3.117,
    picture: kashyyykPic,
    size: 6,
    bgsize: 170,
    timezone: -4,
    idApi: 14,
    pictureInfo: "Kashyyyk",
    people: [],
    faction: "Rebel",
    creature: ["Cancell", "Shyyyo"],
    text: "Kashyyyk is the Wookiee homeworld, covered in dense forest. While Wookiees build their homes in the planet's trees, they are not a primitive species, and Kashyyyk architecture incorporates sophisticated technology. One of the last battles of the Clone Wars was fought here under the leadership of Yoda, with Wookiees and clones battling the Separatist droid army -- until the Emperor issued Order 66, commanding the clones to slaughter all Jedi. Yoda survived, however, with the help of natives Chewbacca and Tarfful, who used a hidden shuttle to evacuate the Jedi Master from the planet.",
  },
  Hoth: {
    long: -18.0,
    lat: -77.0,
    picture: hothPic,
    size: 3,
    bgsize: 140,
    timezone: +9,
    idApi: 4,
    pictureInfo: "Hoth",
    people: [13, 80],
    faction: "Rebel",
    creature: ["Tauntaun", "Wampa"],
    text: "Hoth is the sixth planet in the remote system of the same name, and was the site of the Rebel Alliance's Echo Base. It is a world of snow and ice, surrounded by numerous moons, and home to deadly creatures like the wampa.",
  },
  DeathStar: {
    long: 22.5384,
    lat: 5.6979,
    picture: deathStarPic,
    size: 4,
    bgsize: 155,
    timezone: false,
    idApi: 28,
    pictureInfo: "HothInfo",
    people: [13, 80],
    faction: "Empire",
    creature: ["C1, C2, C3"],
  },
  Mustafar: {
    long: 22.5384,
    lat: 5.6979,
    picture: deathStarPic,
    size: 4,
    bgsize: 155,
    timezone: false,
    idApi: 28,
    pictureInfo: "HothInfo",
    people: [13, 80],
    faction: "Empire",
    creature: ["C1, C2, C3"],
  },
  Endor: {
    long: 22.5384,
    lat: 5.6979,
    picture: deathStarPic,
    size: 4,
    bgsize: 155,
    timezone: false,
    idApi: 28,
    pictureInfo: "HothInfo",
    people: [13, 80],
    faction: "Empire",
    creature: ["C1, C2, C3"],
  },
  Felucia: {
    long: 22.5384,
    lat: 5.6979,
    picture: deathStarPic,
    size: 4,
    bgsize: 155,
    timezone: false,
    idApi: 28,
    pictureInfo: "HothInfo",
    people: [13, 80],
    faction: "Empire",
    creature: ["C1, C2, C3"],
  },
  Alderaan: {
    long: 22.5384,
    lat: 5.6979,
    picture: deathStarPic,
    size: 4,
    bgsize: 155,
    timezone: false,
    idApi: 28,
    pictureInfo: "HothInfo",
    people: [13, 80],
    faction: "Empire",
    creature: ["C1, C2, C3"],
  },
};

export default planets;
