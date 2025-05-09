import React, { useState ,useEffect, useRef} from 'react';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import sun_icon from '../assets/sun.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';
import { IoIosSearch } from "react-icons/io";


const WeatherForm = () => {

    const inputRef = useRef()
    const [weatherData, setWeatherData] = useState(false);

    const allIcons = {
    "01d": sun_icon,
    '01n': sun_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
    }

    const accessKey = '54b21a84341f2770b9dfa84fde6f45e2';

    const search = async(city) => {

        if(city === ""){
            alert('Enter City Name');
            return;
          }
       
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${accessKey}&units=metric`;

            const response = await fetch(url);
            const data = await response.json();

            if(!response.ok){
                alert(data.message);
                return;
            }

            console.log(data);
            const icon = allIcons[data.weather[0].icon]
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })
        } catch (error) {
            setWeatherData(false);
            console.error("Fetch error:", error);
        }
    }; 

    useEffect(()=>{
        search("New York");
    },[])

    return(
        <div className='bg-[#fafafac2] shadow-3xl rounded-xl flex justify-center items-center mx-12 container flex-col w-full max-w-sm md:max-w-md p-5'>
         <div className='flex gap-2'>
           <input ref={inputRef} type="text" className='input-text px-5 py-3 w-65 bg-gray-100 rounded-full outline-none' placeholder='Enter City Name' />
           <button className='input-text outline-none text-gray-700 bg-gray-100 rounded-full cursor-pointer border-none py-2 px-3' onClick={()=>search(inputRef.current.value)}><IoIosSearch size={20} /></button>
         </div>
        {weatherData?
        <>
        <img src={weatherData.icon} className='main-image w-60 py-8' alt="location" />
            <p className='text-gray-800 text-5xl'>{weatherData.temperature}  c</p>
            <p className='text-gray-800 text-2xl mt-4'>{weatherData.location}</p>
            <div className='weather-data flex justify-between gap-20'>
            <div className="info flex items-center gap-2 mt-7">
            <img src={humidity_icon} className='w-[28px] h-[28px]' alt="" />
            <div>
            <p>{weatherData.humidity}</p>
            <span>Humidity</span>
            </div>
           </div>
           <div className="info flex items-center gap-2 mt-7">
            <img src={wind_icon} className='w-[28px] h-[28px]' alt="" />
            <div>
            <p>{weatherData.windSpeed}km/h</p>
            <span>Wind Speed</span>
            </div>
           </div>
         </div>
        </>  
        :
        <>
        
        </>}
            
         
        </div>
    )
}

export default WeatherForm;