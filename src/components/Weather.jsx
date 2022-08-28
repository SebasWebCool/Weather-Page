import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';

const Weather = ({lat,lon,setBackgroundChage}) => {

    
    const [DataWeather, setDataWeather] = useState()
    const [Temp, setTemp] = useState()
    const [IsCellsius, setIsCellsius] = useState(true)
    const [IsLoading, setIsLoading] = useState(true)
    


    useEffect(() =>{
        if(lat){

            const APIkey=`93194ca6e2a516c3482cfb6fcc53761e`
            const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`

            axios.get(URL)
            .then(res =>{
                setDataWeather(res.data)
                const temp = {
                    celsius : `${Math.round(res.data.main.temp - 273.15)} °C`,
                    farenheit:`${Math.round((res.data.main.temp - 273.15) * 9 /5 +32)} °F`
                }
                setTemp(temp)
                setIsLoading(!IsLoading)
                setBackgroundChage(res.data.weather[0].icon)

            })
            .catch(err => err)
        }
    },[lat,lon])
        
        const ChangeTemp = () => setIsCellsius(!IsCellsius)

    // console.log(DataWeather);

    if(IsLoading){
       return <Loading/>
    }else{

        return (
        <div>
          <article className='cont_weather'>
              <h1>Weather App</h1>
              <h2>{DataWeather?.name}, {DataWeather?.sys.country}</h2>
              
              <div className='cont_inf'>
                  <div className='cont_img'>
                      <img src={DataWeather && ` http://openweathermap.org/img/wn/${DataWeather?.weather[0].icon}@4x.png`} alt="" />
                  </div>
                  <div className='items_list'>
                      <h3 className='descrip'>"{DataWeather?.weather[0].description}"</h3>
                      <ul className='ulist'>
                          <li>
                              <b>Wind Speed</b> {DataWeather?.wind.speed} m/s
                          </li>
                          <li>
                              <b>Clouds</b> {DataWeather?.clouds.all} %
                          </li>
                          <li>
                              <b>Pressure</b> {DataWeather?.main.pressure} hPa
                          </li>
                      </ul>
                  </div>
              </div>
                  <h2 className='temp'>{IsCellsius ? Temp?.celsius : Temp?.farenheit} </h2>
                  <button className='btn_change' onClick={ChangeTemp}>{IsCellsius ? 'Change to Fareheit': `Change to Celsius`}</button>
          </article>
        </div>
        )
    }
}

export default Weather