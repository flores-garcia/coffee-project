"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

document.getElementById("coffees").style.display = "none";

// Displays Coffee
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<div class="coffeeNames">' + coffee.name + '</h2>';
    html += '<div class="roast">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

// Adds new cofee
function addNewBrew(e) {
    e.preventDefault();
    var newBrew = {};
    newBrew.name = newCoffee.value;
    newBrew.roast = newRoast.value;
    newBrew.id = coffees.length + 1;
    coffees.push(newBrew);
    tbody.innerHTML = renderCoffees(coffees);
    return tbody.innerHTML = renderCoffee(coffee);
}





// Ascending order
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// Submit button Auto
function updateCoffeesAuto(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = nameSelection.value;
    var selectedType = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.name.toLowerCase()).includes(selectedRoast.toLowerCase()) && coffee.roast === selectedType) {
            filteredCoffees.push(coffee);
        } else if (selectedType === 'all') {
            filteredCoffees.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
    document.getElementById("coffees").style.display = "block";
}


// Variables and events
var newCoffee = document.querySelector('#newName')
var newRoast = document.querySelector('#newRoast')
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submitBrew');
var nameSelection = document.querySelector('#name-selection');
var roastSelection = document.querySelector('#roast-selection');

// Do not delete
tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffeesAuto);
nameSelection.addEventListener('keyup', updateCoffeesAuto);
submitButton.addEventListener("click", updateCoffeesAuto);

tbody.innerHTML = renderCoffees(coffees);














