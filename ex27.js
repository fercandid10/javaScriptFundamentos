function calcularCrescimento(altura1, taxa1, altura2, taxa2){
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassara a criança 2 em 1 ano.'
            
        } else if (taxa1 < taxa2){
            return 'A criança 2 ultrapassara a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if (taxa1 >= taxa2){
                return 'A criança menor nao ultrapassara a maior.'
            }else {
                return calcularTempo(altura2, taxa2, altura1, taxa1)
            }
        } else {
            if (taxa2 >= taxa1){
                return 'A criança menor nao ultrapassara a maior.'
            }else{
                return calcularTempo(altura1, taxa1, altura2, taxa2)
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtsAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtsAnos ++
        
    }
    console.log(qtsAnos)
    return qtsAnos
}

console.log(calcularCrescimento(150, 2, 130, 4))