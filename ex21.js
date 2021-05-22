function planoSaude(idade,valor = 100){
    if (idade < 10){
        console.log(`Valor a pagar ${80 + valor}`)
    }
    if (idade >=10 && idade <30){
        console.log(`Valor a pagar ${50 + valor}`)
    }
    if (idade >=30 && idade <60){
        console.log(`Valor a pagar ${95 + valor}`)
    }
    if (idade >=60){
        console.log(`Valor a pagar ${130 + valor}`)
    }
}

planoSaude(22)

