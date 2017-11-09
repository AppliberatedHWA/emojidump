
(function() {

    "use strict";

    const metaCharEl = document.getElementById("meta-char");
    const metaLabelEl = document.getElementById("meta-label");

    function handleClick(event) {
        if (event.target.matches("span")) {
            metaCharEl.innerText = event.target.innerText;
            metaLabelEl.innerText = event.target.getAttribute("aria-label");
        }
    }

    function parseParams() {

        let query = window.location.search.substring(1);
        if (query.length) {
            // We have parameters, so try to parse them and update current settings
            let params = query.split("-").map(Number);

            let fontSize = parseInt(params[0], 10);
            if (!isNaN(fontSize)) {
                emojisElem.style.fontSize = `${fontSize}px`; 
            }

            let margin = parseInt(params[1], 10);
            if (!isNaN(margin)) {
                emojisElem.dataset.spacing = `${margin}`; 
            }

            // Number.isInteger(params[0]) ? App.clamp(params[0], 0, 16) : 16;
        }
    }

    let emojisElem = document.getElementById("emojis");

    parseParams();


    emojisElem.addEventListener("click", handleClick);

    metaCharEl.addEventListener("click", (event) => {
        document.execCommand('copy');
        metaLabelEl.innerText = "Copied to clipboard";
    });

    metaLabelEl.addEventListener("click", (event) => {
        event.preventDefault();
        let url = `https://www.google.com/search?q=${metaCharEl.innerText}`;
        window.open(url, "_blank");
    });

    document.title += `: ${document.querySelectorAll("#emojis span").length} emojis`;

}());
