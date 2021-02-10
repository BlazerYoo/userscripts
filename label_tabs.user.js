// ==UserScript==
// @name         Label tabs
// @namespace    https://github.com/BlazerYoo/
// @version      0.1
// @description  Change your tab titles
// @author       BlazerYoo
// @match        http*://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener("load", () => {
        addButton("Label");
    });

    function addButton(text, onclick, cssObj) {
        cssObj = cssObj || {
            position: "fixed",
            top: "0%",
            right: "0%",
            "z-index": 1000000,
            fontSize: "12px",
            backgroundColor: "white",
            color: "#2679ff",
            border: "2px solid black",
            borderColor: "#2679ff",
            borderRadius: "5px",
            padding: "1px 1px"
        };
        let button = document.createElement("button"),
            btnStyle = button.style;
        document.body.appendChild(button);
        button.innerHTML = text;
        button.onclick = changeTitle;
        Object.keys(cssObj).forEach(key => (btnStyle[key] = cssObj[key]));
        return button;
    }

    function changeTitle() {
        var label = prompt("Label this tab as:");
        if (label != null) {
            document.title = label;
        }
    }
})();
