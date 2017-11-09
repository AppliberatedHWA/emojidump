
(function() {

    "use strict";

    const metaCharEl = document.getElementById("meta-char");
    const metaLabelEl = document.getElementById("meta-label");

    function handleMouseOver(event) {
        if (event.target.matches("span")) {
            metaCharEl.innerText = event.target.innerText;
            metaLabelEl.innerText = event.target.getAttribute("aria-label");
        }
    }

    // const emojis = document.querySelectorAll(".emojis span");
    // console.log(emojis);
    // for (let index = 0; index < emojis.length; index++) {
    //     emojis[index].addEventListener("mouseover", handleMouseOver);
    // }

    let emojiStringEl = document.getElementById("emoji-string");
    emojiStringEl.addEventListener("mouseover", handleMouseOver);

    document.getElementById("layout-button").addEventListener("click", () => {
        emojiStringEl.dataset.grid = !(emojiStringEl.dataset.grid == "true");

        // let layout = parseInt(emojiStringEl.dataset.layout, 10);
        // layout = layout < 2 ? layout + 1 : 0;
        // emojiStringEl.dataset.layout = layout;
        // Math.min(emojiStringEl.dataset.layout + 1, 3);
    });

    document.getElementById("size-button").addEventListener("click", () => {
        let size = parseInt(emojiStringEl.dataset.size, 10);
        size = size < 3 ? size + 1 : 0;
        emojiStringEl.dataset.size = size;
    });

    document.title = document.querySelectorAll("#emoji-string span").length;

}());
