import React from "react";
import {Card} from 'semantic-ui-react';

function PhotoOfTheDay(props){
    console.log(props);
    return (
        <div class="Card">
            <h1>Photo Of The Day</h1>
            <Card 
            image={props.props.hdurl}
            header={props.props.title}
            meta={props.props.date}
            description={props.props.explanation}
            extra={props.props.copyright}
            />
        </div>
    )
}

export default PhotoOfTheDay;