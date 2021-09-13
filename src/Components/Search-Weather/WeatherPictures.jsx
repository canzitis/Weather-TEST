import cloudImg from '../../img/sky-condition/cloud.png'
import rainImg from '../../img/sky-condition/rain.png'
import sunnyImg from '../../img/sky-condition/sun.png'
import strom from '../../img/sky-condition/strom.png'
import s from "./SearchWeather.module.css";

const WeatherPictures = (props) => {
  
  const main = props.weather.weather[0].main;
  return (
    <div className={s.cloudsBlock}>
      {main === "Clear" ? (
        <img src={sunnyImg} alt="" />
      ) : main === "Rain" ? (
        <img src={rainImg} alt="" />
      ) : main === "Clouds" ? (
        <img src={cloudImg} alt="" />
      ) : main === "Thunderstorm" ? (
        <img src={strom} alt="" />
      ) : null}
    </div>
  );
};

export default WeatherPictures;
