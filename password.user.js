// ==UserScript==
// @name         Password visibility
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Show/hide password
// @author       You
// @match        http*://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let exist_pw = 0;
    let pw_element;
    var input_elements = document.getElementsByTagName("input");
    for (var i = 0; i < input_elements.length; i++) {
        if (input_elements[i].type.toLowerCase() == "password") {
            exist_pw = 1;
            pw_element = input_elements[i];
            console.log(pw_element);
        }
    }

    if (exist_pw == 1) {
        let pw = 0;
        window.addEventListener("load", () => {
            addButton("Show");
        });

        function addButton(text, onclick, cssObj) {
            cssObj = cssObj || {
                position: "fixed",
                top: "2%",
                right: "15%",
                "z-index": 10000000000000000,
                fontSize: "20px",
                backgroundColor: "white",
                color: "#4CAF50",
                border: "2px solid black",
                borderColor: "#4CAF50",
                borderRadius: "5px",
                padding: "7px 15px"
            };
            let button = document.createElement("button"),
                btnStyle = button.style;
            document.body.appendChild(button);
            button.innerHTML = text;
            button.onclick = showPass;
            Object.keys(cssObj).forEach(key => (btnStyle[key] = cssObj[key]));
            return button;
        }

        function showPass() {
            if (pw == 0) {
                if (pw_element.type.toLowerCase() == "password") {
                    pw_element.setAttribute("type", "text");
                    this.style.color = "#af4c4c";
                    this.style.borderColor = "#af4c4c";
                    this.innerHTML = "Hide";
                    pw = 1;
                    console.log("changed password to text");
                }
            } else {
                if (pw_element.type.toLowerCase() == "text") {
                    pw_element.setAttribute("type", "password");
                    this.style.color = "#4CAF50";
                    this.style.borderColor = "#4CAF50";
                    this.innerHTML = "Show";
                    pw = 0;
                    console.log("changed text to password");
                }
            }
        }
    }
})();
