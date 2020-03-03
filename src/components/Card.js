import React from "react";
import { Card } from "semantic-ui-react";
import ReactPlayer from "react-player";

function PhotoOfTheDay({ data }) {
  console.log(data);

  const divStyle = {
    margin: "auto"
  };

  if (!data.title) {
    return <h1>Loading...</h1>;
  } else {
    if (data.hdurl) {
      return (
        <div className="Card">
          <h1>Photo Of The Day</h1>
          <Card
            image={data.hdurl}
            header={data.title}
            meta={data.date}
            description={data.explanation}
            extra={`Copyright: ${data.copyright}`}
          />
        </div>
      );
    } else {
      if (data.media_type === "video") {
        return (
          <div className="Card">
            <h1>Photo Of The Day</h1>
            <h2>Today it's a video!</h2>
            <br></br>
            <ReactPlayer url={data.url} playing style={divStyle} />
          </div>
        );
      } else {
        return (
          <div className="Card">
            <h1>Photo Of The Day</h1>
            <Card
              image={data.url}
              header={data.title}
              meta={data.date}
              description={data.explanation}
              extra={`Copyright: ${data.copyright}`}
            />
          </div>
        );
      }
    }
  }
}

export default PhotoOfTheDay;
