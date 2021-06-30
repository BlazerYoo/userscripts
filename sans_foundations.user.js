// ==UserScript==
// @name         Sans Foundations Video Link
// @namespace    https://github.com/BlazerYoo
// @version      0.1
// @description  Extract video link from Sans Foundations
// @author       BlazerYoo
// @match        http*://sans-foundations.com/internal/course/*/*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && event.key === 'v') {
            getLinkV();
        } if (event.ctrlKey && event.key === 'a') {
            getLinkA();
        }
    });

    function getLinkV() {
        if (document.getElementsByTagName("source").length == 0) {
            alert("No video here");
        } else {
            var url = document.getElementsByTagName("source")[0].src;
            navigator.clipboard.writeText(url)
                .then(() => {
                if (window.confirm("Video link found and copied to clipboard.\n\n" + url + "\n\nClick OK to open video.")) {
                    window.open(url, '_blank');
                }})
                .catch((error) => { alert(`Copy failed! ${error}`) })
        }
    }

    function getLinkA() {
        if (document.getElementsByTagName("audio").length == 0) {
            alert("No audio here");
        } else {
            var url = document.getElementsByTagName("audio")[0].src;
            navigator.clipboard.writeText(url)
                .then(() => {
                if (window.confirm("Audio link found and copied to clipboard.\n\n" + url + "\n\nClick OK to open audio.")) {
                    window.open(url, '_blank');
                }})
                .catch((error) => { alert(`Copy failed! ${error}`) })
        }
    }
})();
