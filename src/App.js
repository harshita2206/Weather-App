import React,{useState} from 'react'
import './App.css'

function App() {

  const apiKey ='afc629d705f3c2bad1b39c845cdbbb01'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")

  const getWeather = (event) => {
    if (event.key == "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
          setCity("")
        }
      )
    }
  }

  return (
    <div className="container">
      <input
       className='input' 
       placeholder="Enter City"
       onChange={e => setCity(e.target.value)}
       value={city}
       onKeyPress={getWeather}
       ></input>
       
       {typeof weatherData.main == 'undefined' ? (
        <div>
          <p> Welcome to weather app! Enter a city to get the weather of.</p>
        </div>
       ): (
        <div className='weather-data'>
          <p className='city'>{weatherData.name}</p>
          <p className='temp'>{Math.round(weatherData.main.temp)}℃</p>
          <p className='weather'>{weatherData.weather[0].main}</p>
        </div>
        
       )}
    </div>
  )
}

export default App