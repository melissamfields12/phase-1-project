const card = document.querySelector('.card');
const factUrl = 'http://localhost:3000/facts'
let factArray = []

// Create a mouseover event listener when hovering over the daily fact
// to create a bolder border

// Create click event to generate a new random fact

// Create submit event listener to prevent refreshing the page when typing
// in a number they want to view a fact about

// Fetch JSON data
function fetchFacts() {
    fetch(factUrl)
    .then(resp => resp.json())
    .then(factArray =>  {
    const generatedFact = generateRandomFact(factArray)
    createFact(generatedFact)
    })
}
fetchFacts()

// Single out one random fact to appear and add delete
function generateRandomFact(factArray) {
    let randomNumber = Math.floor(Math.random() * (factArray.length));
    const randomFact = factArray[randomNumber];
    return randomFact;
}
// Create elements to store fact information and append to the DOM
function createFact(generatedFact){  
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
    


// Create a function that will allow users to type in a number to view the
// fact associated. 