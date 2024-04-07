import { useRef } from "react"
import { useState } from "react"

const Stopwatch = () => {
    const[minutes, setMunites] = useState(2)
    const[sec, setSec] = useState(0)
    let initailId = useRef(null)
    console.log(initailId)
    const startTimer = () => {
        let se = sec
        initailId.current = setInterval(()=> {
            if(se == 0){
                setMunites((minutes) => minutes-1)
                se =59
                setSec(59)
            }else{
                se = 59
                setSec((s) => s-1)
            }
        },1000)
    }
    const pause = () => {
        clearInterval(initailId.current)
    }
    const reSet = () => {
        clearInterval(initailId.current)
        setMunites(2)
        setSec(0)
    }
    return(
        <div>
            <h3>stop watch</h3>
            <h3>{minutes} : {sec}</h3>
            <div>
                <button onClick={startTimer}>start</button>
                <button onClick={pause}>pause</button>
                <button onClick={reSet}>reset</button>
            </div>
        </div>
    )
}
export default Stopwatch