const compras = [
  { produto: "Camiseta", categoria: "Roupas", preco: 50 },
  { produto: "Calça", categoria: "Roupas", preco: 100 },
  { produto: "Fone de Ouvido", categoria: "Eletrônicos", preco: 200 },
  { produto: "Celular", categoria: "Eletrônicos", preco: 1500 },
  { produto: "Tênis", categoria: "Roupas", preco: 150 },
];

function agruparPrecoCategoria(arrayOBJ, categoria) {
  let filtroCategoria = arrayOBJ.filter((lista) => {
    return lista["categoria"] == categoria;
  });
  let somaCategoria = filtroCategoria.reduce((acumulador, valor) => {
    return acumulador + valor.preco;
  }, 0);
  return `A categoria ${categoria}, tem um total de ${somaCategoria}`;
}
console.log(agruparPrecoCategoria(compras, "Roupas"));
console.log(agruparPrecoCategoria(compras, "Eletrônicos"));

const produtos = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Tênis", preco: 200 },
];

function filtrarValor(obj) {
  const dadosFiltrados = obj.filter((produto) => {
    if (produto["preco"] > 80) {
      return produto;
    } else {
      return null;
    }
  });
  return dadosFiltrados;
}
console.log(filtrarValor(produtos));

const pessoas = [
  { nome: "Ana", idade: 17 },
  { nome: "Carlos", idade: 20 },
  { nome: "Maria", idade: 16 },
  { nome: "Pedro", idade: 25 },
];

function filtrarPorIdade(arrayOBJ) {
  const filtrados = arrayOBJ.filter((usuarios) => {
    if (usuarios["idade"] >= 18) {
      return usuarios;
    } else {
      return null;
    }
  });
  return filtrados;
}
console.log(filtrarPorIdade(pessoas));

const produtosEletronicos = [
  { nome: "Celular", preco: 1500 },
  { nome: "Notebook", preco: 3000 },
  { nome: "Fone de Ouvido", preco: 200 },
];

function ordenadoCrescente(obj) {
  const attCrescente = obj.sort((a, b) => a["preco"] - b["preco"]);
  return attCrescente;
}
console.log(ordenadoCrescente(produtosEletronicos));

const usuarios = [];
function cadastrarUsuario(nome, idade) {
  return usuarios.push({ nome_usuario: nome, idade_usuario: idade });
}
function ordenarIdade(){
  return usuarios.sort((a,b) => a["idade_usuario"]-b["idade_usuario"])
}
function gerarRelatorio(){
  console.log(usuarios)
  let quantidadeMaioresDeIdade = 0
  usuarios.filter((usuarios) =>{
    if(usuarios["idade_usuario"] >= 18){
    return quantidadeMaioresDeIdade++}
  })
  console.log("Aquantidade total de pessoas maiores de idade é: ", quantidadeMaioresDeIdade)

  const idades = usuarios.map(usuario => usuario.idade_usuario);
  const maiorIdade = Math.max(...idades);
  console.log("A maior idade é:", maiorIdade);

}
cadastrarUsuario("Caio", 19);
cadastrarUsuario("Caio", 13);
cadastrarUsuario("Caio", 33);
cadastrarUsuario("Caio", 23);
cadastrarUsuario("Caio", 56);
cadastrarUsuario("Caio", 12);
console.log(ordenarIdade())
gerarRelatorio()

function filtrarMaiorIdade() {
  return usuarios.filter((usuario) => {
    return usuario["idade_usuario"] >= 18;
  });
}
console.log(filtrarMaiorIdade());

let pedidos = [];
function cadastrarCliente(nome, sabor, tamanho, preco) {
  return pedidos.push({
    Nome: nome,
    Sabor: sabor,
    Tamanho: tamanho,
    preço: preco,
  });
}
function listarPedidos() {
  return console.log(pedidos);
}

function calcularValorTotal() {
  let total = 0;
  pedidos.forEach(pedido => {
    total += pedido["preço"];
  });
  return console.log(total);
}
function apagarDadosArray() {
  return (pedidos = []);
}


cadastrarCliente("Andressa", "Calabresa", "G", 60);
cadastrarCliente("Andressa", "Frango catupiry", "G", 65);
listarPedidos();
calcularValorTotal()

