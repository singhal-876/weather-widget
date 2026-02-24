import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {

  // Different Weather Images
  const CLEAR_IMG =
    "https://images.unsplash.com/photo-1592698117601-70c282996f9c?w=800";

  const RAIN_IMG =
    "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?w=800";

  const HOT_IMG =
    "https://images.unsplash.com/photo-1535304902304-466bec5bf8e7?w=800";

  const COLD_IMG =
    "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=800";

  const CLOUD_IMG =
    "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800";

  const HAZE_IMG =
    "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?w=800";

  // Decide image based on weather
  let imageURL = CLEAR_IMG; // default

  if (info.weather.toLowerCase().includes("rain")) {
    imageURL = RAIN_IMG;
  } else if (info.temp >= 35) {
    imageURL = HOT_IMG;
  } else if (info.temp <= 10) {
    imageURL = COLD_IMG;
  } else if (info.weather.toLowerCase().includes("cloud")) {
    imageURL = CLOUD_IMG;
  } else if (
    info.weather.toLowerCase().includes("haze") ||
    info.weather.toLowerCase().includes("mist")
  ) {
    imageURL = HAZE_IMG;
  }

  return (
    <div className="InfoBox">
      <h1>Weather Info - {info.weather}</h1>

      <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
        <CardMedia
          sx={{ height: 160 }}
          image={imageURL}
          title="weather image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5">
            {info.city}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <p>Temperature = {info.temp}°C</p>
            <p>Humidity = {info.humidity}%</p>
            <p>Min Temp = {info.tempMin}°C</p>
            <p>Max Temp = {info.tempMax}°C</p>
            <p>
              The weather can be described as <b>{info.weather}</b> and
              feels like {info.feelslike}°C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
