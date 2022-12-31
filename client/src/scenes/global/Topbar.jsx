import React from 'react';
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/solid';
import motorHead from '../../motorHead.jpg'; 

const Topbar = (props) => {
    return (
        <div className="flex fixed items-center justify-evenly border-b border-gray-800 mt-0 h-16 bg-black w-screen">
            <div className="flex justify-center p-5">
                <h1 className=" text-white rubic font-bold text-xl">{props.page}</h1>
            </div>
            <div className="relative p-2 border-solid border-2 border-gray-800 rounded-2xl">
                <span className="absolute inset-y-0 flex items-center px-3 pointer-events-none">
                    <MagnifyingGlassIcon className="fill-gray-700 w-5"/> 
                </span>
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="rounded-10 bg-transparent pr-4 pl-10 text-sm focus:text-white focus:outline-none"
                    />
            </div>
            <div className="flex justify-center items-center gap-2">
                <button className="p-2 bg-gray-800 rounded-2xl hover:bg-blue-600 hover:scale-110 duration-300">
                    <BellIcon className="fill-white w-5"/>
                </button>
                <button className="flex items-center gap-2 pr-2 duration-300 hover:bg-blue-600 hover:scale-110 round-2xl bg-gray-800 rounded-full">
                    <img src={motorHead} alt="pfp" className="w-10 ml-0 rounded-full" />
                    <span className="text-gray-300 rubic">Lorenzo</span>
                </button>
            </div>
        </div>
    );
}

export default Topbar;