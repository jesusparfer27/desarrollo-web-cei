# Repaso de JS (Métodos de Arrays)

```js
const listaColores = ["rojo", "azul", "verde"];

const listaMagos = [
    {nombre: "Harry", apellido: "Potter", casa: "Gryffindor"},
    {nombre: "Harmiony", apellido: "Granger", casa: "Gryffindor"},
    {nombre: "Draco", apellido: "Malfoy", casa: "Slytherin"},
    {nombre: "Jhon", apellido: "Deer", casa: "HufflePuff", atacar: () => {}}
]

listaMagos[3].atacar();

```
## Devolución de Métodos de arrays

.forEach()  // (NO DEVUELVE NADA)
.map()      // ARRAY (Modifica al array original)
.filter()   // ARRAY con los elementos que cumplan una función (ej: "edad > 18")
.find()     // Elemento que cumple la condición
.some()     // Booleano (true/false) - si alguno cumple la condición
.every()    // Booleano (true/false) - si TODOS cumplen la condición
.findIndex()// INDICE (num del elemento que cumpla la condición)

Ejemplo devolver una lista con todos los magos de Gryffindor
```js

    // {nombre: "Harry", apellido: "Potter", casa: "Gryffindor"}
    const magosGryffindor = listaMagos.filter(mago =>  mago.casa == "Gryffindor" );
    // si no encuentra nada, devuelve array vacío []
    const magoHarry = listaMagos.find ( mago => mago.nombre == "Harry" );

```

## Template String 
```js
'Hola soy un comentario de comillas simples'
"Hola soy un comentario con comillas dobles"
`Hola soy un comentario con template String`
```
