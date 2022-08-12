/* aca se devuelve un array de las letras, hay que mixearlas */

let texto = "we the people of the united states in order to form a more perfect union etc";

function S (string){
    let sin = string.split(" ").join("");
    let A = Array.from(sin)
    return A;
} 
let ArrayString = S(texto);
let ArrayStringMath = Math.sqrt(S(texto).length);
let redondeado = Math.ceil(ArrayStringMath);
/* console.log(redondeado);
console.log(ArrayString); */

let recortes = function (x){
    for(let i = 0 ; i<x ;i++){
        let i  = [];
}
}
console.log(recortes(redondeado));





/* aca se deberian mixear las letras */

/* function computerPlay (){ 
    let options = ["Rock", "Paper", "Scissors"];
    /* let random = Math.floor(Math.random() * options.length); } */
    


/* function p(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
}
p(ArrayString);
let arrayMixed = console.log(ArrayString);
console.log(); */
/* function fisherYatesShuffle(arr){
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    }
}

var tmpArray = [1, 3, 5];
fisherYatesShuffle(tmpArray);
console.log(tmpArray); */
/* asi separo segun una cantidad de caracteres(8) */

/* let recortes = function (arr){
    let rr = []
    for(let i = 0 ; i<=arr.length ;i++){
        
        rr.push(arr[i].slice(arr[i], arr[i+8]))
    }
}
console.log(recortes(ArrayString));  */

 /*  let recorte = ArrayString.slice(0,8)
*/

