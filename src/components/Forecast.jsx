import React from 'react'

function Forecast({ title }) {
    return (
        <div>
            <div className="flex items-center justify-center mt-6" >
                <p className='text-white font-medium uppercase'>{title}</p>
            </div>
            <hr className='my-2' />
            <div className='flex flex-row items-center justify-between
        text-white'>

                <WeatherTimestamp timestamp="10:00 PM" image="http://openweathermap.org/img/wn/01d@2x.png" temperature={32.5} />

                <WeatherTimestamp timestamp="11:00 PM" image="http://openweathermap.org/img/wn/01d@2x.png" temperature={32.5} />

                <WeatherTimestamp timestamp="12:00 PM" image="http://openweathermap.org/img/wn/01d@2x.png" temperature={32.5} />

                <WeatherTimestamp timestamp="1:00 PM" image="http://openweathermap.org/img/wn/01d@2x.png" temperature={32.5} />

                <WeatherTimestamp timestamp="2:00 PM" image="http://openweathermap.org/img/wn/01d@2x.png" temperature={32.5} />

            </div>

        </div>
    );
}


function WeatherTimestamp(props) {
    return <div className='flex-col items-center justify-center'>
        <p className='font-light text-sm'>{props.timestamp}</p>
        <img
            src={props.image}
            className='w-12 my-1'
            alt=""
        />
        <p className='font-medium'>{props.temperature}°</p>
    </div>
}

export default Forecast;
