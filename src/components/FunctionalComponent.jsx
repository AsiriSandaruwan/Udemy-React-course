import React from "react";

const FunctionalComponent = () => {
    const [data , setData ] = React.useState("react");
    
    const handleClick = (course) => {
        console.log("This is click event");
        setData(course);
    }

    return (
        <div>
            <p>This is functional component. data  = {data} </p>
            <button type="button" onClick={() => handleClick("Java")}>Click Me</button>
            <button type="button" onClick={() => handleClick("Flutter")}>Click Me</button>
        </div>
    )
}

export default FunctionalComponent;