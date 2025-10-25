(function () {
    const vscode = acquireVsCodeApi();

    const btnNewAdr = document.querySelector('#btn-new-adr');
    const searchInput = document.querySelector('#adr-search');
    const adrList = document.querySelector('#adr-list');
    const btnImportTemplate = document.querySelector('#btn-import-template');
    const categoriaFiltros = document.querySelector('#categoria-filtros');

    let allAdrs = [];
    const colorMap = {
        "Performance": "#4CAF50",
        "Segurança": "#2196F3",
        "Usabilidade": "#9C27B0",
        "Escalabilidade": "#FF9800",
        "Manutenibilidade": "#E91E63",
        "Arquitetura": "#00BCD4",
        "Testabilidade": "#8BC34A",
        "Confiabilidade": "#FFC107"
    };


    const categoriasDisponiveis = [
        "Performance", "Segurança", "Usabilidade", "Escalabilidade",
        "Manutenibilidade", "Arquitetura", "Testabilidade", "Confiabilidade"
    ];
    let categoriaSelecionada = [];

    btnNewAdr.addEventListener('click', createAdrBtnClicked);
    btnImportTemplate.addEventListener('click', importTemplateBtnClicked);

    const filtroBtn = document.createElement('button');
    filtroBtn.className = "menu-button";
    filtroBtn.textContent = "☰ Categorias";

    const filtroDropdown = document.createElement('div');
    filtroDropdown.className = "dropdown";

    categoriasDisponiveis.forEach(categoria => {
       const label = document.createElement('label');
       label.className = 'categoria-checkbox-label';
       
       const checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.value = categoria;

       checkbox.addEventListener('change', () => {
            if(checkbox.checked){
                categoriaSelecionada.push(categoria);
            } else{
                categoriaSelecionada = categoriaSelecionada.filter(c => c !== categoria);
            }
            aplicarFiltros();
       });

       const colorCircle = document.createElement('span');
       colorCircle.className = 'color-circle';
       colorCircle.style.backgroundColor = colorMap[categoria] || "#607D8B";

       const spanText = document.createElement('span');
       spanText.textContent = categoria;

       label.appendChild(checkbox);
       label.appendChild(colorCircle);
       label.appendChild(spanText);

       filtroDropdown.appendChild(label);
    });

    filtroBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        filtroDropdown.classList.toggle('show');
    });

    document.addEventListener("click", (e) => {
	    if (!filtroBtn.contains(e.target) && !filtroDropdown.contains(e.target)) {
	    	filtroDropdown.classList.remove('show');
	    }
    });
    categoriaFiltros.appendChild(filtroBtn);
    categoriaFiltros.appendChild(filtroDropdown);

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

    function aplicarFiltros(){
        const query = searchInput.value.toLowerCase();

        let filtered = allAdrs.filter(adr => {
            const text = `${adr.id} - ${adr.nome}`.toLowerCase();
            const matchText = text.includes(query);
            const matchCategoria = categoriaSelecionada.length === 0 ||
                (adr.categorias && adr.categorias.some(c => categoriaSelecionada.includes(c.nome)));
            return matchText && matchCategoria;
        });

        renderAdrList(filtered);
    }

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

            const statusCircle = document.createElement('span');
            statusCircle.className = 'adr-status-circle';
            statusCircle.style.backgroundColor = adr.valido 
            ? 'var(--vscode-testing-iconPassed)'
            : 'var(--vscode-testing-iconFailed)';

            info.appendChild(statusCircle);
            const nameText = document.createElement('span');
            nameText.textContent = `${adr.id} - ${adr.nome}`;
            info.appendChild(nameText);
            const location = document.createElement('div');
            location.className = "adr-info-location";
            location.appendChild(info);

            if(adr.categorias && adr.categorias.length > 0){
                const categoriasContainer = document.createElement('div');
                categoriasContainer.className = "adr-categorias";

                adr.categorias.forEach(categoria => {
                    const categoriaSpan = document.createElement('span');
                    categoriaSpan.className = "adr-categoria-span";
                    categoriaSpan.textContent = categoria.nome;

                    const color = colorMap[categoria.nome] || "#607D8B";
                    categoriaSpan.style.backgroundColor = color;

                    categoriasContainer.appendChild(categoriaSpan);
                });
                location.appendChild(categoriasContainer);
            }
            
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
                if(!adr.substituido){
                    const alterBtn = document.createElement('button');
                    alterBtn.textContent = "Alterar ADR";
                    alterBtn.addEventListener("click", () => {
                        vscode.postMessage({
                            command: 'alter-adr',
                            value: adr.id
                        });
                    });
                    dropdown.appendChild(alterBtn);
                }
            
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
        
            item.appendChild(location);
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

    searchInput.addEventListener("input", aplicarFiltros);
    
    function getAdrList(){
        vscode.postMessage({
            command: 'update-list'
        });
    }

    getAdrList();

}());