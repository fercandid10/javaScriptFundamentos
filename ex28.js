let vetor = []
let qtd_P = 0
let qtd_I = 0

const paresXimpares = (a) => {
    for (let i = 0; i <= a; i++){
        vetor.push(i)
        if (vetor[i] % 2 == 0){
            qtd_P +=1
        }else{
            qtd_I +=1
        }
    }
    return `A quantidade de pares foi de ${qtd_P} e de impares ${qtd_I}`
}

console.log(paresXimpares(10))
console.log(vetor)
console.log(vetor.length)