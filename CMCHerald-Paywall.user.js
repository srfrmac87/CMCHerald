// ==UserScript==
// @name         CMC Herald Paywall Remover
// @namespace    http://tampermonkey.net/
// @version      1.0.0.2
// @description  Updated 8/6/24 for fixing Herald paywall and removing AC Press paywall
// @author       You
// @match        *.capemaycountyherald.com/*
// @match        *capemaycountyherald.com/*
// @icon         https://www.google.com/s2/favicons?domain=capemaycountyherald.com
// @grant        GM_addStyle
// @downloadURL  https://github.com/srfrmac87/CMCHerald/raw/main/CMCHerald-Paywall.user.js
// @updateURL    https://github.com/srfrmac87/CMCHerald/raw/main/CMCHerald-Paywall.user.js
// ==/UserScript==

(function() {
    'use strict';

    var timerVar = setInterval (function() {Greasemonkey_main (); }, 125);
    var trueA = false;
    var trueB = false;
    var counter = 0;

    function Greasemonkey_main () {
        if(location.hostname.match('capemaycountyherald')){
            if(document.getElementById("piano-wall")){
				document.getElementById("piano-wall").remove();// this removes paywall box that covers the article in-line *****updated 8/6/2024*****
				trueA=true;
			}
            if(trueB!=true){
                var paragraphs = document.getElementsByTagName("p");
                for(var i = 0; i < paragraphs.length; i++)// this selects all paragraph tags <p> then removes the hidden attributes from it *****updated 8/6/2024*****
                {
                    paragraphs[i].removeAttribute("hidden");
                }
                trueB=true;
            }
            counter++;
            if(trueA==true && trueB==true){ // sets clearInterval for when it completes sucessfully
                clearInterval (timerVar);
                timerVar = "";
            }
            if (counter==480){ // sets clearInterval timeout for this number in seconds...60 seconds = 480 cycles/8 times per second for above 125 ms refresh
                clearInterval (timerVar);
                timerVar = "";
            }
        } else {
            alert("This should never appear. If it does, tell Kyle.");
        }
     }
})();
