import React from 'react'
import WeatherForm from './components/WeatherForm'
import './index.css'

function App() {
 
  return (
    <>
    <div className='app min-h-screen bg-gradient-to-t from-blue-950 via-blue-300 to-gray-800 flex justify-center items-center flex-col'>
      <h2 className='text-3xl md:text-5xl font-semibold text-white py-4 mb-6'>Weather App</h2>
     <WeatherForm />
     </div>
    </>
  )
}

export default App
