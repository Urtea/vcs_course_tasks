/* TASK
Turime masyvą, kuriame yra trumpos tekstinės eilutės (pateikta apačioje). Mūsų užduotis:
1. Sukurti funkciją, kuri rastų ilgiausią žodį tekstinėje eilutėje
2. Panaudojant šią funkciją išvesti kiekvienos eilutės ilgiausią žodį (rezultatas turi būti viena tekstinė eilutė)
3. Išvedant žodžius panaudoti tarpą tarp žodžių
4. Išvedimas turi būti dinamiškas (pasikeitus masyve esančių eilučių skaičiui - vis tiek gautume kiekvienos eilutės ilgiausią žodį)
5. Rezultatą išvesti konsolėje

Masyvas
var posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];*/

/* SOLUTION */

// pradinis masyvas
var posts = [
    "Sveikinu radus darba",
    "Ar tikrai pabaigus kursa viskas bus gerai",
    "Javascript nera Java",
    "Rasti video medziaga visada saunu",
    "Vaziuojame prie juros"
];

// funkcija, kuri isveda kiekvienos eilutes ilgiausia zodi
function longestWords(){
  for (i=0; i < posts.length; i++){ // pavercia kiekviena masyvo eilute i array 
    posts[i] = posts[i].split(" "); // kad butu galima skaiciuoti zodzio ilgi
  }
           
var line = "";
var word = "";
for (array in posts){ // atlieka veiksmus kiekvienam array is eiles
    var maxW = 0;
    i = 0;
    
    while (i < posts[array].length){ // skaiciuoja ilgiausia zodi kiekvienam array
        if (posts[array][i].length > maxW){
        maxW = posts[array][i].length;
        }
        i++;
    }
    
    for (i=0; i < posts[array].length; i++){ // paima ilgiausia zodi is array
        if (posts[array][i].length == maxW){
            word = posts[array][i];
        }
    }
    line += word + " "; // sukuria tekstine eilute is visu ilgiausiu zodziu
} 

console.log(line); // isveda rez i konsole
    
} 

// iskviecia funkcija
longestWords(posts);