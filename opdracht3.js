/*#### Opdracht 3 - Array methoden en functies

//* **Opdracht 3a:** Gebruik een array-methode om alle tv merken (zoals `Philips`, `NIKKEI`, etc.) in een lijst op de
//pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er
//dubbele namen in zitten, is niet erg.
 */

// 1. Declareer een variabele
// 2. Geef de variabele als waarde een array-methode (in dit geval een map() )
// 3. Loop door alle data door heen op zoek naar alle tv merken/brands
// 4. Log de uitkomst

let allTvBrands = inventory.map((brandTv) => {
    return brandTv.brand;
});
console.log(allTvBrands);

// Als een nieuw array met alle tv brands wordt gemaakt, laat dit als een lijst op de pagina zien
// 1. In index.html maak een anchor/lijst met id=" "
// 2. Sla het element op in een variabele en Haal element in js met document.getElementById();
// 3. Geef de variabele content via innerHTML

const allTvBrandsContainer = document.getElementById("all-tv-brands");
allTvBrandsContainer.innerHTML = `
<li>${allTvBrands}</li>
`


//* **Opdracht 3b:** Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om
//onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. _Tip_: vergeet deze functie
//-declaratie niet aan te roepen!



function anyInventory (tvObjectsArray) {
    let allTvBrands = inventory.map((tvObjectsArray) => {
        return tvObjectsArray.brand;
    });
    console.log(allTvBrands);
}
anyInventory(inventory);