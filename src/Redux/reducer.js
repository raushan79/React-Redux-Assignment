// import {fetchData,addCity,addCountry } from "./action";
import {FETCH_DATA,ADD_CITY,ADD_COUNTRY} from './actionType';

export const dataReducer=(state={data:[]}, {type,payload})=>{
    switch (type) {
        case FETCH_DATA:
            return {
                ...state,
                data:payload
            };
    
        default:
            return state;
    }
}



