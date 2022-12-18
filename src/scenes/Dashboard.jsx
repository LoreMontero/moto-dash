import React from 'react';
import Tables from '../components/Tables';

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-evenly h-screen">
        <div className="flex justify-around">
            <Tables />
            <Tables />
        </div>
        <div className="flex justify-center">
            <Tables />
        </div> 
    </div>
  );
}

export default Dashboard;