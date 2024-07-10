import { useState } from "react"

const Timer = () => {

    const [start, setStart] = useState(false)
    const [resume, setResume] = useState(false)
    const [stop, setStop] = useState(false)

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)

    const handleStart = () => {
        if (setStart === 0) {
            setTimeout()
        }
    }

    const handleResume = () => {

    }

    const handleStop = () => {

    }

    return (
        <>
            <div className="Timer">

            </div>  

            <div className="buttonsTimer">
                <button onClick={handleStart}

                >Comenzar

                </button>
                <button onClick={handleResume}

                >Reiniciar

                </button>
                <button onClick={handleStop}

                >Parar

                </button>
            </div>
        </>
    )
}

export default Timer