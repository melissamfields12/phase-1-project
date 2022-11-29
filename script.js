const card = document.querySelector('.card');
const factUrl = 'http://localhost:3000/facts'
const newFactBtn = document.querySelector('#new-fact-btn');
const searchFactsContainer = document.querySelector('#new-fact-request');
const searchFactsForm = document.getElementById("search-facts-form");

card.addEventListener("mouseover", (event) => {
    event.target.style.color = "red";
    setTimeout(() => {
        event.target.style.color = ""}, 1500);
    })

newFactBtn.addEventListener("click", generateNewFact); 

searchFactsContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchedNumber = searchFactsForm.value;
    searchFactsForm.value = "";
    if (searchedNumber >= 1 && searchedNumber <= 50){
       return searchForFact(searchedNumber);
    } else {
       return alert("No fact was located for that number. Please try searching for a number from 1 to 50.")
    }
})

function fetchFacts() {
    fetch(factUrl)
    .then(resp => resp.json())
    .then(factArray =>  {
        const generatedFact = generateRandomFact(factArray);
        createRandomFact(generatedFact);
    })
}
fetchFacts()

function generateRandomFact(factArray) {
    let randomNumber = Math.floor(Math.random() * (factArray.length));
    const randomFact = factArray[randomNumber];
    return randomFact;
}

function createRandomFact(generatedFact){  
    const ul = document.createElement('ul');
    ul.classList.add('list');
    const li1 = document.createElement('li');
    li1.textContent = `Number: ${generatedFact.number}`;
    const li2 = document.createElement('li');
    li2.textContent = `Random fact: ${generatedFact.text}`;
    const li3 = document.createElement('li');
    li3.textContent = `Fact type: ${generatedFact.type}`;
    ul.append(li1, li2, li3);
    card.append(ul);    
}

function generateNewFact() {
    card.innerHTML = "";
    fetchFacts();
}

function searchForFact(searchedNumber) {
    fetch(factUrl)
    .then(resp => resp.json())
    .then(factArray => {
        const searchedFact = factArray.find((fact) => fact.number === parseInt(searchedNumber, 10));
        card.innerHTML = "";
        createFoundFact(searchedFact)
})
}

function createFoundFact(searchedFact) {
    const ul = document.createElement('ul');
    ul.classList.add('list');
    const li1 = document.createElement('li');
    li1.textContent = `Number: ${searchedFact.number}`;
    const li2 = document.createElement('li');
    li2.textContent = `Random fact: ${searchedFact.text}`;
    const li3 = document.createElement('li');
    li3.textContent = `Fact type: ${searchedFact.type}`;
    ul.append(li1, li2, li3);
    card.append(ul); 
}


    
    



