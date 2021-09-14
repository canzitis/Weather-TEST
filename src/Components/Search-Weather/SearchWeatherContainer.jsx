import SearchWeather from "./SearchWeather";
import { connect } from "react-redux";
import {
  getWeather,
  activateSearchCityMod,
  deActivateSearchCityMod,
  activateMetricMode,
} from "../../Redux/weather-reducer";
import React from "react";
import Preloader from "../Preloader/Preloader";

class SearchWeatherContainer extends React.Component {
  componentDidMount() {
    this.props.getWeather();
  }

  activateSearchCity = () => {
    this.props.activateSearchCityMod();
  };

  deActivateSearchCity = (city) => {
    this.props.getWeather(city);
    this.props.deActivateSearchCityMod();
  };

  setChangeMetric = (metric, metricMode) => {
    this.props.getWeather(this.props.city, metric);
    this.props.activateMetricMode(metricMode);
  };

  render() {
    if (!this.props.city) {
      return <Preloader />;
    }
    return (
      <SearchWeather
        {...this.props}
        activateSearchCity={this.activateSearchCity}
        deActivateSearchCity={this.deActivateSearchCity}
        setChangeMetric={this.setChangeMetric}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weatherReducerPage.weather,
    city: state.weatherReducerPage.city,
    metricMode: state.weatherReducerPage.metricMode,
    searchCityMode: state.weatherReducerPage.searchCityMode,
  };
};

export default connect(mapStateToProps, {
  getWeather,
  activateSearchCityMod,
  deActivateSearchCityMod,
  activateMetricMode,
})(SearchWeatherContainer);
