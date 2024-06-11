let desenhosAnimados = [
    "Bob Esponja",
    "Os Padrinhos Mágicos",
    "Kim Possible",
    "As Aventuras de Jackie Chan",
    "Hora de Aventura",
    "Avatar: A Lenda de Aang",
    "Ben 10",
    "X-Men: Evolution",
    "Duck Dodgers",
    "Danny Phantom"
];

let indiceSubstituicao = 0;

function exibirLista() {
    const lista = document.getElementById('lista-desenhos');
    lista.innerHTML = '';

    desenhosAnimados.forEach(desenho => {
        const item = document.createElement('li');
        item.textContent = desenho;
        lista.appendChild(item);
    });
}

function adicionarDesenho() {
    const novoDesenhoInput = document.getElementById('novo-desenho');
    const novoDesenho = novoDesenhoInput.value.trim();
    if (novoDesenho !== '') {
        desenhosAnimados[indiceSubstituicao] = novoDesenho;
        indiceSubstituicao = (indiceSubstituicao + 1) % desenhosAnimados.length;
        exibirLista(); 
        novoDesenhoInput.value = '';
    }
}

window.onload = exibirLista;
