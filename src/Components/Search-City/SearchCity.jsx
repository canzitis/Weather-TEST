import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SearchCity = () => {
  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={(option) => option.city}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Выберите город"
            variant="outlined"
            className="textfield"
          />
        )}
      />
    </div>
  );
};

const top100Films = [
  { city: "Воронеж" },
  { city: "Москва" },
  { city: "Краснодар" },
  { city: "Cанкт-Петербур" },
];

export default SearchCity;
