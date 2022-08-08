import React from 'react'
import { useDispatch ,useSelector} from "react-redux";
import { fetchData } from "../Redux/action";

export const Home=()=> {
    const data=useSelector((state)=>state.data.data);
    const dispatch=useDispatch();
    const FetchData= async () => {
        try {
            let res=await fetch(`http://localhost:8080/citylist`);
            let data = await res.json();
            dispatch(fetchData(data));
        } catch (error) {
            console.log(error);
        }
    };
    FetchData();
    console.log(data);

    return (
        <div>
      
        </div>
    )
};

export default Home
