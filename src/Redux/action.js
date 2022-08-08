import {FETCH_DATA,ADD_CITY,ADD_COUNTRY} from './actionType';

export const fetchData=(allData)=>({
    type:FETCH_DATA,
    payload:allData

});
export const addCity=(city)=>({
    type:ADD_CITY,
    payload:city

});

export const addCountry=(country)=>({
    type:ADD_COUNTRY,
    payload:country

});

