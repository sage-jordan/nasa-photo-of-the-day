import React from "react";
import { Card } from "semantic-ui-react";

function PhotoOfTheDay(props) {
  console.log(props);

  if (!props.props.title) {
    return <h1>Loading...</h1>;
  } else {
    if (props.props.hdurl) {
      return (
        <div className="Card">
          <h1>Photo Of The Day</h1>
          <Card
            image={props.props.hdurl}
            header={props.props.title}
            meta={props.props.date}
            description={props.props.explanation}
            extra={`Copyright: ${props.props.copyright}`}
          />
        </div>
      );
    } else {
      return (
        <div className="Card">
          <h1>Photo Of The Day</h1>
          <Card
            image={props.props.url}
            header={props.props.title}
            meta={props.props.date}
            description={props.props.explanation}
            extra={`Copyright: ${props.props.copyright}`}
          />
        </div>
      );
    }
  }
}

export default PhotoOfTheDay;
