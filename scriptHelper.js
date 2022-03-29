// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById('missionTarget');
   div.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
   if(testInput === "" || testInput === " "){
       return "Empty";
   } else if(isNaN(testInput)){
       return "Not a Number";
   } else if(!isNaN(testInput)){
       return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   pilotStatus.innerText = `${pilot} ready`;
   copilotStatus.innerText = `${copilot} ready`;

   if(fuelLevel < 10000){
       let faultyItems = document.getElementById('faultyItems');
       faultyItems.style.visibility = visible;
       let fuelStatus = document.getElementById('fuelStatus');
       fuelStatus.innerText = `Not enough fuel for the journey`;
       let launchStatus = document.getElementById('launchStatus');
       launchStatus.innerText = `Shuttle not ready for launch`;
       launchStatus.style.color = 'red';
   }

   if(cargoLevel > 10000){
    let faultyItems = document.getElementById('faultyItems');
    faultyItems.style.visibility = visible;
    let cargoStatus = document.getElementById('cargoStatus');
    cargoStatus.innerText = 'there is too much mass for the shuttle to take off';
    let launchStatus = document.getElementById('launchStatus');
    launchStatus.innerText = `Shuttle not ready for launch`;
    launchStatus.style.color = 'red';
   }

   if(fuelLevel > 10000 && cargoLevel < 10000){
       let launchStatus = document.getElementById('launchStatus');
       launchStatus.style.color = 'green';
       launchStatus.innerText = `Shuttle is ready for launch`;
   }
   document.getElementById('formSubmit').event.preventDefault();
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        console.log(response);
        return response.json(); 
        })
           
    

    return planetsReturned;
}

function pickPlanet(planets) {
    //console.log(planets[Math.floor(Math.random() * 6)])
    let index = Math.floor(Math.random()*planets.length)
    console.log(planets[index]);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
