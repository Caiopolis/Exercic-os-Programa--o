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
