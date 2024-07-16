## Hook useEffect

Te permite realizar efectos secundarios (ejecutar código) en tus componentes funcionales. En otras palabras, nos permite ejecutar código después se que el componente se renderiza.

## Para que se usa? 

1. Realizar peticiones a APIs (Aplication Programming Interface)
2. Manipular el DOM de manera directa (cambiar el title, crear elements, etc.)
3. Configurar suscripciones o temporizadores (crear/quitar eventListeners, manejas setInterval)

## Sintaxis básica

```js
// primer atributo mi funcion, 2ndo atributo el array de dependencias
useEffect( () => {
// Código que se ejecutará despues de renderizar (componentDidMount / componentDidUpdate)

// OPCIONAL
return () => {
    // Código que se ejecutará al desmontar el componente (componentWillUnmount)
}

}, [count, count2, status])

```

## La función de cleanUp 

La función que retornamos dentro de useEffect se llama función de limpieza/celanUp. Esta función se ejecuta:

1. Antes de quitar el componente (similar a componentWillUnmount)
2. Antes de ejecutar el efecto de la siguiente renderización, si el efecto se ejecuta mas de una vez.

Es util para: 
- Cancelar suscripciones
- Limpiar temporizadores
- Liberar recursos ya no necesitamos

## Tips / puntos clave para recordar

- Se ejecuta despues de cada renderización.
- El array de dependencia controla cúando se vuelve a ejecutar. 
- La función de cleanUp es crucial para prevenir memory leaks y comportamientos inesperados
- useEffect es una herramienta versatil para remplazar todos los métodos de ciclos de vida de los componentes de Clase