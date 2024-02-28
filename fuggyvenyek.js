export function atlagEletkor(lista){
    let osszeg = 0;
    for(let i=0; i<lista.length; i++){
        osszeg += lista[i].kor
    }
    osszeg = osszeg/lista.length
    return osszeg
    }
export function divbeIras(lista){
    let txt = "";
    for(let i = 0; i<lista.length; i++){ 
        txt += `<div class= "kutya">`
        txt += `<img src="${lista[i].kep}">`
        txt += `<p>Neve: ${lista[i].nev}</p>`
        txt += `<p>Kora: ${lista[i].kor}</p>`
        txt += `<p>Lábai száma: ${lista[i].lab}</p>`
        txt += `<p>Fajtája: ${lista[i].fajta}</p>`
        txt += `<button>Kiválaszt</button>`
        txt += `</div>`
    }
    return txt
}