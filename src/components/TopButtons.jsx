import React from 'react';

function TopButtons({ setQuery }) {
    const cities = [

        {
            id:1,
            title: 'Stockholm',
        },
        {
            id:2,
            title: 'Kampala',
        },
        {
            id:3,
            title: 'Malmö',
        },
        {
            id:4,
            title: 'Gothenburg',
        },
        {
            id:5,
            title: 'Lund',
        },
    ];

  return (
    <div className="flex items-center justify-around my-6">
     {cities.map((city) => (
        <botton 
        key={city.id} 
        className="text-white text-lg font-medium">
            onClick={() => setQuery({ q: city.tittle })}

          {city.title}
          </botton>
     ))}
    </div>
  );
}

export default TopButtons;
