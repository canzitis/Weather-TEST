import s from "./DirectionWind.module.css";

const DirectionWind = (props) => {
  const deg = props.weather.wind.deg;
  return (
    <span className={s.BoxDirectionWind}>
      {deg === 10 || deg <= 20 ? (
        <span>Северный</span>
      ) : deg === 30 || deg <= 60 ? (
        <span> Северо-восточный</span>
      ) : deg === 70 || deg <= 110 ? (
        <span> Восточный</span>
      ) : deg === 120 || deg <= 150 ? (
        <span> Юго-востоный</span>
      ) : deg === 160 || deg <= 200 ? (
        <span> Южный</span>
      ) : deg === 210 || deg <= 240 ? (
        <span> Юго-западный</span>
      ) : deg === 250 || deg <= 290 ? (
        <span> Западный</span>
      ) : deg === 300 || deg <= 330 ? (
        <span> Северо-западный</span>
      ) : deg === 340 || deg <= 360 ? (
        <span> Северный</span>
      ) : null}
    </span>
  );
};

export default DirectionWind;
