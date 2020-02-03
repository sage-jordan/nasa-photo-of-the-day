import React from "react";
import DatePicker from "react-date-picker";
import Card from "./Card";

export default function DatePhoto() {
  const [data, setData] = useState({});
  const [date, setDate] = useState(new Date());

  const onChange = date => setDate({ date });

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=wsIfZQBWeTafkOWECuHwkAJ60NVRXblh3bZMvibg&date=${date}`
      )
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => console.log(`In Axios: ${err.message}`));
  }, [date]);

  return (
    <div className="date-photo">
      <h2>Pick a date to see the Photo of the Day</h2>
      <DatePicker onChange={onChange} value={date} />
      <Card props={data} />
    </div>
  );
}
