const form = document.getElementById("novoItem")
const lista = document.getAnimations("lista")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    nome = ""
    quantidade= ""
})

function criaElemento (nome,quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    novoItem.classList.innerHTML = quantidade
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += nome

    lista.appendChild(novoItem)

    localStorage.setItem("nome", nome)
    localStorage.setItem("quantidade", quantidade)
}