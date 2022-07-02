//#### Opdracht 2 - Elementen in de DOM plaatsen
//_Tip_: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon
//een oude vertrouwde for-loop voor!

//* **Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// 1. Declareer variabele
// 2. Schrijf een for-loop die de hele inventory array heen door looped
// 3. Bij elke iteratie kijken naar de verkochte tv's
// 4. Sla deze tv's op in de variabele
// 5. Log de uitkomst

let allSoldTvs = 0;
for (let i = 0; i < inventory.length; i++) {
    allSoldTvs = allSoldTvs + inventory[i].sold
}
console.log(allSoldTvs);


//* **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.
//LATER

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
// LATER


//* **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.
// STYLES.CSS - RED COLOR - LATER

//HOEVEEL TV'S NOG VERKOCHT MOETEN WORDEN?

let totalPurchased = 0;
let totalSold = 0;

for (let i = 0; i < inventory.length; i++) {
    totalPurchased += inventory[i].originalStock;
    totalSold += inventory[i].sold;
}
console.log(totalPurchased - totalSold);


