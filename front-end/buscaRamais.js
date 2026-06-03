const input = document.getElementById("input-texto")
const select = document.getElementById("input-select")

input.addEventListener("input", (ev) => {
    const linhas = document.querySelectorAll(".row-user")
    const busca = ev.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    linhas.forEach(linha => {
        const nome = linha.querySelector(".user p").textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const ramal = linha.id

        if (nome.includes(busca) || ramal.includes(busca)) {
            linha.style.display = ''
        } else {
            linha.style.display = 'none'
        }
    })
})

select.addEventListener("change", (ev) => {
    const linhas = document.querySelectorAll(".row-user")
    const setorSelecionado = ev.target.value.toLowerCase()

    linhas.forEach(linha => {
        const setorPessoa = linha.getAttribute('data-setor')

        if (setorSelecionado === 'todos' || setorSelecionado === setorPessoa) {
            linha.style.display = ''
        } else {
            linha.style.display = 'none'
        }
    })
})