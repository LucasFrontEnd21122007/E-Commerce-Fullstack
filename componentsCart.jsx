import React, { useState } from 'react';
import Carrinho from './components/Carrinho';

const App = () => {
  const [carrinhoItens, setCarrinhoItens] = useState([]);

  const adicionarAoCarrinho = (nome, preco) => {
    const novoItem = { nome, preco };
    setCarrinhoItens([...carrinhoItens, novoItem]);
  };

  const removerItemDoCarrinho = (index) => {
    const novosItens = [...carrinhoItens];
    novosItens.splice(index, 1);
    setCarrinhoItens(novosItens);
  };

  const finalizarCompra = () => {
    alert(`Compra finalizada! Total: R$ ${carrinhoItens.reduce((acc, item) => acc + item.preco, 0).toFixed(2)}`);
    setCarrinhoItens([]);
  };

  return (
    <div className="app">
      <h1>Minha Loja Online</h1>
      {/* Adicione seus produtos aqui */}
      <Carrinho
        itens={carrinhoItens}
        onRemoverItem={removerItemDoCarrinho}
        onFinalizarCompra={finalizarCompra}
      />
    </div>
  );
};

export default App;