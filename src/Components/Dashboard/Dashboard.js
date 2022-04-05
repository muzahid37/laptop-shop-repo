import { useEffect, useState } from "react";
import BarChart from "../BarChart/BarChart";


const Dashboard = () => {
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('data.json')
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[])
    return (
        <div>
            {/* {
                data.map(singleData=><BarChart
                singleData={singleData}
                ></BarChart>)
            } */}
            <BarChart></BarChart>
        </div>
    );
};

export default Dashboard;
