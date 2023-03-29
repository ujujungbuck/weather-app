import React from "react";
import { 
    WiDayThunderstorm,
    WiDaySnow,
    WiDayCloudy,
    WiDayRain,
    WiDust,
    WiDaySprinkle,
    WiNa,
    WiDaySunny,
     } from "react-icons/wi"

function CurrentWeatherIcon({weatherState,...props}) {
  switch(weatherState){
    case "ThunderStorm":
        return <WiDayThunderstorm {...props} />
    case "Snow":
        return <WiDaySnow {...props} />
    case "Clouds":
        return <WiDayCloudy {...props}/>
    case "Rain":
        return <WiDayRain {...props}/>
    case "Dust":
        return <WiDust {...props}/>
    case "Haze":
        return <WiDust {...props}/>
    case "Smoke":
        return <WiDust {...props}/>
    case "Fog":
        return <WiDust {...props}/>
    case "Ash":
        return <WiDust {...props}/>
    case "Squall":
        return <WiDust {...props}/>
    case "Sprinkle":
        return <WiDaySprinkle {...props}/>
    case "Clear":
        return <WiDaySunny {...props}/>
    default:
        return <WiNa {...props} />
  }
}

export default CurrentWeatherIcon