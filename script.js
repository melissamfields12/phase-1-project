const card = document.querySelector('.card');

function fetchFacts() {
    fetch('http://localhost:3000/facts')
    .then(resp => resp.json())
    .then(data => data.forEach(fact => 
        // console.log(fact)
        showFact(fact)))
}
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
    return fact
}
function showOneFact() {

}