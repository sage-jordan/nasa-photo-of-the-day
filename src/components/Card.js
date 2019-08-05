import React from "react";

function Card(props){
    return (
        <div class="Card">
            <title>{props.title}</title>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <img src={props.img} alt={props.img}/>
            <p>{props.explanation}</p>
        </div>
    )
}

export default Card;