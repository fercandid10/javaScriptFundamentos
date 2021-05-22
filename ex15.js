function compraCarro(carro){
    switch (carro){
        case 'hatch':
            return 'Compra efetuada com sucesso!'
        case 'sedans':
        case 'motocicleta':
        case 'caminhonetes':
            return 'Tem certeza que nao prefere este modelo?! hatch'
        default:
            return 'Nao trabalhamos com este tipo de automovel aqui!'
    }
}

console.log(compraCarro('hatch'))