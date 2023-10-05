import React from 'react';
import { useSelector } from 'react-redux';
import { TbCloudSearch } from "react-icons/tb";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
import { FiWind } from "react-icons/fi";

const Details = ({ unit }) => {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const { loading, data, message, error } = useSelector(state => state.whether);

    const ash = {
        "coord": {
            "lon": 77.2167,
            "lat": 28.6667
        },
        "weather": [
            {
                "id": 721,
                "main": "Haze",
                "description": "haze",
                "icon": "50d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 34.05,
            "feels_like": 32.72,
            "temp_min": 34.05,
            "temp_max": 34.05,
            "pressure": 1007,
            "humidity": 26
        },
        "visibility": 4500,
        "wind": {
            "speed": 3.6,
            "deg": 290
        },
        "clouds": {
            "all": 0
        },
        "dt": 1696497721,
        "sys": {
            "type": 1,
            "id": 9165,
            "country": "IN",
            "sunrise": 1696466745,
            "sunset": 1696509210
        },
        "timezone": 19800,
        "id": 1273294,
        "name": "Delhi",
        "cod": 200
    };


    const { main: { feels_like, temp_min, temp_max, pressure, humidity }, wind: { speed } } = data;


    const detailsData = [
        {
            title: "Feels Like",
            icon: <TbCloudSearch />,
            val: feels_like,
            unit: unit == 'metric' ? "°C" : "°F"
        },
        {
            title: "Max Temp",
            icon: <HiArrowSmUp />,
            val: temp_max,
            unit: unit == 'metric' ? "°C" : "°F"
        },
        {
            title: "Min Temp",
            icon: <HiArrowSmDown />,
            val: temp_min,
            unit: unit == 'metric' ? "°C" : "°F"
        },
        {
            title: "Pressure",
            icon: <MdCompress />,
            val: pressure,
            unit: unit == 'metric' ? "pascal" : "psi"
        },
        {
            title: "Humidity",
            icon: <MdOutlineWaterDrop />,
            val: humidity,
            unit: "%"
        },
        {
            title: "Wind Speed",
            icon: <FiWind />,
            val: speed,
            unit: unit == 'metric' ? "km/h" : "Mp/h"
        }

    ];
    return (


        <div className='h-full grid sm:grid-cols-2 md:grid-cols-3 py-4  gap-4'>

            {
                detailsData.map((item, index) => (
                    <div className='bg-black bg-opacity-40 rounded-lg px-2 lg:px-10 py-4 flex flex-col items-center justify-center gap-4'>
                        <p className='text-lg font-medium text-gray-400'>{item.title}</p>
                        <div className=' flex items-center gap-2'>
                            <figure className=' text-4xl text-gray-400'> {item.icon}</figure>
                            <div className='flex gap-1'>
                                <span className='text-2xl font-semibold text-white'>{item.val}</span>
                                <span className=' text-lg text-white'>{item.unit}</span>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>


    );
};

export default Details;