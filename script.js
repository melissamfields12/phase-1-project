const card = document.querySelector('.card');
const factUrl = 'http://localhost:3000/facts'
const newFactBtn = document.querySelector('#new-fact-btn');
const searchFactsContainer = document.querySelector('#new-fact-request');
const searchFactsForm = document.getElementById("search-facts-form");

// console.log(searchFactsForm)
// let factArray = [];

// Create a mouseover event listener when hovering over the daily fact
// to create a bolder border

// Click event that generates a new random fact
newFactBtn.addEventListener("click", generateNewFact); 

// Submit event listener to prevent from refreshing the page when submitting
// the search for a particular number fact and clears the text from the
// search bar
searchFactsContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchedNumber = searchFactsForm.value;
    // console.log(event)
    // debugger;
    // console.log(searchedNumber);
    // Attempted to do an alert on the numbers outside of the range 1-50
    // if (searchedNumber >= 1 && searchedNumber <= 50) {
    //     return document.querySelector('#submit-search').addEventListener("submit", (event) => 
    //     alert("No facts were located for that number. Please try again."))
    // }
    searchFactsForm.value = "";
    searchForFact(searchedNumber);
})

// Fetching JSON data
function fetchFacts() {
    fetch(factUrl)
    .then(resp => resp.json())
    .then(factArray =>  {
    const generatedFact = generateRandomFact(factArray);
    createRandomFact(generatedFact);
    })
}
fetchFacts()
// This function pulls out one random fact to appear
function generateRandomFact(factArray) {
    let randomNumber = Math.floor(Math.random() * (factArray.length));
    const randomFact = factArray[randomNumber];
    return randomFact;
}
// This function creates the fact and appends it to the DOM
function createRandomFact(generatedFact){  
    const ul = document.createElement('ul')
    ul.classList.add('list')
    const li1 = document.createElement('li');
    li1.textContent = `Number: ${generatedFact.number}`;
    const li2 = document.createElement('li');
    li2.textContent = `Random fact: ${generatedFact.text}`;
    const li3 = document.createElement('li');
    li3.textContent = `Fact type: ${generatedFact.type}`;
    ul.append(li1, li2, li3)
    card.append(ul);    
}
// This function generates a new fact when the click event listener's clicked
// and appends it to the DOM
function generateNewFact() {
    card.innerHTML = "";
    fetchFacts();
}
// This function allows users to type in a number to view the associated fact
function searchForFact(searchedNumber) {
    fetch(factUrl)
    .then(resp => resp.json())
    .then(factArray => {
    const searchedFact = factArray.find((fact) => fact.number== searchedNumber);
        // debugger;
        card.innerHTML = ""
        createFoundFact(searchedFact)
})
}
// This function creates the searched fact and appends it to the DOM
function createFoundFact(searchedFact) {
    const ul = document.createElement('ul')
    ul.classList.add('list')
    const li1 = document.createElement('li');
    li1.textContent = `Number: ${searchedFact.number}`;
    const li2 = document.createElement('li');
    li2.textContent = `Random fact: ${searchedFact.text}`;
    const li3 = document.createElement('li');
    li3.textContent = `Fact type: ${searchedFact.type}`;
    ul.append(li1, li2, li3)
    card.append(ul); 
}


    
    



