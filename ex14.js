function frutas(fruta){
    switch (fruta){
        case 'maça':
            return 'Nao vendemos esta fruta aqui!'
        
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        
        case 'melancia':
            return 'Aqui esta, sao 3 reais o kg'
        
        default:
            return 'Tente outra fruta!'
    }
}

console.log(frutas('maça'))