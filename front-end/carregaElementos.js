const API_URL = 'http://192.168.26.41:3050/Ramais'

async function buscarRamais() {
    try {
        const resposta = await fetch(API_URL)
        
        if (!resposta.ok) {
            throw new Error(`Erro ao conectar na API: ${resposta.status}`)
        }

        const excecoes = ['9999','99999','91999','2271']

        const dados = await resposta.json()
        const dadosFiltrados = dados.filter(item => !excecoes.includes(item.id))

        renderizarDados(dadosFiltrados)


    } catch (erro) {
        const main = document.querySelector('main')
        main.removeChild(document.querySelector('.tabela-ramais'))
        main.style.paddingBottom = 0
        main.style.display = 'flex'
        main.innerHTML = '<div class="mensagem-erro"><img src="./imagens/mensagem_erro.png" alt="Mensagem de erro"></div>'
        console.error('Ocorreu um erro:', erro)
    }
}

function renderizarDados(listaDeRamais) {

    //Formata os dados de setor vindos da API
    function extrairDadosDescricao(description) {
        const partes = description.split('/')

        return {
            setor: partes[0]?.trim(),
            nome: partes[1]?.trim()
        }
    }

    //Carrega as linhas da tabela de ramais
    const linhasRamais = listaDeRamais.map(item => {
        const { setor, nome } = extrairDadosDescricao(item.description)
        if (nome){
            return `
                <tr id="${item.id}" class="row-user" data-setor="${setor.toLowerCase()}">
                    <td>
                        <div class="user">
                            <img src="./imagens/user.svg" alt="Ícone usuário">
                            <p>${nome}</p>
                        </div>
                        <div id="mobile"> <!--Elemento irá aparecer apenas no mobile-->
                            <img src="./imagens/user.svg" alt="Ícone usuário">
                            <div>
                                <p class="nome-mobile">${nome}</p>
                                <p class="setor-mobile">${setor}</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="setor">
                            <p>${setor}</p>
                        </div>
                    </td>
                    <td>
                        <div class="ramal">
                            <p>${item.id}</p>
                        </div>
                    </td>
                </tr>
            `
        }
    }).join('')

    document.getElementById('corpo-tabela-ramais').innerHTML = linhasRamais

    //Carrega as opções do select de setores
    const selectSetores = listaDeRamais.map(item =>{
        const setor = extrairDadosDescricao(item.description).setor

        if(setor) {
            return `<option value="${setor.toLowerCase()}">${setor}</option>`
        }
    })

    const selectSetoresFiltrado = [... new Set(selectSetores)].sort().join('')

    document.getElementById('input-select').insertAdjacentHTML('beforeend', selectSetoresFiltrado)
}

document.addEventListener('DOMContentLoaded', buscarRamais)