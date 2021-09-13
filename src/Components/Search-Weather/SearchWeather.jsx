import s from "../Search-Weather/SearchWeather.module.css";
import locationImg from "../../img/location.png";
import SearchCity from "../Search-City/SearchCity";
import React, { useState } from "react";
import WeatherPictures from "./WeatherPictures";

const SearchWeather = (props) => {
  const str = props.weather.weather[0].description,
    newStr = str[0].toUpperCase() + str.slice(1);
   
  return (
    <div>
      <div className={s.header}>
        {props.searchCityMode ? (
          <div className={s.searcCity}>
            <SearchCity {...props} />
          </div>
        ) : (
          <div className={s.city}>
            <span className={s.cityName}>{props.city}</span>
            <div className={s.cityСhangeAndlocationBox}>
              <button
                onClick={() => props.activateSearchCity()}
                className={s.cityСhange}
              >
                Сменить город
              </button>
              <div className={s.location}>
                <img src={locationImg} alt="" />
                <span>Мое местоположение</span>
              </div>
            </div>
          </div>
        )}
        <div className={s.boxTemper}>
          <span>º</span>
          <div>
            {props.metricMode ? (
              <div className={s.boxTemperButton}>
                <button
                  onClick={() => props.setChangeMetric("metric", true)}
                  className={s.activeButtonMetric}
                >
                  C
                </button>
                <button
                  onClick={() => props.setChangeMetric("imperial", false)}
                  className={s.deactiveButtonMetric}
                >
                  F
                </button>
              </div>
            ) : (
              <div className={s.boxTemperButton}>
                <button
                  onClick={() => props.setChangeMetric("metric", true)}
                  className={s.deactiveButtonMetric}
                >
                  C
                </button>
                <button
                  onClick={() => props.setChangeMetric("imperial", false)}
                  className={s.activeButtonMetric}
                >
                  F
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <body>
        <div className={s.wather}>
          <div className={s.imgAndTempBox}>
            <WeatherPictures {...props} />
            <h4>{Math.round(props.weather.main.temp)}°</h4>
          </div>
          <span>{newStr}</span>
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
