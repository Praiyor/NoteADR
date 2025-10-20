(function () {
    const vscode = acquireVsCodeApi();

    const btnNewAdr = document.querySelector('#btn-new-adr');
    const searchInput = document.querySelector('#adr-search');
    const adrList = document.querySelector('#adr-list');
    const btnImportTemplate = document.querySelector('#btn-import-template');

    let allAdrs = [];

    btnNewAdr.addEventListener('click', createAdrBtnClicked);
    btnImportTemplate.addEventListener('click', importTemplateBtnClicked);

    function createAdrBtnClicked() {
        vscode.postMessage({
            command: 'create-adr',
        });
    }

    function importTemplateBtnClicked() {
        vscode.postMessage({
            command: 'import-template'
        });
    }

    window.addEventListener("message", async (event) => {
        const message = event.data;
        switch (message.type) {
            case "update-adr-list":
                allAdrs = JSON.parse(message.data);
                renderAdrList(allAdrs);
                break;
        }
    });

    function renderAdrList(adrs) {
        adrList.innerHTML = "";
        if (!adrs || adrs.length === 0) {
            adrList.innerHTML = "<p>Nenhum ADR encontrado.</p>";
            return;
        }
    
        const adrMap = new Map();
        adrs.forEach(a => adrMap.set(a.id, a));
    
        const renderItem = (adr, isChild = false) => {
            const item = document.createElement('div');
            item.className = isChild ? "adr-item adr-child" : "adr-item";
        
            const info = document.createElement('div');
            info.className = "adr-info";
            info.textContent = `${adr.id} - ${adr.nome}`;
            
            if (adr.substituido) {
                info.innerHTML = `<span class="adr-substituido">${adr.id} - ${adr.nome} (Substituído)</span>`;
            }
        
            const actions = document.createElement('div');
            actions.className = "adr-actions";
        
            const viewBtn = document.createElement('button');
            viewBtn.textContent = "Visualizar";
            viewBtn.addEventListener("click", () => {
                vscode.postMessage({
                    command: 'view-adr',
                    value: adr.id
                });
            });
        
            actions.appendChild(viewBtn);
        
            if (!isChild) {
                const menuBtn = document.createElement('button');
                menuBtn.className = "menu-button";
                menuBtn.innerHTML = "⋮";
            
                const dropdown = document.createElement('div');
                dropdown.className = "dropdown";
            
                const alterBtn = document.createElement('button');
                alterBtn.textContent = "Alterar ADR";
                alterBtn.addEventListener("click", () => {
                    vscode.postMessage({
                        command: 'alter-adr',
                        value: adr.id
                    });
                });
            
                const categoriesBtn = document.createElement('button');
                categoriesBtn.textContent = "Categorias";
                categoriesBtn.addEventListener("click", () => {
                    vscode.postMessage({
                        command: 'categorias-adr',
                        value: adr.id
                    });
                });
            
                const replaceBtn = document.createElement('button');
                replaceBtn.textContent = "Substituir ADR";
                replaceBtn.addEventListener("click", () => {
                    vscode.postMessage({
                        command: 'replace-adr',
                        value: adr.id
                    });
                });
            
                dropdown.appendChild(alterBtn);
                dropdown.appendChild(categoriesBtn);
                dropdown.appendChild(replaceBtn);
            
                menuBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    dropdown.classList.toggle("show");
                });
            
                document.addEventListener("click", () => {
                    dropdown.classList.remove("show");
                });
            
                actions.appendChild(menuBtn);
                item.appendChild(dropdown);
            }
        
            item.appendChild(info);
            item.appendChild(actions);
        
            adrList.appendChild(item);
        };
    
        adrs.forEach(adr => {
            renderItem(adr);
        
            if (adr.substituido && adr.substituidoPor) {
                const substituto = adrMap.get(adr.substituidoPor);
                if (substituto) {
                    renderItem(substituto, true);
                }
            }
        });
}

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filtered = allAdrs.filter(adr => {
            const text = `${adr.id} - ${adr.nome}`.toLowerCase();
            return text.includes(query);
        });
        renderAdrList(filtered);
    });
    
    function getAdrList(){
        vscode.postMessage({
            command: 'update-list'
        });
    }

    getAdrList();

}());