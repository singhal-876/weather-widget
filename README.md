# 🌤️ Weather App (React + OpenWeather API)

A modern and responsive Weather Application built using **React (Vite)** and **Material UI**, which fetches real-time weather data using the **OpenWeather API**.

This project demonstrates API integration, state management, conditional rendering, environment variables, and dynamic UI updates in React.

---

## 🚀 Features

- ✅ Search weather by city name
- ✅ Real-time weather data
- ✅ Dynamic weather images (Clear, Rain, Hot, Cold, Clouds, Haze, etc.)
- ✅ Error handling for invalid cities
- ✅ Secure API key using `.env`
- ✅ Responsive Material UI design
- ✅ Clean and beginner-friendly code structure

---

## 🛠️ Tech Stack

- **React (Vite)**
- **JavaScript (ES6+)**
- **Material UI**
- **OpenWeather API**
- **Unsplash Images**
- **CSS**

---

## 📂 Project Structure

```
weather-app/
│
├── .env
├── package.json
├── README.md
│
└── src/
    ├── WeatherApp.jsx
    ├── SearchBox.jsx
    ├── SearchBox.css
    ├── InfoBox.jsx
    ├── InfoBox.css
    ├── App.jsx
    ├── App.css
    └── main.jsx
```

---

## 🔄 How It Works

1. User enters a city name.
2. App calls **Geocoding API** to get latitude & longitude.
3. App uses coordinates to call **Weather API**.
4. Weather data is stored in state.
5. InfoBox dynamically updates UI.
6. Weather image changes based on conditions.

---

## 🔑 Environment Variable Setup (IMPORTANT)
Create a `.env` file in the root folder:
VITE_API_KEY=your_api_key_here

Then use it inside your component:
```
const API_KEY = import.meta.env.VITE_API_KEY;
```

⚠️ After creating `.env`, restart the development server.

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2️⃣ Install dependencies
```
npm install
```

### 3️⃣ Add your API key
Create `.env` file and add:
VITE_WEATHER_API_KEY=your_api_key_here

### 4️⃣ Start development server
```
npm run dev
```

---

## 🌤️ Weather Conditions Supported
The app dynamically changes images for:
- ☀️ Clear sky
- 🌧️ Rain
- ☁️ Clouds
- 🌫️ Haze / Mist
- 🔥 Hot weather (high temperature)
- ❄️ Cold weather (low temperature)

---

## 🧠 Concepts Used
This project covers:
- React Functional Components
- useState Hook
- Lifting State Up
- Props Passing
- Conditional Rendering
- Async/Await API Calls
- Error Handling
- Environment Variables in Vite
- Dynamic UI rendering
- Material UI Components

---

## 🛡️ Security Note
Even with `.env`, API keys in frontend apps are visible in browser network requests.

For production-level security:
- Use a backend proxy server
- Or serverless functions

---

## 💡 Future Improvements
🌍 5-day forecast
🌙 Day/Night mode
🎨 Animated weather effects
📱 Better mobile responsiveness
🔄 Loading spinner
📍 Detect user location automatically

---

## 🤝 Contributing
We welcome contributions! Here's how:

### Fork & Clone
```
git clone https://github.com/your-username/Mini_Airbnb.git
cd Mini_Airbnb
npm install
```

### Create Feature Branch
```
git checkout -b feature/your-feature-name
npm run dev
```

### Make Changes & Commit
```
git add .
git commit -m "Add feature description"
git push origin feature/your-feature-name
```

### Open Pull Request
- Go to GitHub repo
- Click "New Pull Request"
- Describe your changes
- Wait for review

### Report Bugs
- Check if issue already exists
- Provide detailed description
- Include steps to reproduce
- Mention your environment (OS, browser, Node version)

---

## 👨‍💻 Author

### Abhinav Singhal
- **📍 Location:** Dehradun, Uttarakhand, India
- **📧 Email:** [abhinavasinghal876@gmail.com](mailto:abhinavasinghal876@gmail.com)
- **💼 LinkedIn:** [Abhinav Singhal](https://www.linkedin.com/in/abhinav-singhal-069a16260)
- **🐙 GitHub:** [singhal-876](https://github.com/singhal-876)

---

<div align="center">

## Made with ❤️ by Abhinav Singhal
#### Last Updated: February 24, 2026

</div>