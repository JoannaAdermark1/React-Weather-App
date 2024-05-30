import React from 'react'

function TopButtons() {

    const cities =[
        {
            id:1,
            title: 'Stockholm'
        },
        {
            id:2,
            title: 'Kampala'
        },
        {
            id:3,
            title: 'Århus'
        },
        {
            id:4,
            title: 'Cologne'
        },
        {
            id:5,
            title: 'Zella-Mehlis'
        },
    ]

  return <div className="flex item-center justify-center my-6">
    {cities.map((city)=> (

        <botton className="text-white text-lg font-medium">{city.title}</botton>

    ))}
  </div>
}

export default TopButtons
