let vetInt = [1,2,3,4]
let vetString = ['Fer', 'Geo', 'Leh','Rose']
let vetDouble = [68.8, 50.9, 66.7, 65.5]

let uniao = vetInt.concat(vetString).concat(vetDouble)

//console.log(uniao)

function concatenar(...args){
    resultado = []
    for (let i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concatenar(vetInt, vetDouble))