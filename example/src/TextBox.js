import React,{useState} from "react";

const TextBox = () => {
//how to use state hook ?
    const [register, handleChange] = useState({
        FirstName:"",
        LastName:""
    });
    return <div>
        <input type="text" 
        name="FirstName"
        value={register.FirstName} 
        onChange={e => {
            handleChange({...register,FirstName:e.target.value})
        }}
    />
    <input type="text" 
        name="LastName"
        value={register.LastName} 
        onChange={e => {
            handleChange({...register,LastName:e.target.value})
        }}
    />
        <h6>{register.FirstName}{register.LastName}</h6>
    </div>
}

export default TextBox