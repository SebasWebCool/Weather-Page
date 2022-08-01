import { useEffect, useState } from 'react'
import './App.css'
import Weather from './components/Weather'

function App() {
  const [coords, setcoords] = useState()

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
  return (
    <div className="App">
      <Weather lat={coords?.lat} lon={coords?.lon} />
    </div>
  )
}

export default App
