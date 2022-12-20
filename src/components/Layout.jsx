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
        <div className="flex h-screen font-sans bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-violet-800 via-cyan-100 to-violet-100">
            <Sidebar />
            <Topbar />
            <div className="flex flex-col justify-evenly ml-20 h-screen w-screen">
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/Workspace" element={<Workspace />}/>
                    <Route path="/Inbox" element={<Inbox />}/>
                    <Route path="/Events" element={<Events />}/>
                </Routes>
            </div>
        </div>
  );
}

export default Layout;