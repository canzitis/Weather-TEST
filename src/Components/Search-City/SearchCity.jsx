import React from "react";
import Select from "react-select";

const SearchCity = (props) => {
  const dataCity = [
    { value: "Воронеж", label: "Воронеж" },
    { value: "Москва", label: "Москва" },
    { value: "Краснодар", label: "Краснодар" },
    { value: "Санкт-Петербург", label: "Санкт-Петербург" },
    { value: "Крым", label: "Крым" },
    { value: "Пермь", label: "Пермь" },
    { value: "Волгоград", label: "Волгоград" },
    { value: "Саратов", label: "Саратов" },
    { value: "Тюмень", label: "Тюмень" },
    { value: "Томск", label: "Томск" },
    { value: "Оренбург", label: "Оренбург" },
    { value: "Кемерово", label: "Кемерово" },
    { value: "Киров", label: "Киров" },
    { value: "Липецк", label: "Липецк" },
    { value: "Тула", label: "Тула" },
    { value: "Чебоксары", label: "Чебоксары" },
    { value: "Севастополь", label: "Севастополь" },
    { value: "Челябинск", label: "Челябинск" },
  ];
  return (
    <Select
      placeholder="Выберите город"
      options={dataCity}
      onChange={(e) => props.deActivateSearchCity(e.value)}
    />
  );
};

export default SearchCity;
