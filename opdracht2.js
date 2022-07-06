//#### Opdracht 2 - Elementen in de DOM plaatsen
//_Tip_: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon
//een oude vertrouwde for-loop voor!

//* **Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// 1. Declareer variabele
// 2. Schrijf een for-loop die de hele inventory array heen door looped
// 3. Bij elke iteratie kijken naar de verkochte tv's
// 4. Sla deze tv's op in de variabele
// 5. Log de uitkomst


let totalSoldTvs = 0;
for (let i = 0; i < inventory.length; i++) {
    totalSoldTvs = totalSoldTvs + inventory[i].sold;
}
console.log(totalSoldTvs);




//* **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.

// 1. Go to index.html and create <div>
// 2. Maak een anchor/container in je html with id="tvs-sold"
// 3. Haal dit element binnen in jouw JS file
// 4. Sla het element op in een variabele
// 5. Geef de variabele content via innerHTML of textContent
// 6. Maak de styling in styles.css
// CONTINUE WATCHING THE VIDEO AT 51:59 MIN

const element = document.getElementById("tvs-sold");
element.innerHTML = `
<h3>Total verkocht</h3>
<p>${totalSoldTvs}</p>
`




//* **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
//console.

// 1. Declareer een variabele
// 2. Schrijf een for-loop die de hele inventory array heen door looped
// 3. Bij elke iteratie kijk naar de ingekochte tv's (original stock)
// 4. Sla deze tv's op in de variabele
// 5. Log de uitkomst


let totalBought = 0;
for (let i = 0; i < inventory.length; i++) {
    totalBought = totalBought + inventory[i].originalStock;
}
console.log(totalBought);




//* **Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.

// 1. Go to index.html and create <div>
// 2. Maak een anchor/container in je html with id="total-bought"
// 3. Haal dit element binnen in jouw JS file
// 4. Sla het element op in een variabele
// 5. Geef de variabele content via innerHTML of textContent
// 6. Maak de styling in styles.css

const element2 = document.getElementById("total-bought");
element2.innerHTML = `
<h3>Total ingekocht</h3>
<p>${totalBought}</p>
`




//* **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.

// STYLES.CSS - RED COLOR - LATER

let expectedToSell = 0;
for (let i = 0; i < inventory.length; i++) {
    expectedToSell = totalBought - totalSoldTvs;
}
console.log(expectedToSell);

const element3 = document.getElementById("to-sell");
element3.innerHTML = `
<h3>Nog te verkopen</h3>
<p>${expectedToSell}</p>
`


//HOEVEEL TV'S NOG VERKOCHT MOETEN WORDEN?

//let totalPurchased = 0;
//let totalSold = 0;

//for (let i = 0; i < inventory.length; i++) {
//    totalPurchased += inventory[i].originalStock;
//    totalSold += inventory[i].sold;
//}
//console.log(totalPurchased - totalSold);

