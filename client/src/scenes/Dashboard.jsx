import React from 'react';
import TaskTables from '../components/Table/TaskTables';
import Topbar from './global/Topbar';
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col ml-20 h-screen pb-24 w-screen">
      <Topbar page="Dashboard"/>
      <div className = "flex flex-col justify-end items-end p-24 ">
        <button 
          onClick = {()=>navigate("/Order")}
          className = "bg-gray-800 text-white font-semibold border-blue-700 h-10 w-24 rounded-lg ease-in duration-300 hover:bg-white hover:text-black">Add</button>
      </div>
      <div className="flex flex-col justify-evenly ">
        <div className="flex justify-around">
          <TaskTables
            title="Your Tasks"
            order="Add Props"
            status="Finished"
            assigned="Lorenzo"
            owner="Carlos"
            subsystem="IDK"
          />
        </div> 

      </div>
    </div>
    
  );
}

export default Dashboard;