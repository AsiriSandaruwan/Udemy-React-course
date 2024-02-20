import { useState } from "react";

const Form = () => {
    const [course, setCourse] = useState();
    const [desc, setDesc] = useState();

    const handleChange = (event) => {
        if(event.target.name === "course"){
            setCourse(event.target.value);
        }
        else if(event.target.name === "desc"){
            setDesc(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        console.log(course);
        console.log(desc);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="course" value={course} onChange={handleChange}></input><br></br>
                <textarea name="desc" value={desc} onChange={handleChange}></textarea><br></br>
                <input type="submit" value="save"></input>
            </form>
        </div>
    )
}

export default Form;