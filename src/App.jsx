import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import SearchWeatherContainer from "./Components/Search-Weather/SearchWeatherContainer";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Route patch="" render={() => <SearchWeatherContainer />} />
      </div>
    </div>
  );
};

export default App;
