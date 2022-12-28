import React from 'react';
import logo from '../../logo.svg';
import { EnvelopeIcon, Squares2X2Icon, CalendarIcon, RectangleStackIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
    return (
            <div className="fixed h-screen w-20 flex flex-col bg-neutral-900">

                <div className="flex items-center justify-center h-18 w-full mt-4 absolute top-0 ">
                    <img src={logo} alt="Motorsport Logo" />
                </div>
                <div className="flex flex-col items-center p-5 m-auto gap-6">
                    <div className="flex items-center text-white hover:bg-blue-600 hover:scale-110 rounded-2xl duration-300 p-2 w-fit">
                        <a href="/">
                            <RectangleStackIcon className="w-6"/>
                        </a>
                    </div>
                    <div className="flex items-center text-white hover:bg-blue-600 hover:scale-110 rounded-2xl duration-300 p-2 w-fit">
                        <a href="/Workspace">
                            <Squares2X2Icon className="w-6"/> 
                        </a>
                    </div>
                    <div className="flex items-center text-white hover:bg-blue-600 hover:scale-110 rounded-2xl duration-300 p-2 w-fit">
                        <a href="/Inbox">
                            <EnvelopeIcon className="w-6"/>
                        </a>
                    </div>
                    <div className="flex items-center text-white hover:bg-blue-600 hover:scale-110 rounded-2xl duration-300 p-2 w-fit">
                        <a href="/Events">
                            <CalendarIcon className="w-6"/>
                        </a>
                    </div>
                </div>
            </div>
        
    );
}

export default Sidebar;