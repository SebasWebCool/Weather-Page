import { useEffect, useState } from 'react'
import './App.css'
import Weather from './components/Weather'

function App() {
  const [coords, setcoords] = useState()
  const [BackgroundChage, setBackgroundChage] = useState({})


  useEffect(()=>{
    const success = pos=>{
      
      const latlon={
        lat:pos.coords.latitude,
        lon:pos.coords.longitude
      }
      setcoords(latlon)
    }

    navigator.geolocation.getCurrentPosition(success)

  },[])

  // console.log(BackgroundChage);
  let background ={}

  if (BackgroundChage == "04d" || BackgroundChage == "04n"){
    background={
      backgroundImage:`url("https://thumbs.dreamstime.com/b/dark-dramatic-broken-cloud-big-rain-sun-coing-out-dark-dramatic-broken-cloud-big-rain-139112768.jpg")`
    }
  }else if(BackgroundChage == "01d" || BackgroundChage == "01n"){
    background={
      backgroundImage:`url("https://upload.wikimedia.org/wikipedia/commons/0/07/Clear_Sky.jpg")`
    }
  }else if(BackgroundChage == "02d" || BackgroundChage == "02n"){
    background={
      backgroundImage:`url("https://thumbs.dreamstime.com/b/blue-sky-looks-clean-few-clouds-223365687.jpg")`
    }
  }else if(BackgroundChage == "03d" || BackgroundChage == "03n"){
    background={
      backgroundImage:`url("https://media.gettyimages.com/photos/scattered-cumulus-clouds-picture-iddv027099?s=2048x2048")`
    }
  }else if(BackgroundChage == "05d" || BackgroundChage == "05n"){
    background={
      backgroundImage:`url("https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/rain-drops-on-window-1827098_1920.jpg?strip=1")`
    }
  }else if(BackgroundChage == "10d" || BackgroundChage == "10n"){
    background={
      backgroundImage:`url("https://s7d2.scene7.com/is/image/TWCNews/heavy_rain_jpg-11")`
    }
  }else if(BackgroundChage == "11d" || BackgroundChage == "11n"){
    background={
      backgroundImage:`url("https://s.w-x.co/thunderstormasthma.jpg")`
    }
  }else if(BackgroundChage == "13d" || BackgroundChage == "13n"){
    background={
      backgroundImage:`url("https://static01.nyt.com/images/2019/11/26/us/26holiday-weather01sub/26holiday-weather01sub-mobileMasterAt3x.jpg")`
    }
  }else if(BackgroundChage == "50d" || BackgroundChage == "50n"){
    background={
      backgroundImage:`url("https://i0.wp.com/manwrites.com/wp-content/uploads/2021/09/How-to-talk-about-the-weather-in-English-How-to-Talk-about-Foggy-Weather-in-English.jpg?resize=1200%2C676&ssl=1")`
    }
  }

  return (
    <div className="App" style={background}>
      <Weather lat={coords?.lat} lon={coords?.lon} setBackgroundChage={setBackgroundChage} />
    </div>
  )
}

export default App
