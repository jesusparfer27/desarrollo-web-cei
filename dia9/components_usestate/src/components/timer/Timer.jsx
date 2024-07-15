import { useEffect, useState } from "react"

const Timer = () => {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)

var timer;
    useEffect(() => {

            setSeconds(seconds + 1)
         
            if (seconds > 59) {
                setMinutes( + 1)
                setSeconds(0)
            }

    }, [1000])



    return (
        <>
            <div className="divStyle">
                {minutes} : {seconds}
                <button onClick={(e)}>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        </>
    )
}

export default Timer