let vetor = []
let noInter = 0
let foraInter = 0
const intervalo = (a) => {

    for (let i = 0; i <= a; i ++){
        vetor.push(i)
        if (i >=10 && i <=20){
            noInter += 1
        }else{
            foraInter += 1
        }
        

    }

    return `No intervalo ${noInter} numeros e fora do intervalo ${foraInter} numeros.`
    

}

console.log(intervalo(15))
console.log(vetor)
console.log(vetor.length)