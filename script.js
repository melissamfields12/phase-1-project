const card = document.querySelector('.card');
// let randomFact = Math.floor(Math.random() * (fact.length))
let factArray = []

function fetchFacts() {
    fetch('http://localhost:3000/facts')
    .then(resp => resp.json())
    .then(data => {
        factArray = data.map(fact => showFact(fact));  
        console.log(fact)
    })
fetchFacts()

function showFact(fact) {
    const ul = document.createElement('ul')
    ul.classList.add('list')
    const li1 = document.createElement('li');
    li1.textContent = `Number: ${fact.number}`;
    const li2 = document.createElement('li');
    li2.textContent = `Random fact: ${fact.text}`;
    const li3 = document.createElement('li');
    li3.textContent = `Fact type: ${fact.type}`;
    ul.append(li1, li2, li3)
    card.append(ul);
    console.log(fact)
    const factID = fact.id;
    factID(Math.floor(Math.random() * (factID.length)))
}