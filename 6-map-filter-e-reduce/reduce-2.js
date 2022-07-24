const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'ceral',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculadoSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log("rodada", index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculadoSaldo(saldoDisponivel, lista));