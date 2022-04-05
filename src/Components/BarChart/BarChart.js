import React, { useEffect, useState } from 'react';
import { Bar, Line, LineChart, XAxis, YAxis } from 'recharts';

const BarChart = () => {
    const data=[
        {
            "month": "Mar",
            "investment": 1000,
            "sell": 241,
            "revenue": 401
        },
        {
            "month": "Apr",
            "investment": 1400,
            "sell": 423,
            "revenue": 500
        },
        {
            "month": "May",
            "investment": 1300,
            "sell": 726,
            "revenue": 600
        },
        {
            "month": "Jun",
            "investment": 1700,
            "sell": 529,
            "revenue": 700
        },
        {
            "month": "Jul",
            "investment": 1500,
            "sell": 601,
            "revenue": 550
        },
        {
            "month": "Aug",
            "investment": 1000,
            "sell": 670,
            "revenue": 600
        }
    ]
    
    
    return (
        <div>
            
            <div>
                <h2>Line Chart</h2>
            { <LineChart width={800} height={500} data={data}>
                <Line dataKey={'sell'} stroke="#8884d8"></Line>
                <Line dataKey={'revenue'} stroke='#C3602C'></Line>
                <Line dataKey={'investment'} stroke='#1E1E1E'></Line>
                <XAxis dataKey={"month"}></XAxis> 
                <YAxis></YAxis>
            </LineChart> 
            }

            </div>
          
        
        </div>

    );
};

export default BarChart;