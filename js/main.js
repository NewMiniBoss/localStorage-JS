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
    verificaItem(itensAtuais);
    limpaFormulario(nome, quantidade);
})

function verificaItem(item) {
    const existe = itens.find(elemento => elemento.nome === item.nome);
    if (existe) {
        item.id = existe.id;
        atualizeElemento(item);
    } else {
        item.id = itens[itens.length -1] ? (itens[itens.length -1]).id + 1 : 0;
        criaElemento(item);
        armazenandoElemento(item);
    }
}

function atualizeElemento(item) {
    const elementoId = document.querySelector("[data-id='" + item.id + "']");
    elementoId.innerHTML = item.quantidade;
    itens[itens.findIndex(elemento => elemento.id == item.id)] = item;
    localStorage.setItem('item', JSON.stringify(itens));
}

function armazenandoElemento(item) {
    itens.push(item);
    localStorage.setItem('item', JSON.stringify(itens));
}

function criaElemento(item) {
    const novoUl = document.createElement('li');
    const novoStrong = document.createElement('strong');
    novoStrong.dataset.id = item.id;
    novoUl.classList.add('item');
    novoUl.appendChild(novoStrong);
    lista.appendChild(novoUl);
    novoStrong.innerHTML = item.quantidade;
    novoUl.innerHTML += item.nome;
    novoUl.appendChild(btnDelete(item.id));
}

function btnDelete(id) {
    const button = document.createElement('button');
    button.innerHTML = 'X';
    button.addEventListener('click', function () {
        deletaElemento(this.parentNode, id);
    })
    return button;
}

function deletaElemento(tag, id) {
    tag.remove();
    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);   
    localStorage.setItem('item', JSON.stringify(itens));
}

function limpaFormulario(nome, quantidade) {
    nome.value = '';
    quantidade.value = '';
}