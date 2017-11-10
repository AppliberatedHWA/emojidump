/* eslint-disable func-names, one-var, no-magic-numbers, no-console */

(function () {

    "use strict";

    const emojiCells = window.$$("table:first-of-type td.rchars");
    // const emojiRows = emojiCells.map((cell) => cell.parentElement).filter((row) => row.children.length === 15);
    const emojiRows = emojiCells.map((cell) => cell.parentElement);
    console.log(emojiRows);
    const html = emojiRows.map((row) => {

        const tds = row.children;
        const shortName = tds[14].innerText;
        const char = tds[2].innerText;
        return `<i aria-label="${shortName}">${char}</i>`;

    });

    console.log(html.length);
    window.copy(html.join("\r\n"));

}());
