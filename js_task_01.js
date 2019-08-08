/* TASK A */

/*
Hidroeleketrinėje yra 19 generatorių. Pirmi 4 gamina po 62 MW, likusieji 15 - po 124 MW. Inžinieriai paprašė tavęs sukurti du ciklus (loops), kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių. Pirmiems 4 generatoriams panaudok while loop, likusiems 15 - for loop. Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):

Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

Naudokis tokiais kintamaisiais:
var currentGen = 1;
var totalGen = 19;
var totalMW = 0;
*/

/* SOLUTION */

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while (currentGen <= 4) {
totalMW = totalMW + 62;
console.log("Generatorius #" + currentGen + " įjungtas, pridėjo 62 MW, viso generuojama " + totalMW + " MW!");
currentGen++;
}

while (currentGen <= totalGen) {
totalMW = totalMW + 124;
console.log("Generatorius #" + currentGen + " įjungtas, pridėjo 124 MW, viso generuojama " + totalMW + " MW!");
currentGen++;
}

/* TASK B */

/*
Keli pakeitimai JS 05 užduočiai. Veikia tik lyginiai generatoriai. Panaudok tik vieną for loop. Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, o likusieji 15 - po 124 MW.

Konsolės formatas:

Generatorius #1 išjungtas.
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!

Naudojami kintamieji:
var totalGen = 19;
var totalMW = 0;
*/

/* SOLUTION */

var totalGen = 19;
var totalMW = 0;

totalGen = 1;

for (totalGen; totalGen <= 19; totalGen++) {
if (totalGen % 2 != 0) {
console.log("Generatorius #" + totalGen + " išjungtas.");
}
else if (totalGen <= 4) {
totalMW = totalMW + 62;
console.log("Generatorius #" + totalGen + " įjungtas, pridėjo 62 MW, viso generuojama " + totalMW + " MW!");
}
else {
totalMW = totalMW + 124;
console.log("Generatorius #" + totalGen + " įjungtas, pridėjo 124 MW, viso generuojama " + totalMW + " MW!");
}
}