import React from 'react'
import { useDispatch } from "react-redux";
import { getData } from "../Redux/action";

export const Home=()=> {
    const dispatch=useDispatch();
    const FetchData= async () => {
        try {
            let res=await fetch(`http://localhost:8080/citylist`);
            let data = await res.json();
            dispatch(getData(data));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
      
        </div>
    )
};

export default Home
