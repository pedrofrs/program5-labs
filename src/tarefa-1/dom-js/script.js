document.addEventListener('DOMContentLoaded', () => {

    const itensAdicionados = new Set();

    const container = document.createElement('div');
    container.id = 'container';

    const campoTexto = document.createElement('input');
    campoTexto.type = 'text';
    campoTexto.id = 'item-input';
    campoTexto.placeholder = 'Digite um item...';

    const botaoAdicionar = document.createElement('button');
    botaoAdicionar.id = 'add-btn';
    botaoAdicionar.textContent = 'Adicionar';

    const botaoExcluir = document.createElement('button');
    botaoExcluir.id = 'delete-btn';
    botaoExcluir.textContent = 'Excluir';

    botaoExcluir.disabled = true;

    container.appendChild(campoTexto);
    container.appendChild(botaoAdicionar);
    container.appendChild(botaoExcluir);

    // Adiciona o container ao corpo da página
    document.body.appendChild(container);


    function atualizarEstadoBotaoExcluir() {
        botaoExcluir.disabled = itensAdicionados.size === 0;
    }


    function adicionarItem() {
        const texto = campoTexto.value.trim();

        if (!texto || itensAdicionados.has(texto)) {
            if (itensAdicionados.has(texto)) {
                alert('Este item já foi adicionado!');
            }
            campoTexto.value = '';
            return;
        }

        itensAdicionados.add(texto);

        let lista = document.getElementById('item-list');
        if (!lista) {
            lista = document.createElement('ul');
            lista.id = 'item-list';
            container.appendChild(lista);
        }

        const novoItem = document.createElement('li');
        novoItem.textContent = texto;
        lista.appendChild(novoItem);

        campoTexto.value = '';
        atualizarEstadoBotaoExcluir();
    }

    function excluirUltimoItem() {
        const lista = document.getElementById('item-list');

        if (!lista || !lista.lastElementChild) {
            return;
        }

        const ultimoItem = lista.lastElementChild;
        const textoDoUltimoItem = ultimoItem.textContent || '';

        itensAdicionados.delete(textoDoUltimoItem);
        lista.removeChild(ultimoItem);
        if (itensAdicionados.size === 0) {
            lista.remove();
        }
        atualizarEstadoBotaoExcluir();
    }



    botaoAdicionar.addEventListener('click', adicionarItem);
    botaoExcluir.addEventListener('click', excluirUltimoItem);

    campoTexto.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            adicionarItem();
        }
    });
});