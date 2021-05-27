// ==UserScript==
// @name         Intento1
// @match        file:///Users/foxhead43/Tarea3AndresAros.html
// @include       *

// @require      https://cdn.rawgit.com/ricmoo/aes-js/e27b99df/index.js
// @grant        GM_setValue
// ==/UserScript==





//////////
var datos
datos = document.getElementsByClassName("algorithm")[0].id;

var iv,ct,iv_bytes,key,cipher,pt, text, encryptedBytes, decryptedBytes, decryptedText, iv_fin, ct_fin


var n = datos.length;
iv_fin = datos.indexOf(",", 0);
iv= datos.substring(0,iv_fin);
ct_fin = datos.indexOf(",", iv_fin+1);
ct= datos.substring(iv_fin + 1,ct_fin);
key= datos.substring(ct_fin + 1, n);
//



var aesCfb = new aesjs.ModeOfOperation.cfb(key, iv, 16);
var decryptedBytes = aesCfb.decrypt(ct);

// Convert our bytes back into text
var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
console.log(decryptedText);