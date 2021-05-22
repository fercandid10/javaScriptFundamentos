let vetor = [1,2,3,4,5,-8,-10,-1]

function qtdNegativa(vetor){
    let negativos = 0
    for (i = 0; i <= vetor.length; i ++){
        if (vetor[i] < 0){
            negativos += 1
        }
    }
    return ` quantidade de negativos ${negativos}`
}

console.log(qtdNegativa(vetor))
console.log(vetor)