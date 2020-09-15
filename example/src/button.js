import React from "react";

const Button = (props) => {
    return <button onClick={
     e=>{
            props.clickButton();
        }
    }>Button</button>
} 

export default Button;