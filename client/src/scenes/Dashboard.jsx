import React from 'react';
import TaskTables from '../components/Table/TaskTables';
import Topbar from './global/Topbar';

const Dashboard = () => {
  return (
    <div className="flex flex-col ml-20 h-screen w-screen">
      <Topbar page="Dashboard"/>
      <div className="flex flex-col justify-evenly h-screen">
        <div className="flex justify-around">
          <TaskTables
            title="Your Tasks"
            order="Add Props"
            status="Finished"
            owner="N/A"
          />
        </div> 
      </div>
    </div>
    
  );
}

export default Dashboard;