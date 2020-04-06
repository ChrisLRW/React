import React from "react";


function CardBody(props){
    // i feel like there is a better way
    if(props.count > 5){
        return(
            <div className="card-body">
            <p className="card-text">Click Count: {props.count}</p>
                <button className="btn btn-primary" onClick={props.handleIncrement}>
                    Increment
                </button>
                <button className="btn btn-danger" onClick={props.handleDecrement}>
                    Decrement
                </button>
            <div className="card-body">
                Congratulations
            </div>
            </div>

        )
    }
    else if (props.count <-2 ){
        return (
            <div className="card-body">
            <p className="card-text">Click Count: {props.count}</p>
                <button className="btn btn-primary" onClick={props.handleIncrement}>
                    Increment
                </button>

            </div>

        )
    }
    else{
        return (
            <div className="card-body">
                <p className="card-text">Click Count: {props.count}</p>
                    <button className="btn btn-primary" onClick={props.handleIncrement}>
                        Increment
                    </button>
                    <button className="btn btn-danger" onClick={props.handleDecrement}>
                        Decrement
                    </button>
            </div>
        )
    }
}



export default CardBody;