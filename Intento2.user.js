// ==UserScript==
// @name         Intento2
// @match        file:///Users/foxhead43/Tarea3AndresAros.html
// @include       *
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/aes-js/3.1.2/index.min.js
// @grant        GM_setValue
// ==/UserScript==


function encrypt(message = '', key = ''){
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}
function decrypt(iv = '',ct = '', key = ''){
    iv=atob(iv);
    ct=atob(ct);
    var cipher = AES.new(key, AES.MODE_CFB, iv=iv);
    var pt = cipher.CryptoJS.AES.decrypt(ct);
    //var code = CryptoJS.AES.decrypt(message, key);
    //var decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return pt;
}

console.log(encrypt('Hello World'));
//console.log(decrypt('U2FsdGVkX1/0oPpnJ5S5XTELUonupdtYCdO91v+/SMs='));

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

//iv=atob(iv);
//ct=atob(ct);
//cipher = CryptoJS.AES.new(key, AES.MODE_CFB, iv=iv);
//pt = cipher.CryptoJS.AES.decrypt(ct);



console.log(decrypt(iv,ct,key));

