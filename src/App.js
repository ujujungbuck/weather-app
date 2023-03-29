import WeatherApp from "./WeatherApp"
import WeatherProvider from "./WeatherProvider/WeatherProvider";

function App() {
  //const weatherInfo = useContext(WeatherContext)
  //console.log(weatherInfo)  데이터가 잘 찍히나 확인

  return (
   <WeatherProvider> 
    <WeatherApp/>
  </WeatherProvider>
  )
}

export default App;
