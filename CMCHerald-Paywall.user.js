// ==UserScript==
// @name         Herald Fixer
// @namespace    http://tampermonkey.net/
// @version      0.54
// @description  Updated 12/14/21 for new paywall
// @author       You
// @match        https://www.capemaycountyherald.com/*
// @icon         https://www.google.com/s2/favicons?domain=capemaycountyherald.com
// @grant        GM_addStyle
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @downloadURL  https://github.com/srfrmac87/CMCHerald/raw/main/CMCHerald-Paywall.user.js
// @updateURL    https://github.com/srfrmac87/CMCHerald/raw/main/CMCHerald-Paywall.user.js
// ==/UserScript==

(function() {
    'use strict';

    var $ = window.jQuery;
    var timerVar = setInterval (function() {Greasemonkey_main (); }, 125);
    var trueA = false;
    var trueB = false;
    var trueC = false;
    var counter = 0;

    function Greasemonkey_main () {
        if($('div#access-offers-modal').length){
            $('div#access-offers-modal').css("display", "none"); // this removes paywall box ****updated in .54 for problems found on 12/14/21****
            trueA=true;
        }
        if($('div.modal-backdrop.fade.in').length){
            $('div.modal-backdrop.fade.in').css("display", "none"); // this removes transparency overlay ****updated in .54 for problems found on 12/14/21****
            trueB=true;
        }
        $("body").removeClass("modal-open"); // this makes the page scrollable *****always check this before removing*****
        $("div#asset-content").css("display", "block"); // this unhides text in body of page // ****updated in .54 for problems found on 12/14/21****

        counter++;
        if(trueA==true && trueB==true){ // sets clearInterval for when it completes sucessfully
            clearInterval (timerVar);
            timerVar = "";
        }
        if (counter==240){ // sets clearInterval time out for this number in seconds * 4 (for above 250 ms refresh)
            clearInterval (timerVar);
            timerVar = "";
        }

        //$(".redacted-overlay").remove(); // removed 12/14/21 seemingly no longer relevant
        //$(".subscription-required").remove(); // removed 12/14/21 seemingly no longer relevant
        //$(".subscriber-only").removeClass("hide"); // removed 12/14/21 seemingly no longer relevant

    }
})();
