let vetor = []

const mediaAritmetica = (valor) =>{

    for (let i =1; i <= valor; i ++){
        vetor.push(i)
    }
    let totValores = 0
    for (valor of vetor){
        totValores += valor
    }
    console.log(totValores)
    return `A media dos valores é ${totValores/vetor.length}`
}

console.log(mediaAritmetica(10))
console.log(vetor)
console.log(vetor.length)
