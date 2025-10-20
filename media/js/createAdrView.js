(function () {
    const vscode = acquireVsCodeApi();

    const btnNewAdr = document.querySelector('#btn-create-adr');
    const inputTitulo = document.querySelector('#titulo-adr');
    const selectTemplate = document.querySelector('#template-adr');
    const btnBack = document.getElementById("btn-back");

    btnNewAdr.addEventListener('click', createAdrBtnClicked);

    btnBack.addEventListener("click", () => {
        vscode.postMessage({ command: "main-view" });
    });

    function createAdrBtnClicked() {
        const titulo = inputTitulo.value?.trim();
        if(!titulo){
            vscode.postMessage({
                command: 'show-error',
                text: 'Informe um título para criar um ADR'
            });
            return;
        }
        
        vscode.postMessage({
            command: 'new-adr',
            titulo: titulo,
            templateId: selectTemplate.value
        });
    }

    window.addEventListener("message", event => {
        const message = event.data;
        switch (message.type) {
            case "load-templates":
                renderTemplates(JSON.parse(message.data));
                break;
        }
    });

    function renderTemplates(templates) {
        selectTemplate.innerHTML = "";
        if (!templates || templates.length === 0) {
            const opt = document.createElement("option");
            opt.value = "default";
            opt.textContent = "Nenhum template encontrado";
            selectTemplate.appendChild(opt);
            return;
        }

        templates.forEach(template => {
            const opt = document.createElement("option");
            opt.value = template.id;
            opt.textContent = `${template.id} - ${template.nome}`;
            selectTemplate.appendChild(opt);
        });
    }

    function getTemplates(){
        vscode.postMessage({
            command: 'load-templates',
        });
    }
    getTemplates();

}());