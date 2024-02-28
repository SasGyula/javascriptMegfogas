import { KUTYALISTA } from "./adat.js";
import { atlagEletkor, divbeIras } from "./fuggyvenyek.js";

/* Mennyi a kutya átlag életkora*/

var osszeg = atlagEletkor(KUTYALISTA)
console.log(osszeg)

/*írjuk ki a html-be adatok div-be a p tagek közé*/
/* megfogjuk a div-et*/
const adatokELEM = document.getElementById("adatok")
const kutyaADATOK = document.getElementById("kutyak")
/*beleírjuk az értéket*/
adatokELEM.innerHTML= `<p>A kutyák átlagéletkora ${osszeg}</p>`
kutyaADATOK.innerHTML = divbeIras(KUTYALISTA);
const kutyaELEM = document.getElementsByClassName(".kutya");
console.log(kutyaADATOK)
console.log(kutyaELEM)
const elsoKutyaKARTYA = kutyaELEM[0]
console.log(elsoKutyaKARTYA)
const kutyaELEMEK = document.querySelectorAll(".kutya")
console.log(kutyaELEMEK)

/*hogy érem el a második kártya képét*/
const KEPELEMEK = document.querySelectorAll(".kutya img")
console.log(KEPELEMEK)
const KEPELEMEK1 = KEPELEMEK[1]
console.log(KEPELEMEK1)
/*eseménykezelés*/
/*megfogjuk a gombot*/
const gombELEM = document.querySelectorAll(".kutya button")
/*rátesszük az eseménykezelőt, és meghatározzuk hogy mit csináljon*/
for(let i=0; i<KUTYALISTA.length;i++){
    gombELEM[i].addEventListener("click", gombKattintas)
}

function gombKattintas(){
    alert("Kiválasztottál egy kutyát.")
}
