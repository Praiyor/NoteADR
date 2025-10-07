(function () {
    const vscode = acquireVsCodeApi();

    const adrInfoDiv = document.getElementById("adr-info");
    const adrIdInput = document.getElementById("adr-id");
    const novoAdrSelect = document.getElementById("novo-adr");
    const btnReplace = document.getElementById("btn-replace-adr");
    const btnBack = document.getElementById("btn-back");

    window.addEventListener("load", () => {
        vscode.postMessage({ command: "update-list" });
    });

    btnBack.addEventListener("click", () => {
        vscode.postMessage({ command: "main-view" });
    });

    window.addEventListener("message", (event) => {
        const message = event.data;

        switch (message.type) {
            case "update-adr-list": {
                const adrs = JSON.parse(message.data);
                const selectedId = parseInt(adrIdInput.value, 10);

                const selectedAdr = adrs.find((a) => a.id === selectedId);
                if (selectedAdr) {
                    let text = `#${selectedAdr.id} - ${selectedAdr.nome}`;
                    if(selectedAdr.substituido){
                        text += " (Substituido)";
                    }

                    adrInfoDiv.textContent = text;
                }

                novoAdrSelect.innerHTML = "";
                adrs
                    .filter((a) => a.id !== selectedId && !a.substituido)
                    .forEach((adr) => {
                        const option = document.createElement("option");
                        option.value = adr.id;
                        option.textContent = `#${adr.id} - ${adr.nome}`;
                        novoAdrSelect.appendChild(option);
                    });
                break;
            }
        }
    });

    btnReplace.addEventListener("click", () => {
        const selectedAdrId = parseInt(adrIdInput.value, 10);
        const newAdrId = parseInt(novoAdrSelect.value, 10);

        vscode.postMessage({
            command: "substite-adr",
            selectedAdr: selectedAdrId,
            substituteAdr: newAdrId,
        });
    });
})();
