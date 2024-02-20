// import "../assets/css/style.css";
import classes from "../assets/css/test.module.css";
console.log(classes);
import { useState } from "react";

const CssStyle = () => {
    const [color, setColor] = useState(false);

    const handleClick = () => {
        setColor(!color)
    }
    return (
        <div className={color ? classes.container : classes.container1}>
            <p className={color ? classes.text : classes.text1}>Css styling</p>
            <button onClick={handleClick}>Change Color</button>
        </div>
    )
}

export default CssStyle;