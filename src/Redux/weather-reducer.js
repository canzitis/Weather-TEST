import {
    weatherApi
} from "../api/api"

const SET_WEATHER = 'SET_WEATHER'
const SET_MEASUREMENT = 'SET_MEASUREMENT'
const SET_CITY = 'SET_CITY'
const ACTIVATE_SEARCH_CITY_MODE = "ACTIVATE_SEARCH_CITY_MODE"
const DE_ACTIVATE_SEARCH_CITY_MODE = "DE_ACTIVATE_SEARCH_CITY_MODE"
const CHANGE_METRIC_MODE = "CHANGE_METRIC_MODE"


const instalState = {
    weather: null,
    city: null,
    metricMode: true,
    searchCityMode: false
}

const weatherReducer = (state = instalState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                weather: action.weather,
                    city: action.weather.name,
            }
            case SET_MEASUREMENT:
                return {
                    ...state,
                    measurement: action.measurement,
                }
                case SET_CITY:
                    return {
                        ...state,
                        city: action.newCity,
                    }
                    case ACTIVATE_SEARCH_CITY_MODE:
                        return {
                            ...state,
                            searchCityMode: true,
                        }

                        case DE_ACTIVATE_SEARCH_CITY_MODE:
                            return {
                                ...state,
                                searchCityMode: false,
                            }
                            case CHANGE_METRIC_MODE:
                                return {
                                    ...state,
                                    metricMode: action.metricMode,
                                }
                                default:
                                    return state
    }
}


export const setStartIndex = (weather) => {
    return {
        type: SET_WEATHER,
        weather,
    }
}



export const changeMeasurement = (measurement) => {
    return {
        type: SET_MEASUREMENT,
        measurement,
    }
}

export const changeCity = (newCity) => {
    return {
        type: SET_CITY,
        newCity,
    }
}


export const activateSearchCityMod = () => {
    return {
        type: ACTIVATE_SEARCH_CITY_MODE,
    }
}


export const deActivateSearchCityMod = () => {
    return {
        type: DE_ACTIVATE_SEARCH_CITY_MODE,
    }
}

export const activateMetricMode = (metricMode) => {
    debugger;
    return {
        type: CHANGE_METRIC_MODE,
        metricMode
    }
}




export const getWeather = (city = "Воронеж", measurement = 'metric') => {
    return async (dispatch) => {
        const data = await weatherApi.getweather(city, measurement)
        if (data.status === 200) {
            dispatch(setStartIndex(data.data))
        }
    }
}


export default weatherReducer;