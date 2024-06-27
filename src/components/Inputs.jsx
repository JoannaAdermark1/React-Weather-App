import React from "react";
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function Inputs({ setUnits }) {
  const handleUnitChange = (units) => {
    setUnits(units);
  };

  return ( 
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 justify-center space-x-4">
            <input 
            type="text" 
            placeholder="Search for city...."
            className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize" 
            />
        <UilSearch 
         size="25" 
         className="text-white cursor-pointer transition ease-out hover:scale-125" 
            />
        <UilLocationPoint 
         size="25" 
         className="text-white cursor-pointer transition ease-out hover:scale-125" />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center space-x-2">
        <button 
        className="text-xl text-white font-light"
        onClick={(() => handleUnitCgange('metric'))}>
          °C
          </button>

        <span className="text-xl text-white">|</span>
        <button 
        className="text-xl text-white font-light"
        onClick={() => handleUnitCgange ('imperial')}>
          °F
          </button>
      </div>
    </div>
  );
}

export default Inputs;