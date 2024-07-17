import { useState, useEffect } from "react"

/**
 * 
 * @returns 
 * 
 */

export const Ejercicio1 = () => {

    const handleClick = () => { console.log("me hicieron click") }

    useEffect(() => {

        const button = document.getElementById("miBoton")
        button.addEventListener("click", handleClick);

    }, [])

    return (
        <div>
            {
                <button id="miBoton" onClick={handleClick}>Recibe tu mensaje</button>
            }
        </div>

    )
}

/**
 * 
 * @returns 
 * 
 */

export const Ejercicio2 = () => {

    const [time, setTime] = useState(0)
    const [idIntervalo, setIdIntervalo] = useState(null)


    useEffect(() => {

        document.title = `Timmer: ${time}`

        return () => {
            console.log("borrar mis intervalos", idIntervalo)
            clearInterval(idIntervalo)
        }
    }, [time])

    const startTimer = () => {
        clearInterval(idIntervalo)
        console.log("Iniciar Timer");
        const idInt = setInterval(() => {
            setTime(time => time + 1)
        }, 1000)
        console.log("CARGUE EL TIMER", idInt)

        setIdIntervalo(idInt)
    }

    const pauseTimer = () => {
        console.log("Pausar Timer", idIntervalo);
        clearInterval(idIntervalo)
    }

    const resetTimer = () => {
        console.log("Resetear Timer", idIntervalo);
        setTime(0);
        clearInterval(idIntervalo)
    }

    return (
        <div>
            <h1>Tu componente se ha renderizado en: {time} segundos</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

/**
 * 
 * @returns 
 * 
 */


export const Ejercicio3 = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        llamandoApi()
    }, [])

    const llamandoApi = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/?results')
            const responseData = await response.json()
            setData(responseData.results)
        } catch (error) {
            console.error('Hay un error en el fetching de datos')
        }
    }

    return (
        <div>
            <h2>Data information</h2>
            <div>
                {
                    data.map(user => {
                        console.log(user)

                        return (
                            <div key={user.id.value}>
                        <ul>
                            <li>
                                <p>{user.name.first} {user.name.last}</p>
                                <p></p>
                            </li>
                        </ul>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

/**
 * 
 * @returns 
 * 
 */
