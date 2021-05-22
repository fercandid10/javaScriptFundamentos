function aumentoSalarial(plano,salario){
    switch (plano){
        case 'A':
            return `10% de aumento! novo salario, ${salario * 110/100}`
            
        case 'B':
            return `15% de aumento! novo salario ${salario * 115/100}`
        case 'C':
            return `20% de aumento! novo salario ${salario * 120/100}`
        default:
            return 'O seu plano é invalido!'
    }
}

console.log(aumentoSalarial('C',1000))