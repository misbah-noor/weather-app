import React from 'react';

const WeatherForm = () => {
    return(
        <div className='bg-gray-300 rounded-xl flex justify-center items-center mx-auto container flex-col w-full max-w-md p-5'>
         <div className='flex gap-2'>
           <input type="text" className='px-5 py-2 bg-gray-100 rounded' placeholder='Enter City Name' />
           <button className='text-red-800 bg-gray-100 rounded-full p-2'>Search</button>
         </div>
         <div className='flex justify-between gap-3'>
         <div className="info flex gap-2 mt-7">
            <img src="" alt="error" />
            <p>Humidity</p>
           </div>
           <div className="info flex gap-2 mt-7">
            <img src="" alt="error" />
            <p>Humidity</p>
           </div>
         </div>
         
        </div>
    )
}

export default WeatherForm;