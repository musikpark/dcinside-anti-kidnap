// ==UserScript==
// @name         DCInside Anti-Kidnap
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Automatically enables No Repost and Realtime Best Exclusion when writing a post.
// @match        https://gall.dcinside.com/board/write/*
// @match        https://gall.dcinside.com/mgallery/board/write/*
// @match        https://gall.dcinside.com/mini/board/write/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function selectOptions() {
        // Enable No Repost if it is off.
        const pumxBtn = document.getElementById('btn_pumx');

        if (pumxBtn && !pumxBtn.classList.contains('on')) {
            pumxBtn.click();
        }

        // Enable Realtime Best Exclusion if it is off.
        const bestSwitch = document.getElementById('dc-best-switch');

        if (bestSwitch && bestSwitch.getAttribute('aria-checked') === 'false') {
            bestSwitch.click();
        }
    }

    // Run after the page has fully loaded.
    if (document.readyState === 'complete') {
        selectOptions();
    } else {
        window.addEventListener('load', selectOptions, { once: true });
    }
})();
