const form = document.querySelector('[data-form]');
const lista = document.querySelector('[data-lista]');
const itens = JSON.parse(localStorage.getItem(["itens"])) || [];

itens.forEach(element => {
    console.log(element.nome, element.quantidade);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formNome = event.target.elements['nome'];
    const formQuantidade = event.target.elements['quantidade'];

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value,
    }

    itens.push(itemAtual);
    
    criaElemento(itemAtual);

    localStorage.setItem('itens', JSON.stringify(itens));
    
    formNome.value = '';
    formQuantidade.value = '';
})

function criaElemento(item) {
    const novoElemento = document.createElement('li');
    novoElemento.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;

    novoElemento.appendChild(numeroItem);
    novoElemento.innerHTML += item.nome;

    lista.appendChild(novoElemento);
}