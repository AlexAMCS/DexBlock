// ==UserScript==
// @name     DexBlock
// @version  1
// @grant    none
// @include *mangadex.org/*
// @icon		https://mangadex.org/favicon.ico
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// ==/UserScript==

$("img").each(function() {
  var addr = $(this).attr("src");
	if(addr.search('aprilfools') > 0) {
    $(this).parent().parent().hide();
  }
});
