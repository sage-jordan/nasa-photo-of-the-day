import React from "react";
import { Card } from "semantic-ui-react";

function PhotoOfTheDay(props) {
  console.log(props);

  if (!props.props) return <h3>Loading...</h3>;

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
}

export default PhotoOfTheDay;
