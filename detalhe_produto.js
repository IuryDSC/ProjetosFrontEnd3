// Pegando o indice do protduto
const urlParams = new URLSearchParams(window.location.search);
const produtoIndex = urlParams.get('produto');

// Verifica se o índice é válido
if (produtoIndex !== null && produtoIndex < produtos.length) {
    const produto = produtos[produtoIndex];

    document.getElementById('nome-produto').textContent = produto.nome;
    document.getElementById('descricao-produto').textContent = produto.descricao;
    document.getElementById('preco-produto').textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;
} else {
    document.getElementById('detalhes-produto').innerHTML = "<p>Produto não encontrado.</p>";
}
