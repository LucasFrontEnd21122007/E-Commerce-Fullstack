let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const carrinhoLista = document.getElementById("carrinho-lista");
  const totalElement = document.getElementById("total");

  carrinhoLista.innerHTML = "";
  let total = 0;

  carrinho.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "carrinho-item";
    itemElement.innerHTML = `<p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>`;
    carrinhoLista.appendChild(itemElement);

    total += item.preco;
  });

  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarCompra() {
  alert(
    "Compra finalizada! Total: R$ " +
      carrinho.reduce((acc, item) => acc + item.preco, 0).toFixed(2)
  );
  carrinho = [];
  atualizarCarrinho();
}
