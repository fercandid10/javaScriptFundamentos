const funcao1 = (capinicial, txJuros, taplicacao) => {
    return capinicial + (capinicial * txJuros * taplicacao)
}

const funcao2 = (capinicial, txJuros, taplicacao) => {
    return capinicial * (1 + txJuros) ** taplicacao
}

console.log(funcao1(100, 10/100, 2))
console.log(funcao2(100, 10/100, 2))
