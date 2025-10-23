(function () {
    const vscode = acquireVsCodeApi();

    const adrIdInput = document.querySelector('#adr-id');
    const categoriaList = document.querySelector('#categoria-list');
    const backBtn = document.querySelector('#btn-back');
    let allCategorias = [];
    let adrCategorias = [];
    let selectedAdrId = null;

    backBtn.addEventListener('click', () => {
        vscode.postMessage({ command: 'main-view' });
    });

    window.addEventListener("message", async (event) => {
        const message = event.data;
        switch (message.type) {
            case "update-categoria-list":
                const data = message.data;
                allCategorias = data.categorias;
                adrCategorias = data.adrCategorias;
                selectedAdrId = data.adrId;
                renderCategoriaList(allCategorias, adrCategorias);
                break;
        }
    });

    function renderCategoriaList(categorias, adrCategorias) {
        categoriaList.innerHTML = "";

        if (!categorias || categorias.length === 0) {
            categoriaList.innerHTML = "<p>Nenhuma categoria encontrada.</p>";
            return;
        }

        categorias.forEach(categoria => {
            const item = document.createElement('div');
            item.className = "categoria-item";

            const name = document.createElement('span');
            name.textContent = categoria.nome;

            const btn = document.createElement('button');
            updateButtonState(btn, categoria.id);

            btn.addEventListener("click", () => {
                const isSelected = adrCategorias.includes(categoria.id);
                
                if (isSelected) {
                    vscode.postMessage({
                        command: 'remove-categoria',
                        adrId: selectedAdrId,
                        categoriaId: categoria.id,
                    });
                    adrCategorias = adrCategorias.filter(id => id !== categoria.id);
                } else {
                    vscode.postMessage({
                        command: 'add-categoria',
                        adrId: selectedAdrId,
                        categoriaId: categoria.id,
                    });
                    adrCategorias.push(categoria.id);
                }
            });

            item.appendChild(name);
            item.appendChild(btn);
            categoriaList.appendChild(item);
        });
    }

    function updateButtonState(btn, categoria) {
        if (adrCategorias.includes(categoria)) {
            btn.textContent = "Remover";
            btn.className = "remove-btn";
        } else {
            btn.textContent = "Selecionar";
            btn.className = "select-btn";
        }
    }

    function getCategoriaList(adrId) {
        vscode.postMessage({ command: 'get-categoria-list', adrId });
    }

    getCategoriaList(parseInt(adrIdInput.value));
})();
