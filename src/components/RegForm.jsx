import { useState } from "react";

const RegForm = () => {
    return (
        <div>
            <form>
                <label>Name :</label>
            `   <input type="text" name="name" value={name} onChange={handleChange}></input> <br></br>
                <label>Email :</label>
            `   <input type="email" name="email" value={email} onChange={handleChange}></input> <br></br>
                <label>Passord :</label>
            `   <input type="password" name="password" value={password} onChange={handleChange}></input> <br></br>
                <label>Confirm Password :</label>
            `   <input type="password" name="cpassword" value={cpassword} onChange={handleChange}></input> <br></br>
                <label>Country :</label>
            `   <input type="text" name="country" value={country} onChange={handleChange}></input> <br></br>
            </form>
        </div>
    );
};

export default RegForm;