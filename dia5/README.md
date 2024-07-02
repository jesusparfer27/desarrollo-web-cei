### Deconstrucción de Objetos

```js
const alumno = {
    nombre: "Laura",
    edad: 23,
    asignatura: "Full Stack"
}
imprimir(alumno)

function imprimir(props) {
        // Forma tradicional / vieja
        // const edad = props.edad
        // const nombre = props.nombre;
        // const asignatura = props.asignatura;

    const nombre = "Juanito";
    //  Forma de Deconstrucción de objeto
    //  incluyendo renombrar la variable "nombre" por "miNombre" ya que la estaba usando de antes
const {edad, nombre:miNombre, asignatura} = props

console.log(`Mi nombre es ${nombre}, tengo ${edad} años, y estoy en la maderia de ${asignatura}
`);
}
```

# CommonJS y ECMAScript Modules (ESM)

En JS, los módulos son porciones de código reutilizables que se pueden importat y exportat entre diferentes archivos. Estos permiten organizar y reutilizar el código de manera eficiente. 

## CommonJS     

Fue creado para Node.Js (nuestro entorno de Backend)

- Se cargan de manera síncrona (es decir, el programa espera a que el módulo cargue antes de continuar)
- No es común pero se puede usar en el navegador con la ayuda de herramientas como Broewserify / WebPack / Parcel

```js
// ------------------
// Importación de un solo elemento
// ------------------
// archivo1.js
const mensaje="Hola Alumnos"
module.exports = mensaje; // exportamos variable

// archivo2.js
const mensaje = require("./archivo1"); // importamos SIN {} porque es una variable
console.log(mensaje); // Hola Alumnos



// ------------------
// Importación de múltiples elementos
// ------------------

// archivo1.js
const mensaje = "Hola Alumnos";
const mensaje = "Adios Alumnos";
module.exports = { mensaje1, mensaje2 }; // exportamos objeto

// archivo2.js
const { mensaje1, mensaje2 } = require("./archivo1") // importamos con {} porque es un objeto
console.log(mensaje1); // Hola Mundo
```

## ECMAScript ES6 / ESM 

Fue introducido en ECMAScript 2015 (ES6) para estandarizar los módulos de JS.
Se usa tanto para frontEnd como para el backend (Node.Js)

-   Los módulos se cargan de manera asíncrona, es decir, el programa puede continuar mientras los módulos se cargan.
    -   Soportando Navegadores modernos y en versiones reciente de NodeJs

```js
// archivo1.js
const mensaje1 = "Hola Alumnos";
export const mensaje2 = "Chau Alumnos"; // los export se importan con {}
export const mensaje3 = "volvi";
export default mensaje1; // export default, no usa llaves en el import

// archivo2.js
import mensaje1 from "./archivo1" // import default va sin llaves
import miMensaje from "./archivo1" // import mensaje1 renombrado a miMensaje
import {mensaje2, mensaje3} from "./archivo1"

console.log(mensaje1, miMensaje, mensaje2, mensaje3);
// "Hola Alumnos", "Hola Alumnos", "Chau Alumnos", "Volví"
```


Para definir que sistema utilizaremos haremos lo siguiente: 
en el backend modificamos nuestro archivo package.json usando la propiedad 

`"type"= "module"`

```json

 {
    "name": "ejemplo1",
    "type": "module",

  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "crear una version final para subir al servidor",
    "test": "echo \"Error: no test specified\" && exit 1"
    },
  }
  ```

  En el frontEnd tenemos que cambiar nuestras etiquetas de script
  ```html
  <script type="module" src="./js/mi-script.js">
    ```

    # React 

    React es una biblioteca de JS para construir interfaces de usuarios (facebook 2013)
