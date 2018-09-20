// ==UserScript==
// @name         Pikabu userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enhance Pikabu new design
// @author       Iworb
// @match        https://pikabu.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('click', function(event){
    	var target = event.target;
        if (target.classList.contains('story__header')) {
    		event.preventDefault();
    		event.stopPropagation();
    		var contents = target.parentElement.getElementsByClassName('story__content');
    		if (contents && contents.length) {
    			var content = contents[0];
    			content.style.display = content.style.display === 'block' ? 'none' : 'block';
    		}
    	}
    });
    // Your code here...
})();