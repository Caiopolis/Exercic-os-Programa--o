const numeros = [10, 23, 5, 8, 30, 7, 14];
const numerosPares = numeros.filter((numeros) => {
  return numeros % 2 === 0;
});
console.log(numerosPares);

const produtos = [
  {
    nome: "Chocolate",
    preco: 5.0,
    categoria: "Doce",
  },
  {
    nome: "Salgadinho",
    preco: 7.0,
    categoria: "salgado",
  },
];
function descricaoProduto(obj) {
  for (let elementos in produtos) {
    console.log(
      `O produto ${obj[elementos].nome}, custa ${obj[elementos].preco} e pertence a categoria ${obj[elementos].categoria}`
    );
  }
}

descricaoProduto(produtos);

const usuarios = [
  { nome: "Caio", idade: 25, email: "caio@email.com" },
  { nome: "Ana", idade: 30, email: "ana@email.com" },
  { nome: "Pedro", idade: 22, email: "pedro@email.com" },
];

function encontrarUsuario(arrayObj, value) {
  return arrayObj.filter((listaUsuarios) => listaUsuarios["nome"] == value);
}
console.log(encontrarUsuario(usuarios, "Pedro"));

const compras = [
  { produto: "Arroz", quantidade: 2, preco: 10 },
  { produto: "Feijão", quantidade: 3, preco: 8 },
  { produto: "Leite", quantidade: 5, preco: 6 },
];

function somandoValores(arrayObj) {
  const soma = arrayObj.reduce(
    (acumulador, listapreco) =>
      acumulador + listapreco.preco * listapreco.quantidade,
    0
  );
  return soma;
}
console.log(somandoValores(compras));

const nomes = ["joão", "maria", "pedro"];
let nomesEmMaisuculo = nomes.map((nomesMaiusculo) => {
  return nomesMaiusculo.toUpperCase();
});
console.log(nomesEmMaisuculo);

const produtosEletronicos = [
  { nome: "Teclado", preco: 1020, categoria: "Periférico" },
  { nome: "Mouse", preco: 40, categoria: "Periférico" },
  { nome: "Monitor", preco: 430, categoria: "Display" },
];

function filtrandoMaioresValores(produtos, valorReferencia) {
  let maioresQue50 = produtos.filter((produtos) => {
    return produtos.preco > valorReferencia;
  });
  return maioresQue50;
}
console.log(filtrandoMaioresValores(produtosEletronicos, 400));

const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 6 },
  { nome: "Beatriz", nota: 9 },
  { nome: "Diego", nota: 7 },
];

function ordenarIdade(arrayOBJ) {
  const ordenado = arrayOBJ.sort((a, b) => b["nota"] - a["nota"]);
  return ordenado;
}
console.log(ordenarIdade(alunos));

const produtos4 = [
  { nome: "Notebook", preco: 3000, categoria: "Eletrônicos" },
  { nome: "Fone de Ouvido", preco: 200, categoria: "Acessórios" },
  { nome: "Celular", preco: 1500, categoria: "Eletrônicos" },
  { nome: "Caderno", preco: 30, categoria: "Papelaria" },
];

function filtrarCategoria(arrayObj, value) {
  let filtrados = arrayObj.filter((lista) => {
    return lista.categoria === value;
  });
  return filtrados;
}
console.log(filtrarCategoria(produtos4, "Eletrônicos"));

const produtos5 = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Tênis", preco: 200 },
];

function somaValores(produto) {
  const soma = produto.reduce((acumulador, lista) => {return acumulador + lista.preco},0);
  return soma;
}
console.log(somaValores(produtos5));


const vendas = [
    { vendedor: "Ana", valor: 1000 },
    { vendedor: "Carlos", valor: 500 },
    { vendedor: "Ana", valor: 1500 },
    { vendedor: "Carlos", valor: 2500 },
    { vendedor: "Beatriz", valor: 2000 }
];

function rankingVendedores(arrayOBJ){
    let raking = arrayOBJ.sort((a,b) => b.valor - a.valor)
    let top3 = raking.slice(0,3)
    return top3
}

console.log(rankingVendedores(vendas))