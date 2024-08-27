// Array de produtos
const produtos = [
    {
        nome: "Snack Saudável",
        descricao: "Snack feito com frutas desidratadas",
        preco: 15.90
    },
    {
        nome: "Refeição Congelada Fitness",
        descricao: "Refeição balanceada, rica em proteínas",
        preco: 25.99
    },
    {
        nome: "Suco Natural Detox",
        descricao: "Suco natural a base de frutas e vegetais",
        preco: 8.75
    }
];

// Função para exibir produtos
function listarProdutos() {
    const listaProdutos = document.getElementById('lista-produtos');
    produtos.forEach((produto, index) => {
        const produtoItem = document.createElement('div');
        produtoItem.classList.add('produto-item');
        produtoItem.innerHTML = `
            <h2>${produto.nome}</h2>
            <p>${produto.descricao}</p>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="verDetalhes(${index})">Ver Detalhes</button>
        `;
        listaProdutos.appendChild(produtoItem);
    });
}

// Função para redirecionar para a página de detalhes
function verDetalhes(index) {
    window.location.href = `detalhe_produto.html?produto=${index}`;
}

// Chama a função para listar produtos quando a página carrega
window.onload = listarProdutos;
