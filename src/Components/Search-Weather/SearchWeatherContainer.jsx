import SearchWeather from "./SearchWeather";
import { connect } from "react-redux";
import { getWeather } from "../../Redux/weather-reducer";
import React from "react";

class SearchWeatherContainer extends React.Component {
  componentDidMount() {
    this.props.getWeather();
  }
  render() {
    return <SearchWeather {...this.props} getWeather={getWeather} />;
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weatherReducerPage.weather,
    city: state.weatherReducerPage.city,
    measurement: state.weatherReducerPage.measurement,
  };
};

export default connect(mapStateToProps, { getWeather })(SearchWeatherContainer);
