const carro_autonomo = {
    marca: "Tesla",
    modelo: "Tesla",
    velocidadeAtual: 0,
    acelerar: function(km){
        return this.velocidadeAtual = km
    },
    desacelerar: function(km){
        if(this.velocidadeAtual < km){
           return console.log("Impossivel ser negativo, freagem anulada, permanencia da velocidade atual de:")
        }else{
            return this.velocidadeAtual = this.velocidadeAtual - km
        }
    }
}

carro_autonomo.acelerar(40)
carro_autonomo.desacelerar(21)
console.log(carro_autonomo.velocidadeAtual)

const produtos = [{
    nome: "celular",
    preco: 1200,
    categoria: "eletronico",
},
{
    nome: "notebbok",
    preco: 4000,
    categoria: "eletronico",
},
{
    nome: "caderno",
    preco: 20,
    categoria: "Materia Escolar",
},
{
    nome: "caneta",
    preco: 5,
    categoria: "Material Escolar",
},
{
    nome: "fone de ouvido",
    preco: 40,
    categoria: "eletronico",
},]

const filtrarEletronicos = produtos.filter((listaProdutos) => {return listaProdutos.categoria === "eletronico"})
console.log(filtrarEletronicos)
let nomes = []
for(let nomesProdutos of produtos){
   nomes.push(nomesProdutos.nome)
}
console.log(nomes)

const carros = [
    { nome: "Civic", preco: 105500 },
    { nome: "Fit", preco: 30000 },
    { nome: "HR-V", preco: 100000 }
  ];
  
function encontrarProdutoPeloNome (obj, propriedade){
    const produtoSelecionado = obj.find(listaProdutos => listaProdutos["nome"] === propriedade)
    return produtoSelecionado
}
console.log(encontrarProdutoPeloNome(carros,"Fit"))