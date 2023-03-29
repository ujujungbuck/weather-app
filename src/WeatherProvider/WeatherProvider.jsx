import React, { createContext, useEffect, useState } from "react";


export const WeatherContext = createContext({})


function WeatherProvider({children}) {
    const [weatherInfo, setWeatherInfo] = useState({})

    const getWeatherInfo =async ()=> {
        try {
            const currentWeatherInfoAPI = 'https://api.openweathermap.org/data/2.5/weather?appid=6e7635762252321abad9cbecc31ff992&q=seoul&units=metric'
            const currentWeatherInfo = await fetch(currentWeatherInfoAPI)
            const {
                name,
                coord:{lat, lon},
                main:{temp, humidity, pressure, feels_like, temp_min, temp_max },
                sys: { sunset, sunrise },
                weather:[{main:weatherState}],
                wind:{speed, deg},
              } = await currentWeatherInfo.json()
              const hourlyWeatherInfoAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=6e7635762252321abad9cbecc31ff992&units=metric`
              const hourlyWeatherInfo = await fetch(hourlyWeatherInfoAPI)
              const {threehours} = await hourlyWeatherInfo.json()
              setWeatherInfo({
                name,
                temp,
                humidity,
                pressure,
                weatherState,
                feels_like,
                speed,
                deg,
                threehours,
                temp_min,
                temp_max,
                sunrise,
                sunset,
              })
        }catch(error){
            console.error(error)
        }
    }


    useEffect(()=>{getWeatherInfo()},[])

    return (
        <WeatherContext.Provider value={{...weatherInfo}}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider