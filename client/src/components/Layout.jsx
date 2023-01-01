import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../scenes/global/Sidebar';
import Dashboard from '../scenes/Dashboard';
import Workspace from '../scenes/Workspace';
import Inbox from '../scenes/Inbox';
import Events from '../scenes/Events';
import Order from "../scenes/Order";
import Login from "../scenes/Login"
import "../styles/Layout.css";
const Layout = () => {
    const [login, setLogin] = useState(false);
    
    return (
        <div className="flex font-sans back">
            {login !== true ?
             <>
             <Sidebar />
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/Workspace" element={<Workspace />}/>
                    <Route path="/Inbox" element={<Inbox />}/>
                    <Route path="/Events" element={<Events />}/>
                    <Route path="/Order" element={<Order />}/>
                    
                </Routes>
            </>
             :
            <>
                <Routes>
                    <Route path = "/" element = {<Login/>}/>
                </Routes>
            </>
            
            }
            
            

            
            
            
        </div>
  );
}

export default Layout;