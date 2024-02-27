import React, { useState, useEffect } from 'react';

import { FaCaretLeft } from 'react-icons/fa';

import { PiFlowerLotusBold } from "react-icons/pi";
function Meteo() { 
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('Bafoussam'); // Default location (change if needed)
  const [inputVal, setInputVal] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    
  };
  const handleClose = () => {
    setIsOpen(false);
  
  };
  useEffect(() => {

    const fetchWeather = async () => {
      const API_KEY = 'cd26690c3801e21ac5bfc572e324de1e'; // Replace with your API key
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('petite erreur survenir')
      }
      
    };

    fetchWeather();
  }, [location]); // Refetch data when location changes

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('inputVal')

    setLocation(name);

  };

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  const { main, wind, weather } = weatherData; 
  return (
    <>
    <div className="App">
       <div className="head">
      <div className="lop">
      <div className="logo">
      <PiFlowerLotusBold />  sivay
      </div>
      <div className="back">
      <FaCaretLeft />
      </div>

      </div>
      
    </div>
    <div className='total'>
      <div className='weather'>
      <h1>Weather in {location}</h1>
      <form onSubmit={handleSearch}>
      <input type="text" placeholder="Search location" name='inputVal' />
      <button type='submit'> valider </button>

      </form>
    
      {weatherData && ( // Display data only if available
        <div>
          <p>Temperature: {main.temp}°C</p>
          <p>weather: {weather[0].description} will arise</p>
          <p>Humidity: {main.humidity}%</p>
          <p>Wind Speed: {wind.speed} m/s</p>
          {/* Add additional weather elements if desired */}
        </div>
      )}

      </div>
      <div className='earth'>
      <h1>Earth {location}</h1>
  
        <div>
          <p><span>quality:</span>{inputVal != "douala" ? "bonne" : "mauvais"}</p>
          <p><span>genre:</span> {inputVal != "douala" ? "sec" : "humide"}</p>
          <p><span>ph:</span>{inputVal != "douala" ? "7 a 8" : "3 a 5"}</p>
          <p><span>type: </span> {inputVal != "douala" ? "sableux" : "boueux"}</p>
          {/* Add additional weather elements if desired */}
        </div>
      

      </div>
    </div>
     <div className='possible'>
      <h1>Possible Foods to grow </h1>
      <div className='food'>
        <span><b>Name </b>: Tomate <button onClick={handleOpen}>advices</button></span>
        <span><b>Name </b>: Manioc <button onClick={handleOpen}>advices</button></span>
        <span><b>Name </b>: Macabo <button onClick={handleOpen}>advices</button></span>
        <span>regarde plus  </span>

      </div>
     </div>
    </div>
    {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h1>advices</h1>
            <div>
              <b> Tomate </b>
            </div>
            <div>
            <b>Climate:</b> Tomatoes thrive in warm, sunny locations with temperatures between 65-85°F (18-29°C).
            </div>
            <div>
           <b> Seeds or seedlings:</b> You can either start from seeds indoors 6-8 weeks before the last frost or buy seedlings from a nursery.
            </div>
            <div>
            <b>Soil:</b> Choose well-draining, fertile soil with a pH between 6.0-7.0. Amend the soil with compost or organic matter beforehand.
            </div>
            <div>
            <b>Containers or garden bed:</b> You can grow tomatoes in containers or directly in a garden bed.
            </div>
            <span>plus..</span>
          </div>
          <button className="close-button" onClick={handleClose}>
            X
          </button>
        </div>
      )}
    </>
  );
}

export default Meteo;
