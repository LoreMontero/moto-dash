import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../scenes/global/Sidebar';
import Topbar from '../scenes/global/Topbar';
import Dashboard from '../scenes/Dashboard';

const Layout = () => {
    return (
        <div className="flex h-screen font-sans bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-violet-800 via-cyan-100 to-violet-100">
            <Sidebar />
            <div className="flex flex-col h-screen w-screen ml-20">
                <Topbar />
                <div className="flex flex-col justify-evenly h-screen">
                    <Routes>
                        <Route path="/" element={<Dashboard />}/>
                    </Routes>
                </div>
            </div>
        </div>
  );
}

export default Layout;