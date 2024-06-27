# titulo principal

## titulo secundario

### subtitulo secundario

# Terminal

```bash
# Listar archivos y directorios
ls
dir

# Crear un directorio
mkdir nombre-carpeta

# Cambiar de directorio
cd nombre-carpeta

# Crear nuevo archivo
touch nombre-archivo
type null > nombre-archivo

# Posibles opciones para crear archivos (en Windows)
type null > nombre-archivo.ext
echo. > nombre_del_archivo.txt

# Movimiento entre carpetas
cd nombre-carpeta

# ir a la rai< de nuestro sistema
cd / 
# En windows me puedo mover entre discos usando C: ,D: , X: ...
C:

# Volver una o varias carpetas
cd ..
cd ../../../../
cd ../usuarios/ejemplo/mi-carpeta

# Limpiar la terminal 
clear
Command+K #Shortcut de teclado

```html
<!-- siempre referenciamos desde ./      -->
<script src="./js/mis-script.js">

```

# Que es Node?

Node.js es un entorno de ejecución de Javascript que permite ejecutar código en el servidor (backend)

```bash

# Ejecutar un archivo de JS
node mi-script.js
```

# ¿Que es NPM ?

NPM (Node Package Manager) es el administrador de paquetes que viene por defecto en Node. Los paquetes son módulos de código que se pueden instalar en nuestros proyectos. Por ejemplo `express`, `axios`, `nodemon`, `chalk`, `moment`, etc.

```bash
# Crear mi archivo package.json
npm init
npm init -y

# Instalar un paquete nuevo
npm install nombre-paquete
npm i nombre-paquete
# Podemos definir la version que queremos: ej 1.0.0
npm i nombre-paquete@1.0.0 
# Flag -g instala el paquete en todo el servidor y proyectos
npm i nombre-paquete -g
# Flag -D para instalar dependencias de desarrollador
npm i nombre-paquete --save-dev
npm i nombre-paquete -D


# Desinstalar un paquete
npm uninstall-paquete

# Actualizar los paquetes a su última version
npm update
npm update nombre-paquete
```js

Nuestro package.json posee la habilidad de correr SCRIPTS.
Podemos crear nuestros propios scripts, como por ej: `start, dev, test, etc`
 {
    "name": "ejemplo1",

  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
  }

  // Y se ejecuta con "npm run start" o "npm run dev"
  ```

