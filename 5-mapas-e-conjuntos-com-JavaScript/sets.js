//Dado o array [30, 30, 40, 5, 223, 2040, 3034, 5]
//retorne apenas com os valores únicos

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}   

console.log(valoresUnicos(meuArray));