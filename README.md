# Entregavel-Web-4

# Arrays, DOM e Eventos

Projeto desenvolvido para praticar os conceitos de Arrays, manipulação do DOM e eventos em JavaScript.

## Objetivo

O objetivo do projeto é aplicar na prática os métodos de arrays `forEach`, `map`, `filter` e `reduce`, além de trabalhar com manipulação do DOM, criação de elementos e eventos.

---

## Bloco 1 – Arrays e Métodos

### forEach

O método `forEach` percorre todos os elementos de um array e executa uma função para cada elemento.

No projeto, ele é utilizado para imprimir uma mensagem para cada nome e também para mostrar os dados de cada produto.

### map

O método `map` percorre um array e cria um novo array com os valores transformados.

No projeto, ele é utilizado para transformar os nomes em letras maiúsculas e para extrair os nomes dos produtos.

### filter

O método `filter` cria um novo array contendo somente os elementos que atendem a uma determinada condição.

No projeto, ele é utilizado para encontrar:

- Preços acima de R$ 20.
- Produtos com preço menor que R$ 50.

### reduce

O método `reduce` percorre os elementos do array e acumula seus valores, retornando um único resultado.

No projeto, ele é utilizado para calcular:

- A soma de todos os preços.
- O valor total dos produtos.

---

## Bloco 2 – Manipulação do DOM

O DOM (Document Object Model) permite que o JavaScript acesse e modifique os elementos HTML da página.

### querySelector

O `querySelector` é utilizado para selecionar um elemento através de um seletor CSS.

Exemplo:



document.querySelector("#titulo");


### querySelectorAll

O `querySelectorAll` seleciona todos os elementos que correspondem ao seletor informado.

No projeto, ele é utilizado para selecionar todos os parágrafos com a classe `.texto`.

### textContent

O `textContent` permite alterar ou acessar somente o conteúdo de texto de um elemento.

### innerHTML

O `innerHTML` permite inserir conteúdo HTML dentro de um elemento.

Neste projeto, ele é utilizado para inserir os dois primeiros itens da lista.

### createElement

O `createElement` permite criar novos elementos HTML através do JavaScript.

No projeto, ele é utilizado para criar novos elementos `<li>`.

### append

O `append` adiciona um elemento criado pelo JavaScript dentro de outro elemento.

### classList

O `classList` permite adicionar, remover ou verificar classes CSS.

No projeto são utilizados:

- `classList.add()` para adicionar classes.
- `classList.toggle()` para alternar uma classe.
- `classList.contains()` para verificar se uma classe existe.

---

## Bloco 3 – Eventos

Os eventos permitem que o JavaScript responda às ações realizadas pelo usuário.

### addEventListener

O `addEventListener` permite adicionar um evento a um elemento.

No projeto são utilizados eventos como:

- `click`
- `mouseover`
- `keyup`
- `submit`

### click

O evento `click` é executado quando o usuário clica em um elemento.

### mouseover

O evento `mouseover` é executado quando o mouse passa sobre um elemento.

### keyup

O evento `keyup` é executado quando o usuário solta uma tecla.

### submit

O evento `submit` é utilizado para controlar o envio do formulário.

O método:



e.preventDefault();


impede que o navegador recarregue a página ao enviar o formulário.

---

## Event Delegation

Event Delegation é uma técnica que permite colocar um único listener no elemento pai para tratar eventos dos elementos filhos.

Neste projeto, existe apenas um `addEventListener` na lista:



lista.addEventListener("click", (e) => { if (e.target.tagName === "LI") { e.target.classList.toggle("feito"); } });


Dessa forma, não é necessário criar um evento individual para cada `<li>`.

Uma das principais vantagens é que elementos adicionados dinamicamente também podem responder ao evento.

Por isso, o `<li>` criado posteriormente pelo JavaScript também funciona quando recebe um clique.

Essa abordagem pode melhorar a organização e a eficiência do código, principalmente quando existem muitos elementos ou elementos que são criados dinamicamente.
