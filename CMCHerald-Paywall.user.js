// ==UserScript==
// @name         AC Press and Herald Fixer
// @namespace    http://tampermonkey.net/
// @version      0.6080001
// @description  Updated 7/22/22 for Herald Paywall Update. ***AC Press is currently still broken***
// @author       You
// @match        *.capemaycountyherald.com/*
// @match        *capemaycountyherald.com/*
// @match        *.pressofatlanticcity.com/*
// @match        *pressofatlanticcity.com/*
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
    var trueD = false;
    var trueE = false;
    var counter = 0;

    function Greasemonkey_main () {
        if(location.hostname.match('capemaycountyherald')){
            if($('div#access-offers-modal').length){
                $('div#access-offers-modal').css("display", "none"); // this removes paywall box ****updated in .54 for problems found on 12/14/21****
                trueA=true;
            }
            if($('div.modal-backdrop.fade.in').length){
                $('div.modal-backdrop.fade.in').css("display", "none"); // this removes transparency overlay ****updated in .54 for problems found on 12/14/21****
                trueB=true;
            }
            $("body").removeClass("modal-open"); // this makes the page scrollable *****always check this before removing*****
            //$("div#asset-content").css("display", "block"); // this unhides text in body of page // ****removed in version .607****
            $("div.subscriber-only").css("display", "contents"); // this unhides text in body of page // ****updated in .6 for problems found on 7/20/22****
            $("div#warning-body").css("display", "none"); // this hides text in body of page // ****updated in .54 for problems found on 3/30/22****
            $("div#asset-content").removeAttr("hidden"); // updated for another element that hides stuff

            counter++;
            if(trueA==true && trueB==true){ // sets clearInterval for when it completes sucessfully
                clearInterval (timerVar);
                timerVar = "";
            }
            if (counter==480){ // sets clearInterval time out for this number in seconds * 4 (for above 125 ms refresh)
                clearInterval (timerVar);
                timerVar = "";
            }
        } else if(location.hostname.match('pressofatlanticcity')){ // this is for AC Press ****updated 2/14/22****
            if($('.modal-backdrop.in').length){
                $('.modal-backdrop.in').css("display", "none");
                trueA=true;
            }
            if($('div#lee-subscription-wall').length){
                $('div#lee-subscription-wall').css("display", "none");
                trueB=true;
            }
            if($('.modal-backdrop.fade.in').length){
                $('.modal-backdrop.fade.in').css("display", "none");
                trueC=true;
            }
            if($('.modal-open').length){
                $('.modal-open').css("overflow", "unset");
                trueD=true;
            }

            counter++;
            if(trueA==true && trueB==true && trueC==true && trueD==true){ // sets clearInterval for when it completes sucessfully
                clearInterval (timerVar);
                timerVar = "";
            }
            if (counter==480){ // sets clearInterval time out for this number in seconds * 4 (for above 125 ms refresh)
                clearInterval (timerVar);
                timerVar = "";
            }
        } else {
            alert("this should never appear, if it does, tell kyle");
        }
        //$(".redacted-overlay").remove(); // removed 12/14/21 seemingly no longer relevant
        //$(".subscription-required").remove(); // removed 12/14/21 seemingly no longer relevant
        //$(".subscriber-only").removeClass("hide"); // removed 12/14/21 seemingly no longer relevant


        //for press of AC
        //add this CSS:
        //.modal-backdrop.in {
        //display: none;
        //}
        //div#lee-subscription-wall {
        //display: none;
        //}
        //.modal-backdrop.fade.in {
        //display: none;
        //}
        //
        //
        //Delete these:
        //.modal-open {
        //overflow: hidden; //unset?
        //}
        //
        //
        //for cmc herald - adblock blocker (on spoutoff at least)
        //} .wrapper.show {
        //     display: none;
        //}
        //
        //  ***and/or***
        //
        //div#warning-body {
        //     display: none;
        // }


    }
})();
