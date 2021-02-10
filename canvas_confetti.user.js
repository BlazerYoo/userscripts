// ==UserScript==
// @name         Canvas Confetti
// @namespace    https://github.com/BlazerYoo
// @version      0.1
// @description  Add confetti to Canvas assignments
// @author       BlazerYoo
// @match        https://*.instructure.com/courses/*/assignments/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (window.location.href.substr(-15) != "/?confetti=true") {
        window.location.href += "/?confetti=true";
    }
})();
