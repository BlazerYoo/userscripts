// ==UserScript==
// @name         Unlock study.com
// @namespace    https://github.com/BlazerYoo
// @version      0.1
// @description  Unhide all blurred content in study.com
// @author       BlazerYoo
// @match        https://study.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        let hidden_list = document.getElementsByClassName("hidden");
        for (let i = 0; i < hidden_list.length; i++) {
            hidden_list[i].classList.remove("hidden");
        }
    }, false);
})();
