/* Verifica se a string é um palíndromo. */

function verificaPalindromo(string) {
    if(!string) return "string inexistente"; //Verificação se a string existe.

   return string.split("").reverse().join("") === string;
    //metodo split vai separar todas as letras da string.
    //metodo reverse vai reverter todos os caracteres separados pelo split.
    //metodo join vai juntar todos os elementos separados pelo split e que foi posto ao contrario pelo reverse.
    //Após, verificar se a string ao contrario é igual ao string inicial, assim se tornando um palindromo.
}

//Chamando a função para fazer a verificação:
//console.log(verificaPalindromo("ama"));


// Uma outra forma de verificar se a string é um palindromo

function verificaPalindromo2(string) {
    if(!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length -1 -i]) {
            return "string não é polídromo";
        }
    }

    return `A string ${string} é um palindromo`;
}

//Chamando a função para fazer a verificação:
console.log(verificaPalindromo2("ovo"));

