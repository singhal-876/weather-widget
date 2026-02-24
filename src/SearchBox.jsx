import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const GEO_URL = "http://api.openweathermap.org/geo/1.0/direct";
  const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    try {
      // Get lat & lon
      let geoResponse = await fetch(
        `${GEO_URL}?q=${city}&limit=1&appid=${API_KEY}`,
      );
      let geoData = await geoResponse.json();

      if (geoData.length === 0) {
        throw new Error("City not found");
      }

      let { lat, lon } = geoData[0];

      // Get weather
      let weatherResponse = await fetch(
        `${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
      );
      let weatherData = await weatherResponse.json();

      let result = {
        city: weatherData.name,
        temp: weatherData.main.temp,
        tempMin: weatherData.main.temp_min,
        tempMax: weatherData.main.temp_max,
        humidity: weatherData.main.humidity,
        feelslike: weatherData.main.feels_like,
        weather: weatherData.weather[0].description,
      };

      updateInfo(result);
      setError(false);
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError(true);
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    getWeatherInfo();
    setCity("");
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
}
