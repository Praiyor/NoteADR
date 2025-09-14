(function () {
    const vscode = acquireVsCodeApi();

    const btnSearch = document.querySelector('#btn-search');
    const btnNewAdr = document.querySelector('#btn-new-adr');
    const searchInput = document.querySelector('#adr-search');
    const adrList = document.querySelector('#adr-list');

    btnSearch.addEventListener('click', searchBtnClicked);
    btnNewAdr.addEventListener('click', createAdrBtnClicked);

    function searchBtnClicked() {
        vscode.postMessage({
            command: 'search-adr',
            value: searchInput.value
        });
    }

    function createAdrBtnClicked() {
        vscode.postMessage({
            command: 'create-adr',
        });
    }

    window.addEventListener("message", async (event) => {
        const message = event.data;
        switch (message.type) {
            case "update-adr-list":
                renderAdrList(message.data);
                break;
        }
    });

    function renderAdrList(adrs) {
        adrList.innerHTML = "";
        if(!adrs){
            return;
        }

        adrs.forEach(element => {
            // implementar dps
        });
    }

}());