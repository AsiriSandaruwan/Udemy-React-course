import { useState,useEffect } from "react";
import Counter from "./Counter";

const UseEffectCom = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter((oldCounter) => oldCounter + 1);
    }

    useEffect(() => {
        console.log("call this function in every render");
    })

    useEffect(() => {
        console.log("call this function in initial render")
    },[]) 
    
    useEffect(() => {
        console.log("call this function in new render")
    }, [counter])

    return (
        <div>
            <p>UseEffect example</p>
            <button onClick={handleClick}>Click counter</button>
            <p>test </p>
            <p>counter : {counter}</p>
        </div>
    )
}

export default UseEffectCom;