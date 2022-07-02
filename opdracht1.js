// #### Opdracht 1 - Array Methoden

//**Opdracht 1a:** Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de
//console. *

// 1. Declareer een variabele
// 2. Geef de variabele de waarde van een array-methode (map())
// 3. Return de namen van alle tv types

const tvName = inventory.map((tvNames) => {
    return tvNames.name;
});
console.log(tvName);


/* **Opdracht 1b:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht
zijn. Log de uitkomst in de console.

// 1. Declareer een variabele
// 2. Geef de variabele de waarde van een array-methode (filter())
// 3. Return alle entries van uitverkochte tv's

 */

const tvsSoldOut = inventory.filter((soldOutTv) => {
    return soldOutTv.originalStock === soldOutTv.sold;
});
console.log(tvsSoldOut);


/* **Opdracht 1c:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight
beschikken. Log de uitkomst in de console.*/

// 1. Declareer een variabele
// 2. Geef de variabele de waarde van een array-methode (filter())
// 3. Return alle entries van tv's met ambilight

const tvAmbi = inventory.filter((ambiTv) => {
    return ambiTv.options.ambiLight;
});
console.log(tvAmbi);


/* **Opdracht 1d:** Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de
console.*/

// 1. Declareer een functie
// 2. Gebruik de sort() methode op de inventory array in deze functie
// 3. Log de uitkomst

//LONGER VERSION
function sortTv(tv) {
    tv.sort((a, b) => {
       if(a.price - b.price > 0) {
           return -1;
       } if(a.price - b.price < 0) {
           return 1;
       } else {
           return 0;
       }
    });

}
sortTv(inventory);

//SHORTER VERSION
function tvSort(tv){
   tv.sort((a, b) => b.price - a.price);
}
tvSort(inventory);


