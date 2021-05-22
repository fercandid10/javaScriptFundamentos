function calculadora(a, op, b){
    switch (op){
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            return 'Valor invalido, tente novamente!'
    }
}

console.log(calculadora(5,'-',3))