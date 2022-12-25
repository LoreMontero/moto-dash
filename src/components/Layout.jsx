import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../scenes/global/Sidebar';
import Topbar from '../scenes/global/Topbar';
import Dashboard from '../scenes/Dashboard';
import Workspace from '../scenes/Workspace';
import Inbox from '../scenes/Inbox';
import Events from '../scenes/Events';

const Layout = () => {
    return (
        <div className="flex h-screen font-sans bg-black">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/Workspace" element={<Workspace />}/>
                <Route path="/Inbox" element={<Inbox />}/>
                <Route path="/Events" element={<Events />}/>
            </Routes>
        </div>
  );
}

export default Layout;