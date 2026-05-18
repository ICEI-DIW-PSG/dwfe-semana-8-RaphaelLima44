// B.1 - DEFINIÇÃO DOS DADOS (JSON)

const catalogo = [
    {
        id: 1,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.8,
        assistido: true
    },

    {
        id: 2,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 9.4,
        assistido: true
    },

    {
        id: 3,
        titulo: "One Piece",
        tipo: "serie",
        ano: 1999,
        generos: ["aventura"],
        nota: 9.2,
        assistido: true
    },

    {
        id: 4,
        titulo: "Clube da Luta",
        tipo: "filme",
        ano: 1999,
        generos: ["drama", "suspense"],
        nota: 8.9,
        assistido: false
    },

    {
        id: 5,
        titulo: "Dark",
        tipo: "serie",
        ano: 2017,
        generos: ["mistério", "ficção científica"],
        nota: 8.7,
        assistido: false
    },

    {
        id: 6,
        titulo: "O Senhor dos Anéis",
        tipo: "filme",
        ano: 2001,
        generos: ["fantasia", "aventura"],
        nota: 9.5,
        assistido: true
    }
];


// B.2 - ACESSO E LEITURA DOS DADOS

// Mostrando o catálogo completo
console.log(catalogo);

// Título do primeiro item
console.log("Primeiro título:", catalogo[0].titulo);

// Ano do último item
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

// Segundo gênero do terceiro item
if (catalogo[2].generos.length > 1) {
    console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
    console.log("O terceiro item possui apenas um gênero.");
}


// LISTAGEM DE TÍTULOS

console.log("===== LISTA DE TÍTULOS =====");

catalogo.forEach(item => {
    console.log(item.titulo);
});


// CÁLCULO DAS MÉDIAS

let somaNotas = 0;

catalogo.forEach(item => {
    somaNotas += item.nota;
});

const mediaNotas = somaNotas / catalogo.length;

console.log("Média geral das notas:", mediaNotas.toFixed(2));


// SOME E EVERY

// Verifica se existe algum item não assistido
const existeNaoAssistido = catalogo.some(item => item.assistido === false);

// Verifica se todos possuem nota acima de 8
const todosAcimaDeOito = catalogo.every(item => item.nota > 8);

console.log("Existe item não assistido?", existeNaoAssistido);
console.log("Todos possuem nota acima de 8?", todosAcimaDeOito);


// B.4 - SAÍDA NA TELA (DOM)

// Quantidade de filmes
const quantidadeFilmes = catalogo.filter(item => item.tipo === "filme").length;

// Quantidade de séries
const quantidadeSeries = catalogo.filter(item => item.tipo === "serie").length;

// Quantidade de não assistidos
const naoAssistidos = catalogo.filter(item => item.assistido === false).length;

// Ranking das 3 maiores notas
const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

// Div principal
const output = document.getElementById("output");

// Criando cards dos filmes/séries
const cards = catalogo.map(item => `
    
    <div class="card">

        <h3>${item.titulo}</h3>

        <p><strong>Tipo:</strong> ${item.tipo}</p>

        <p><strong>Ano:</strong> ${item.ano}</p>

        <p><strong>Gêneros:</strong> ${item.generos.join(", ")}</p>

        <p><strong>Nota:</strong> ${item.nota}</p>

        <p class="${item.assistido ? "assistido" : "naoAssistido"}">
            ${item.assistido ? "✔ Assistido" : "✖ Não assistido"}
        </p>

    </div>

`).join("");

// Inserindo tudo na tela
output.innerHTML = `

    <div class="resumo">

        <h2>Resumo do Catálogo</h2>

        <p><strong>Total de itens:</strong> ${catalogo.length}</p>

        <p><strong>Filmes:</strong> ${quantidadeFilmes}</p>

        <p><strong>Séries:</strong> ${quantidadeSeries}</p>

        <p><strong>Não assistidos:</strong> ${naoAssistidos}</p>

        <p><strong>Média geral:</strong> ${mediaNotas.toFixed(2)}</p>

        <h3>Top 3 Maiores Notas</h3>

        <ol>
            ${ranking.map(item => `
                <li>${item.titulo} - ${item.nota}</li>
            `).join("")}
        </ol>

    </div>

    <div class="catalogo">
        ${cards}
    </div>

`;