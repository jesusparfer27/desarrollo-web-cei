import { useState } from "react"

const Timer = () => {

    const [time, setTime] = useState({seconds: 0, minutes: 0})
    const [timer, setTimer] = useState(null)

    const startTimer = () => {
        const newTimer = setInterval(() => {
            setTime(prevTime => {
                let {seconds, minutes} = prevTime

                seconds +=1;
                if(seconds > 59) {
                    minutes += 1;
                    seconds = 0;
                }

                return {seconds, minutes}
            })
        },1000);
        setTimer(newTimer)
    }

    const restart = () => {
        clearInterval(timer);
        setTime ({seconds: 0, minutes:0});
    }

    const stop = () => {
        clearInterval(timer)
    }

    const start = () => {
        startTimer()
    }

    return (
        <>
            <div className="divStyle">
                <h1>{time.minutes < 10 ? "0" + time.minutes : time.minutes} : {time.seconds < 10 ? "0" + time.seconds : time.seconds}</h1>
                <button onClick={restart}>Restart</button>
                <button onClick={stop}>Stop</button>
                <button onClick={start}>Start</button>
                {/* <button onClick={start}>Start</button> */}
            </div>
        </>
    )
}

export default Timer