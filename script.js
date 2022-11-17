const card = document.querySelector('.card');
// let randomFact = Math.floor(Math.random() * (fact.length))
const factUrl = 'http://localhost:3000/facts'
let factArray = []

function fetchFacts() {
    fetch(factUrl)
    .then(resp => resp.json())
    .then(facts => { 
        factArray = Object.values(facts)
        factArray.forEach((fact) => {
            // console.log(factArray)
        createFact(factArray)
        }) 
        // debugger;
        // data.map(fact => showFact(fact));  
        // console.log(fact)
    })
}
fetchFacts()

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
    
    // console.log(factArray)
    // const factID = fact.id;
    // factID(Math.floor(Math.random() * (factID.length)))
})
}