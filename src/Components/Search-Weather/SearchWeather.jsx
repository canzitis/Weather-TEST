import s from "../Search-Weather/SearchWeather.module.css";
import locationImg from "../../img/location.png";
import SearchCity from "../Search-City/SearchCity";
import React from "react";

const SearchWeather = (props) => {
  debugger;

  if (!props.city) {
    return (
      <div>
        <h4>ЗАГРУЗКА</h4>
      </div>
    );
  }

  return (
    <div>
      <div className={s.header}>
        <div className={s.city}>
          <span className={s.cityName}>{props.city}</span>

          <div className={s.cityСhangeAndlocationBox}>
            <button className={s.cityСhange}>Сменить город</button>
            <div className={s.location}>
              <img src={locationImg} alt="" />
              <span>Мое местоположение</span>
            </div>
          </div>
          <div className={s.searcCity}>
            <SearchCity />
            <button>Выбрать</button>
          </div>
        </div>
        <div className={s.boxTemper}>
          <span>º</span>
          <div className={s.boxTemperButton}>
            <button>C</button>
            <button>F</button>
          </div>
        </div>
      </div>
      <body>
        <div className={s.wather}>
          <img src="" alt="" />
          <span></span>
        </div>
      </body>
      <footer>
        <div className={s.stateWeather}>
          <div className={s.stateWeatherItem}>
            <h3>Ветер</h3>
            <span>
              {props.weather.wind.speed} м/с
              {props.weather.wind.deg}
            </span>
          </div>
          <div className={s.stateWeatherItem}>
            <h3>Давление</h3>
            <span> {props.weather.main.pressure} мм рт.ст.</span>
          </div>
          <div className={s.stateWeatherItem}>
            <h3>Влажность</h3>
            <span>{props.weather.main.humidity} %</span>
          </div>
          <div className={s.stateWeatherItem}>
            <h3>Вероятность дождя</h3>
            <span></span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SearchWeather;
