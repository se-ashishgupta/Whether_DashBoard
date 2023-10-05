const API_KEY = 'bfa18c3f5697969887b9a5583d0a02bc';
import axios from "axios";

export const getWhetherData = (city = 'Delhi', units = 'metric') => async (dispatch) => {

    try {

        dispatch({ type: "getWhetherRequest" });

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=${units}`;

        const { data } = await axios.get(url);

        const res = {
            data,
        };

        dispatch({ type: "getWhetherSuccess", payload: res });


    } catch (error) {

        dispatch({ type: "getWhetherFail", payload: error.response.data.message });

    }
}

