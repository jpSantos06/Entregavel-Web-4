// BLOCO 1 – ARRAYS E MÉTODOS

// 1. Array de nomes
const nomes = ["Ana", "Bruno", "Carlos"];

// forEach
nomes.forEach((nome) => {
    console.log(`Olá, ${nome}!`);
});

// map - cria um novo array com nomes em maiúsculas
const nomesMaiusculos = nomes.map((nome) => {
    return nome.toUpperCase();
});

console.log("Nomes em maiúsculas:", nomesMaiusculos);


// 2. Array de preços
const precos = [10, 25, 40, 5, 60];

// filter - preços acima de 20
const precosAcimaDe20 = precos.filter((preco) => {
    return preco > 20;
});

console.log("Preços acima de 20:", precosAcimaDe20);

// reduce - soma de todos os preços
const somaPrecos = precos.reduce((total, preco) => {
    return total + preco;
}, 0);

console.log("Soma dos preços:", somaPrecos);


// 3. Array de objetos produtos
const produtos = [
    {
        nome: "Caderno",
        preco: 15
    },
    {
        nome: "Caneta",
        preco: 5
    },
    {
        nome: "Mochila",
        preco: 80
    },
    {
        nome: "Estojo",
        preco: 30
    }
];

// map - extrair apenas os nomes
const nomesProdutos = produtos.map((produto) => {
    return produto.nome;
});

console.log("Nomes dos produtos:", nomesProdutos);


// filter - produtos com preço menor que 50
const produtosMenoresQue50 = produtos.filter((produto) => {
    return produto.preco < 50;
});

console.log("Produtos abaixo de R$ 50:", produtosMenoresQue50);


// reduce - soma dos preços dos produtos
const totalProdutos = produtos.reduce((total, produto) => {
    return total + produto.preco;
}, 0);

console.log("Total dos produtos:", totalProdutos);


// forEach - imprimir nome e preço
produtos.forEach((produto) => {
    console.log(`Nome: ${produto.nome} | R$ ${produto.preco}`);
});


// BLOCO 2 – MANIPULAÇÃO DO DOM


// 1. Selecionar o h1 e alterar seu texto
const titulo = document.querySelector("#titulo");

titulo.textContent = "Blog do João";

// 2. Selecionar todos os parágrafos
const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach((paragrafo) => {
    console.log(paragrafo.textContent);
});

// 3. Selecionar a lista e usar innerHTML
const lista = document.querySelector("#lista");

lista.innerHTML = `
    <li>Primeiro item</li>
    <li>Segundo item</li>
`;

// 4. Criar o terceiro item com createElement
const terceiroItem = document.createElement("li");

terceiroItem.textContent = "Terceiro item";

lista.append(terceiroItem);

// 5. Adicionar a classe destaque
terceiroItem.classList.add("destaque");

console.log(
    "Possui a classe destaque:",
    terceiroItem.classList.contains("destaque")
);

// 6. Criar tarefas usando forEach
const tarefas = [
    "Estudar JS",
    "Fazer exercícios",
    "Revisar DOM"
];

tarefas.forEach((tarefa) => {
    const item = document.createElement("li");

    item.textContent = tarefa;

    lista.append(item);
});

// 7. Aplicar classe feito ao primeiro li
const primeiroItem = lista.querySelector("li");

primeiroItem.classList.add("feito");

// 8. Mostrar quantidade total de itens
const quantidadeItens = lista.querySelectorAll("li").length;

console.log("Quantidade total de itens:", quantidadeItens);


// BLOCO 3 – EVENTOS E EVENT DELEGATION


// 1. Evento de click no botão
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    console.log("Clicou!");
});

// 2. Evento de mouseover no botão
botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

// 3. Evento keyup no campo nome
const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", () => {
    console.log("Nome digitado:", campoNome.value);
});


// EVENT DELEGATION


lista.addEventListener("click", (e) => {

    if (e.target.tagName === "LI") {

        e.target.classList.toggle("feito");

        console.log("Item clicado:", e.target.textContent);
    }
});


// Criar um novo <li> através do JavaScript
const novoItem = document.createElement("li");

novoItem.textContent = "Item criado pelo JavaScript";

lista.append(novoItem);


// FORMULÁRIO


const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {

    // Impede o recarregamento da página
    e.preventDefault();

    // .trim() remove espaços vazios no início e no final
    const textoTarefa = campoTarefa.value.trim();

    // Se estiver vazio, não adiciona nada
    if (textoTarefa === "") {
        return;
    }

    // Criar novo elemento li
    const novaTarefa = document.createElement("li");

    novaTarefa.textContent = textoTarefa;

    // Adicionar à lista
    lista.append(novaTarefa);

    // Limpar campo
    campoTarefa.value = "";
});