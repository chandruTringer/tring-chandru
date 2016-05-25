var sBrowser, sUsrAg = navigator.userAgent;

if(sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
    sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") > -1) {
    sBrowser = "Microsoft Internet Explorer";
}

alert("You are using: " + sBrowser);


//for loop
var games = ["spiderman", "football", "Saab", "Ford"];
var text = "";
for (var i = 0; i < games.length; i++) {
 text += games[i] ;
var image=document.getElementsByTagName("figcaption")[i].innerHTML = text;
}