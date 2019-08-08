/* TASK */

/*
Įmonė nori įsigyti 2 baltus arba juodus tos pačios rūšies kompiuterius (būtinai vienos spalvos), kurių bendra kaina neviršytų 1600 €. Sugeneruokite sąrašą kompiuterių, kuriuos galite pasiūlyti.

Masyvas su objektais:

var pcs = [
{ "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
{ "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
{ "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
{ "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
{ "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
{ "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
{ "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
];

Būtinos sąlygos:
- Panaudokite bent po vieną ciklą ir sąlyginį sakinį,
- Rezultatas išvedamas konsolėje,
- Line break naudokite "\n".

Rezultatas turėtų atrodyti taip:

Galimi variantai:

Modelis: hp monstras
Kaina: 1600
Spalvos: juoda

Modelis: dell apskritimas
Kaina: 1394
Spalvos: balta

Modelis: acer peizažas
Kaina: 1240
Spalvos: balta ir juoda
*/

/* SOLUTION */

console.log("Galimi variantai: \n \n");
for (i=0; i<7; i++){
    if (PCs[i].kaina * 2 <= 1600){
        if ((PCs[i].spalva.juoda >= 2) && (PCs[i].spalva.balta >= 2)){
            console.log(
                "Modelis: " + PCs[i].modelis, 
                "\n Kaina: " + (PCs[i].kaina*2), 
                "\n Spalvos: balta ir juoda"
            ); 
        }
        
        else if (PCs[i].spalva.juoda >= 2){
            console.log(
                "Modelis: " + PCs[i].modelis, 
                "\n Kaina: " + (PCs[i].kaina*2), 
                "\n Spalvos: juoda"
            );
        }
        
        else if (PCs[i].spalva.balta >= 2){
            console.log(
                "Modelis: " + PCs[i].modelis, 
                "\n Kaina: " + (PCs[i].kaina*2), 
                "\n Spalvos: balta"
            );
        }
    }
}
