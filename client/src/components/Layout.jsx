import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../scenes/global/Sidebar';
import Dashboard from '../scenes/Dashboard';
import Workspace from '../scenes/Workspace';
import Inbox from '../scenes/Inbox';
import Events from '../scenes/Events';
import Order from "../scenes/Order";
import "../styles/Layout.css";
const Layout = () => {
    return (
        <div className="flex font-sans back">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/Workspace" element={<Workspace />}/>
                <Route path="/Inbox" element={<Inbox />}/>
                <Route path="/Events" element={<Events />}/>
                <Route path="/Order" element={<Order />}/>
            </Routes>
        </div>
  );
}

export default Layout;