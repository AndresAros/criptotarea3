
import webbrowser
import json
from base64 import b64encode
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes

data = input("Texto a cifrar?")
data = bytes(data, 'utf-8')
vacio= bytes("", 'utf-8')
key = input("Ingrese una key de largo 16(Dejar vacio para key random)")
key = bytes(key, 'utf-8')
if key == vacio or len(key):
        key=get_random_bytes(16)

cipher = AES.new(key, AES.MODE_CFB)
ct_bytes = cipher.encrypt(data)
iv = b64encode(cipher.iv).decode('utf-8')
ct = b64encode(ct_bytes).decode('utf-8')
key = b64encode(key).decode('utf-8')
result = json.dumps({'iv':iv, 'ciphertext':ct, 'key':key})
result= str(result.encode())
print(result)


f = open('Tarea3AndresAros.html','w')

mensaje = """<html>
<head></head>
<body>
<title>E2EE</title>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>

    <p>Este sitio contiene un mensaje secreto</p>
    <div class="algorithm" id="""+iv+','+ct+','+key+""" style="display: none">
          
    </div>

</body>
</html>"""

f.write(mensaje)
f.close()

#Cambia la ruta para indicar la localización del archivo
nombreArchivo = 'file:///Users/foxhead43/' + 'Tarea3AndresAros.html'
webbrowser.open_new_tab(nombreArchivo)
