import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherinfo, setweatherinfo] = useState({
    city: "Delhi",
    feelsLike: 24.87,
    temp: 25.5,
    tempMax: 25.5,
    tempMin: 25.5,
    humidity: 34,
    Weather: "haze",
  });

  let updateInfo = (newinfo) => {
    setweatherinfo(newinfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather Application by Ammar Arshad</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherinfo} />
    </div>
  );
}
