
(function () {

    "use strict";

    const metaCharElem = document.getElementById("meta-char");
    const metaLabelEl = document.getElementById("meta-label");

    function handleClick(event) {
        if (event.target.matches("i")) {
            metaCharElem.innerText = event.target.innerText;
            metaLabelEl.innerText = event.target.getAttribute("aria-label");
        }
    }

    function handleDocumentCopy(event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", metaCharElem.innerText);
            metaLabelEl.innerText = "Copied to clipboard";
        }
    }

    function handleCopyButtonClick() {
        document.execCommand('copy');
    }

    function handleSearchButtonClick() {
        let url = `https://www.google.com/search?q=${metaCharElem.innerText}`;
        window.open(url, "_blank");
    }

    function parseParams() {

        let query = window.location.search.substring(1);
        if (query.length) {
            // We have parameters, so try to parse them and update current settings
            let params = query.split("-").map(Number);

            let fontSize = parseInt(params[0], 10);
            if (!isNaN(fontSize)) {
                emojiDumpElem.style.fontSize = `${fontSize}px`;
            }

            let margin = parseInt(params[1], 10);
            if (!isNaN(margin)) {
                emojiDumpElem.dataset.spacing = `${margin}`;
            }

            // Number.isInteger(params[0]) ? App.clamp(params[0], 0, 16) : 16;
        }
    }

    let emojiDumpElem = document.getElementById("emojidump");

    parseParams();


    emojiDumpElem.addEventListener("click", handleClick);

    document.getElementById("copy-button").addEventListener("click", handleCopyButtonClick);
    document.getElementById("search-button").addEventListener("click", handleSearchButtonClick);

    document.addEventListener("copy", handleDocumentCopy);

    document.title += `: ${document.querySelectorAll("#emojidump i").length} emojis`;

}());
