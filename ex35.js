let vtpilha = [1,2,3,4,5]
let vtAdiciona = [6,7,8,9,10]

const percorre = () => {
    for (i = 0; i < vtAdiciona.length; i ++){
        vtpilha.push(vtAdiciona[i])
    }

    return vtpilha
}

console.log(percorre())