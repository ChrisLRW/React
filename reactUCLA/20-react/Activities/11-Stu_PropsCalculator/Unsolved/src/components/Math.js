import React from "react";

function Math(props){
    let value;
    switch(props,operator){
        case "+":
            value = props.num1 + props.num2;
            break;
        case "-":
            value = props.num1 - props.num2;
            break;
        case "*":
            value = props.num1 * props.num2;
            break;
        case "/":
            value = props.num1 / props.num2;
            break;
        default:
            value = NaN;    
    }
    // return a span element containing the value and has a size user sets
    // the value will determine on what use selects as the equation
    return <span style= {{ fontSize: value}}> {value} </span>
}