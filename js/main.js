const form = document.querySelector('[data-form]');
const lista = document.querySelector('[data-lista]');
const itens = JSON.parse(localStorage.getItem("item")) || [];

itens.forEach(element => {
    criaElemento(element);
});

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nome = evento.target.elements.nome;
    const quantidade = evento.target.elements.quantidade;
    const itensAtuais = { "nome": nome.value, "quantidade": quantidade.value };
    armazenandoElemento(itensAtuais);
    criaElemento(itensAtuais);
    limpaFormulario(nome, quantidade);
})

function armazenandoElemento(item) {
    itens.push(item);
    localStorage.setItem('item', JSON.stringify(itens));
}

function criaElemento(item) {
    const novoUl = document.createElement('li');
    const novoStrong = document.createElement('strong');
    novoUl.classList.add('item');
    novoUl.appendChild(novoStrong);
    lista.appendChild(novoUl);
    novoStrong.innerHTML = item.quantidade;
    novoUl.innerHTML += item.nome;
}

function limpaFormulario(nome, quantidade) {
    nome.value = '';
    quantidade.value = '';
}