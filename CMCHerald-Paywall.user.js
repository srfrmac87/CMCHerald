// ==UserScript==
// @name         Herald Fixer
// @namespace    http://tampermonkey.net/
// @version      0.52
// @description  try to take over the world!
// @author       You
// @match        https://www.capemaycountyherald.com/*
// @icon         https://www.google.com/s2/favicons?domain=capemaycountyherald.com
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_addStyle
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @downloadURL  https://github.com/srfrmac87/CMCHerald/raw/main/CMCHerald-Paywall.user.js
// @updateURL    https://github.com/srfrmac87/CMCHerald/raw/main/CMCHerald-Paywall.user.js
// ==/UserScript==

(function() {
    'use strict';

    var $ = window.jQuery;
    // This was original event listener:
    //     window.addEventListener ("load", timeOutFunction, false);
    //     function timeOutFunction () {
    //         setTimeout(Greasemonkey_main, 1500);
    //     }

    var timerVar = setInterval (function() {Greasemonkey_main (); }, 125);
    var trueA = false;
    var trueB = false;
    var trueC = false;
    var counter = 0;

    function Greasemonkey_main () {
        if($('#promo-designer-modal-custom-pop').length){
            $('button.close').click();
            trueA=true;
            //alert("A length = " + $('body.tp-modal-open').length);
        }
        if($('#subscription-modal').length){
            $('button.close').click();
            trueB=true;
            //alert("A length = " + $('body.tp-modal-open').length);
        }
        $("body").removeClass("modal-open");
        $(".redacted-overlay").remove();
        $(".subscription-required").remove();
        $(".subscriber-only").removeClass("hide");

        counter++;
        if(trueA==true && trueB==true){ // sets clearInterval for when it completes sucessfully
            clearInterval (timerVar);
            timerVar = "";
            //alert("complete, all true = " + counter);
        }
        if (counter==240){ // sets clearInterval time out for this number in seconds * 4 (for above 250 ms refresh)
            clearInterval (timerVar);
            timerVar = "";
            //alert("timerVar counter done");
        }
        //cant get javascript natural to work.
        //         document.getElementsByClassName('tp-modal-open')[0].style.overflow = "scroll !important";
        //         document.querySelectorAll("body.tp-modal-open")[0].style.overflow = "scroll !important";
        //         document.querySelectorAll("body.tp-modal-open")[0].classList.remove(".tp-modal-open");
        //         document.getElementsByClassName('tp-modal')[0].style.display = "none !important";
        //         document.getElementsByClassName('tp-backdrop tp-active')[0].style.display = "none !important";
        //         alert("test");

    }

})();
