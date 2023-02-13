const form = document.querySelector('[data-form]');
const lista = document.querySelector('[data-lista]');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements.nome.value;
    const quantidade = evento.target.elements.quantidade.value;

    criaElemento(nome, quantidade);
})

function criaElemento(nome, quantidade) {
    const novoUl = document.createElement('li');
    novoUl.classList.add('item');

    const novoStrong = document.createElement('strong');
    novoStrong.innerHTML = quantidade;

    novoUl.appendChild(novoStrong);
    novoUl.innerHTML += nome;
    
    lista.appendChild(novoUl);
}
