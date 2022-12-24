import React from 'react';
import Tables from '../components/Tables';

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-evenly h-screen">
        <div className="flex justify-around">
            <Tables
              name="Add Props"
              status="Finished"
              file="N/A"
            />
            <Tables
              name="Create Database"
              status="Not Started"
              file="N/A"
            />
        </div>
        <div className="flex justify-center">
            <Tables
              name="Integrate Server"
              status="Not Started"
              file="N/A"
            />
        </div> 
    </div>
  );
}

export default Dashboard;