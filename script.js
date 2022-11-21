const card = document.querySelector('.card');
const factUrl = 'http://localhost:3000/facts'
const newFactBtn = document.querySelector('#new-fact-btn')
const searchFactsContainer = document.querySelector('#new-fact-request')
const searchFactsForm = document.getElementById("search-facts-form")
const searchedNumber = searchFactsForm.value;
// console.log(searchFactsForm)
let factArray = []

// Create a mouseover event listener when hovering over the daily fact
// to create a bolder border

// Click event that generates a new random fact
newFactBtn.addEventListener("click", generateNewFact); 

// Submit event listener to prevent from refreshing the page when submitting
// the search for a particular number fact and clears the text from the
// search bar
searchFactsContainer.addEventListener("submit", (event) => {
    event.preventDefault()
    // console.log(event)
    searchFactsForm.value = "";
    searchForFact(searchedNumber)
})

// Fetching JSON data
function fetchFacts() {
    fetch(factUrl)
    .then(resp => resp.json())
    .then(factArray =>  {
    const generatedFact = generateRandomFact(factArray)
    createRandomFact(generatedFact)
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
function generateNewFact() {
    card.innerHTML = "";
    fetchFacts()
}
// Create a function that will allow users to type in a number to view the
// fact associated. 
function searchForFact(searchedNumber) {
    card.innerHTML = "";
    fetch(factUrl)
    .then(resp => resp.json())
    .then(factArray => {
        const searchedFact = factArray[searchedNumber]
    return factArray.find(searchedFact => searchedFact.number === searchedNumber)
    })
    
    // createFact
}


