import React from 'react';
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from '@iconscout/react-unicons';

function TemperatureAndDetails({ weather }) {
    return (
        <div>
            <div className="flex items-center justify-center py-6 
            text-xl text-cyan-300">
                <p>{weather.details}</p>
            </div>

            <div className="flex flex-row items-center justify-between
           text-white py-3">
                <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt="Weather Icon"
                    className="w-20"
                />
                <p className="text-5xl">{weather.temp.toFixed()}°</p>
                <div className="flex flex-col space-y-2">

                    <div className='flex font-light text-sm items-center 
        justify-center'>
                        <UilTemperature size={18} className="mr-1" />
                        Real feel:
                        <span className="font-medium ml-1">{weather.feels_like.toFixed()}°</span>
                    </div>

                    <div className='flex font-light text-sm items-center 
        justify-center'>
                        <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className="font-medium ml-1">{weather.humidity.toFixed()}%</span>
                    </div>

                    <div className='flex font-light text-sm items-center 
        justify-center'>
                        <UilWind size={18} className="mr-1" />
                        Wind:
                        <span className="font-medium ml-1">{weather.speed.toFixed()} km/h</span>
                    </div>
                </div>
            </div>
            

            <div className='flex flex-row items-center justify-center 
     space-x-4 text-white text-sm py-3'>
                
                <DayKeyInfo title="Rise" text={formatToLocalTime(weather.sunrise, weather.timezone, "hh:mm a")}>
                    <UilSun />
                </DayKeyInfo>
                <DayKeyInfo title="Set" text={formatToLocalTime(weather.sunset, weather.timezone, "hh:mm a")}>
                    <UilSunset />
                </DayKeyInfo>
                <DayKeyInfo title="High" text={`${weather.temp_max.toFixed()}°`}>
                    <UilArrowUp />
                </DayKeyInfo>
                <DayKeyInfo title="Low" text={`${weather.temp_min.toFixed()}°`}>
                    <UilArrowDown />
                </DayKeyInfo>
            </div>
        </div>
    );
}

function DayKeyInfo({ title, text, children }) {
    return (
        <div className="flex items-center justify-center">
            {children}
            <p className="font-light">
                {title}: <span className='font-medium ml-1'>{text}</span>
            </p>
        </div>
    );
}

function formatToLocalTime(epochTime, timezone, format) {
    const date = new Date(epochTime * 1000);
    return date.toLocaleTimeString('en-US', { timeZone: timezone, hour12: true, hour: 'numeric', minute: 'numeric' });
}

export default TemperatureAndDetails;

