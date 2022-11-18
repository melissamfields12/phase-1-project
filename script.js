const card = document.querySelector('.card');
// let randomFact = Math.floor(Math.random() * (fact.length))
const factUrl = 'http://localhost:3000/facts'
let factArray = []
// Fetch JSON data
function fetchFacts() {
    fetch(factUrl)
    .then(resp => resp.json())
    .then(facts => { //console.log(facts)
        factArray = Object.values(facts)
        // factArray.forEach((fact) => {
            // console.log(factArray)
        createFact(factArray)
        }) 
        // debugger;  

}
fetchFacts()
// Create elements to store fact information and append to the DOM
// Single out one random fact
function createFact(factArray) {
    factArray.map((facts) => {
    let randomFact = Math.floor(Math.random() * (factArray.length))
    const ul = document.createElement('ul')
    ul.classList.add('list')
    const li1 = document.createElement('li');
    li1.textContent = `Number: ${facts.number}`;
    const li2 = document.createElement('li');
    li2.textContent = `Random fact: ${facts.text}`;
    const li3 = document.createElement('li');
    li3.textContent = `Fact type: ${facts.type}`;
    ul.append(li1, li2, li3)
    card.append(ul);
    
    // const factID = fact.id;
    // factID(Math.floor(Math.random() * (factID.length)))
})
}