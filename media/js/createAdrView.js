(function () {
    const vscode = acquireVsCodeApi();

    const btnNewAdr = document.querySelector('#btn-create-adr');
    const inputTitulo = document.querySelector('#titulo-adr');
    const selectTemplate = document.querySelector('#template-adr');

    btnNewAdr.addEventListener('click', createAdrBtnClicked);

    function createAdrBtnClicked() {
        vscode.postMessage({
            type: 'new-adr',
            titulo: inputTitulo.value,
            template: selectTemplate.value
        });
    }

    window.addEventListener("message", event => {
        const message = event.data;
        switch (message.type) {
            case "load-templates":
                renderTemplates(message.data);
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

        templates.forEach(t => {
            const opt = document.createElement("option");
            opt.value = t.id;
            opt.textContent = t.name;
            selectTemplate.appendChild(opt);
        });
    }

}());