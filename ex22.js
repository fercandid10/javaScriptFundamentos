
function anuidade(mes,valor){
    if (mes == 1){
        return valor
    }
    if (mes != 1){
        atraso = mes - 1
        return (valor * ((105/100))** atraso).toFixed(2)
    }
}

console.log(anuidade(3,500))

/*
function calcularValor(mes, valor){
    if (mes > 0 && mes < 13){
        atrado = mes  - 1
        return (valor * ((1 + (5/100)) **atrado)).toFixed(2)
    }else{
        return 'mes invalido!'
    }
}

console.log(calcularValor(1,500))
*/