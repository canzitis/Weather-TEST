import {
    weatherApi
} from "../api/api"

const SET_WEATHER = 'SET_WEATHER'
const SET_MEASUREMENT = 'SET_MEASUREMENT'
const SET_CITY = 'SET_CITY'


const instalState = {
    weather: null,
    city: null,
    measurement: null
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




export const getWeather = (city = "Воронеж", measurement = 'metric') => {
    return async (dispatch) => {
        const data = await weatherApi.getweather(city, measurement)
        if (data.status === 200) {
            dispatch(setStartIndex(data.data))
        }
    }

}


export default weatherReducer;