import "./WeatherForecast.css"
import WeatherIcon from "./WeatherIcon"
import WeatherData from "./WeatherData"

function WeatherForecast({ day, img, imgAlt, conditions, time }) {
  return (
    <div className="weather">
      <h2>Day of the Week: {day}</h2>
      <img src={img} alt={imgAlt} />
      <p><span>conditions: </span>current weather conditions: {conditions}</p>
      <p><span>time: </span>time of day: {time}</p>

      <WeatherData day={day} conditions={conditions} time={time}/>
      <WeatherIcon img={img} imgAlt={imgAlt}/>
    </div>
  )
}

export default WeatherForecast
