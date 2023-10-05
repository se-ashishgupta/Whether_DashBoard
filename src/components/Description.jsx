import React from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader';

const Description = ({ unit }) => {
    // Function to get the name of day
    function getDayFullName(num) {
        switch (num) {
            case 0:
                return "Sunday";

            case 1:
                return "Monday";

            case 2:
                return "Tuesday";

            case 3:
                return "Wednesday";

            case 4:
                return "Thursday";

            case 5:
                return "Friday";

            case 6:
                return "Saturdat";

            default:
                return "Don't Know";
        }
    }

    // Function to get the name of Month
    function getMonthFullName(num) {
        switch (num) {
            case 0:
                return "Jan";
            case 1:
                return "Feb";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "Aug";
            case 8:
                return "Sept";
            case 9:
                return "Oct";
            case 10:
                return "Nov";
            case 11:
                return "Dec";

            default:
                return "Don't Know";
        }
    }

    // Function to get the Day Time
    function getDayTime(hour) {
        if (hour > 5 && hour < 10) {
            return "Morning";
        } else if (hour > 10 && hour < 16) {
            return "Afternoon";
        } else if (hour > 16 && hour < 22) {
            return "Evening";
        } else {
            return "Night";
        }
    }

    //Extract Date
    const date = new Date();
    const day = date.getDay();
    const exactDay = getDayFullName(day);
    const exactDMonth = getMonthFullName(date.getMonth());
    const exactYear = date.getFullYear();
    const exactMinute = date.getMinutes();
    const exactHour = date.getHours();
    const exactDayTime = getDayTime(exactHour);


    const { loading, data, message, error } = useSelector(state => state.whether);


    return (
        <div className='bg-black bg-opacity-20 lg:w-[30%] shadow-sm shadow-white rounded-lg p-4 flex flex-col items-center justify-around gap-6'>

            {

                loading ? <Loader /> : <>
                    {/* Whether icon  */}
                    <figure className='w-[10rem] -mb-10'>
                        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="logo" className='w-full h-auto' />
                    </figure>

                    {/* Whether Details  */}
                    <div className='flex items-center flex-col'>
                        <div className='flex'>
                            <p className='text-6xl text-yellow-400 font-bold'>{data.main.temp}</p>
                            <span className=' text-3xl text-white'>{unit == 'metric' ? "°C" : "°F"}</span>
                        </div>

                        <p className=' text-[#FF006B] text-xl font-bold'>{data.weather[0].main}</p>
                    </div>

                    {/* Date  */}
                    <div className=' text-center text-gray-400'>
                        <p>{`${day}-${exactDMonth}-${exactYear}`}</p>
                        <p>{`${exactDay}, ${exactHour}: ${exactMinute} ${exactHour >= 12 ? "PM" : "AM"}`}</p>
                        <p>{exactDayTime}</p>
                    </div>

                    {/* City Name */}
                    <h1 className=' text-4xl text-white  font-extrabold '>{data.name}</h1>
                </>
            }

        </div>
    );
};

export default Description;