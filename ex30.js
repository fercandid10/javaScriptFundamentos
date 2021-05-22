
let vetor = []

const inteiros = (n) => {
    let maior = 0
    let menor = 9999999999
    for (i = 11; i <= n; i++){
        vetor.push(i)
        for (numero of vetor){
            if (numero > maior){
                maior = numero
            }
            if (numero < menor){
                menor = numero
            }
        }
    }
    return `Maior numero no vetor ${maior} e menor ${menor}`
}

console.log(inteiros(30))
console.log(vetor)


