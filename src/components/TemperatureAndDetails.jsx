import React from 'react';

function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Sunny</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="Weather Icon" className="w-20" />
        <p className="text-5xl">34°</p>
      </div>

      <div className="flex flex-col space-y-2 text-white">
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
