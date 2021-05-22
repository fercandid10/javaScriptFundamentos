function numExtenso(n){
    switch (n){
        case 0:
            return 'ZERR'
        case 1:
            return 'UM'
        case 2:
            return 'DOIS'
        case 3:
            return 'TRES'
        case 4:
            return 'QUATRO'
        case 5:
            return 'CINCO'
        case 6:
            return 'SEIS'
        case 7:
            return 'SETE'
        case 8:
            return 'OITO'
        case 9:
            return 'NOVE'
        case 10:
            return 'DEZ'
        default:
            return 'Fora do nosso intervalo!'
    }
}

console.log(numExtenso(5))
console.log(numExtenso(12))