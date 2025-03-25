const numerosSortidos = [2,4,7,8,10,4,5]
function somandoArray(obj){
    let somadosValores = 0
    const numerosFiltradosPares = obj.filter(numeros => { return numeros % 2 == 0})
    const multiplicando = numerosFiltradosPares.map(multi => { return somadosValores +=  multi * 2 + (multi)})
    return multiplicando
}
console.log(somandoArray(numerosSortidos))

function somaArray([...numeros]){
    const somaDosValores = [...numeros].reduce((acumulador, numeros) => acumulador + numeros, 0)
    return somaDosValores
}
console.log(somaArray([1, 2, 3, 4]))
console.log(somaArray([10, 20, 30]))

function dobrarValores([...array]){
    const novosValores = [...array].map(numeros => numeros * 2)
    return novosValores
}
console.log(dobrarValores([10, 22, 43])); 


const numerosGenericos = [10,20,30,40,50]

const numerosDobrados = numerosGenericos.map((numeros) => {return numeros * 2})
console.log(numerosDobrados)



const numerosGenericos2 = [10,20,30,40,50]

function somaArray(arrayObj){
    const numeroSomado = arrayObj.reduce((acumulador, numeros) => acumulador + numeros,0)
    return numeroSomado
}
console.log(somaArray(numerosGenericos2))

const informaçãoUsuario = []

function addInfo(nome, email, idade){
    const usuario = {
        nome_Usuario: nome,
        Email_Usuario: email,
        idade_Usuario: idade
    }
    informaçãoUsuario.push(usuario)
}
addInfo("Caio Henrique Arruda Moreira", "caiohamoreira@gmail.com", 19)
addInfo("Adressa Cristina Silva Arruda", "acsarruda13@gmail.com", 20)
console.log(informaçãoUsuario)


