function triangulo(a,b,c){
    if (a==b && a==c && b==c){
        console.log('Trangulo equilatero!')
    } else if (a==b || a==c || b==c){
        console.log('triangulo isoceles!')
    }else{
        console.log('triangulo escaleno!')
    }
}

triangulo(5,5,1)