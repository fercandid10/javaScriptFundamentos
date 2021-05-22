
function fatorial(num){
    let fat = 1
    for (let i=num; i>0; i--){
        fat *= i
        //console.log(fat)
    }
    return fat
}

console.log(fatorial(5)) // Minha solucao


//Outra solucao que nao foi a minha
function factorial(numero){
    if (numero == 0){
        return 1
    }else {
        return numero * factorial(numero - 1)
    }
}

console.log(factorial(5))

