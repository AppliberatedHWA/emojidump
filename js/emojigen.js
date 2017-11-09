/* eslint-disable func-names, one-var, no-magic-numbers, no-console */

(function () {

    "use strict";

    const emojiCells = window.$$("td.rchars");
    const emojiRows = emojiCells.map((cell) => cell.parentElement).filter((row) => row.children.length === 15);
    const html = emojiRows.map((row) => {

        const tds = row.children;
        const shortName = tds[14].innerText;
        const char = tds[2].innerText;
        return `<span aria-label="${shortName}">${char}</span>`;

    });

    console.log(html.length);
    window.copy(html.join("\r\n"));

}());
