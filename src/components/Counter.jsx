import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }

    const sub = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <p>This is the count : {count}</p>
            <button onClick={add}>Add</button>
            <button onClick={sub}>Subtract</button>
        </div>
    )
}

export default Counter;