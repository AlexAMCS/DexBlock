// ==UserScript==
// @name     		DexBlock
// @version  		2	
// @grant    		none
// @author			AlexAMCS
// @updateURL 	https://raw.github.com/AlexAMCS/DexBlock/master/dexblock.user.js
// @downloadURL https://raw.github.com/AlexAMCS/DexBlock/master/dexblock.user.js
// @include 		*mangadex.org/*
// @icon				https://mangadex.org/favicon.ico
// @require 		https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// ==/UserScript==

$("img").each(function() {
  var addr = $(this).attr("src");
	if(addr.search('aprilfools') > 0) {
    $(this).parent().parent().hide();
  }
});
