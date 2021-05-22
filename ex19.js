function cardapio(codItem, qtd){
    switch (codItem){
        case 100:
            return `Hot Dog! total R$ ${3 * qtd}`
        case 200:
            return `Burguer simples! total R$ ${4 * qtd}`
        case 300:
            return `Cheeseburguer! total R$ ${5.5 * qtd}`
        case 400:
            return `Bauru! total R$ ${7.5 * qtd}`
        case 500:
            return `Refrigerante! total R$ ${3.5 * qtd}`
        case 600:
            return `Suco! total R$ ${2.8 * qtd}`
        default:
            return 'Produto nao existente!'
    }
}

console.log(cardapio(200,5))
console.log(cardapio(500,2))