const generations = [
{
    name: "737-200 (Original)",
    firstFlight: "1967",
    entryIntoService: "1968",
    length: "30.53 m",
    wingspan: "28.35 m",
    height: "11.23 m",
    capacity: "97–130 passengers",
    range: "4,000 km",
    cruiseSpeed: "943 km/h",
    maxSpeed: "952 km/h",
    serviceCeiling: "35,000 ft",
    engines: "2 × Pratt & Whitney JT8D",
    maxTakeoffWeight: "52,390 kg",
    numberBuilt: "1,114",
    image: "Images/Specs/Canadian_North_Boeing_737-200_Davies.jpg" //Credit: John Davis https://commons.wikimedia.org/wiki/File:Canadian_North_Boeing_737-200_Davies.jpg
},

{
    name: "737-300 (Classic)",
    firstFlight: "1984",
    entryIntoService: "1984",
    length: "33.40 m",
    wingspan: "28.88 m",
    height: "11.13 m",
    capacity: "126–149 passengers",
    range: "4,200 km",
    cruiseSpeed: "795 km/h",
    maxSpeed: "876 km/h",
    serviceCeiling: "37,000 ft",
    engines: "2 × CFM56-3",
    maxTakeoffWeight: "63,300 kg",
    numberBuilt: "1,113",
    image: "Images/Specs/B733.jpg"
},

{
    name: "737-800 (Next Generation)",
    firstFlight: "1997",
    entryIntoService: "1998",
    length: "39.47 m",
    wingspan: "35.79 m",
    height: "12.55 m",
    capacity: "162–189 passengers",
    range: "5,765 km",
    cruiseSpeed: "842 km/h",
    maxSpeed: "876 km/h",
    serviceCeiling: "41,000 ft",
    engines: "2 × CFM56-7B",
    maxTakeoffWeight: "79,000 kg",
    numberBuilt: "5,000+",
    image: "Images/Specs/SWA B738 takeoff.jpg"
},

{
    name: "737 MAX 8",
    firstFlight: "2016",
    entryIntoService: "2017",
    length: "39.52 m",
    wingspan: "35.92 m",
    height: "12.30 m",
    capacity: "162–210 passengers",
    range: "6,570 km",
    cruiseSpeed: "839 km/h",
    maxSpeed: "876 km/h",
    serviceCeiling: "41,000 ft",
    engines: "2 × CFM LEAP-1B",
    maxTakeoffWeight: "82,190 kg",
    numberBuilt: "1,500+",
    image: "Images/Shared/NSZ B38M.jpg"
}
];

let currentGeneration = 0;

function updateSpecs() {

    document.getElementById("image").src =
    generations[currentGeneration].image;

    document.getElementById("generationName").textContent =
    generations[currentGeneration].name;

    document.getElementById("firstFlight").textContent =
    generations[currentGeneration].firstFlight;

    document.getElementById("entryIntoService").textContent =
    generations[currentGeneration].entryIntoService;

    document.getElementById("length").textContent =
    generations[currentGeneration].length;

    document.getElementById("wingspan").textContent =
    generations[currentGeneration].wingspan;

    document.getElementById("height").textContent =
    generations[currentGeneration].height;

    document.getElementById("capacity").textContent =
    generations[currentGeneration].capacity;

    document.getElementById("range").textContent =
    generations[currentGeneration].range;

    document.getElementById("cruiseSpeed").textContent =
    generations[currentGeneration].cruiseSpeed;

    document.getElementById("maxSpeed").textContent =
    generations[currentGeneration].maxSpeed;

    document.getElementById("serviceCeiling").textContent =
    generations[currentGeneration].serviceCeiling;

    document.getElementById("engines").textContent =
    generations[currentGeneration].engines;

    document.getElementById("maxTakeoffWeight").textContent =
    generations[currentGeneration].maxTakeoffWeight;

    document.getElementById("numberBuilt").textContent =
    generations[currentGeneration].numberBuilt;
}

document.getElementById("nextBtn").addEventListener("click", () => {

    currentGeneration++;

    if (currentGeneration >= generations.length) {
        currentGeneration = 0;
    }

    updateSpecs();
});

document.getElementById("prevBtn").addEventListener("click", () => {

    currentGeneration--;

    if (currentGeneration < 0) {
        currentGeneration = generations.length - 1;
    }

    updateSpecs();
});

updateSpecs();