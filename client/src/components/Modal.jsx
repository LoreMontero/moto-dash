import React from 'react';
import ReactDOM from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import DropDown from './DropDown';

function Modal({ show, close, order }) {
    const [editing, setEditing] = useState(false);
    const closeEdit = () => setEditing(false);

    //Using these arrays as examples they are not permanent.
    const testUsers = [
        { name: 'Lorenzo Montero'},
        { name: 'Bryce Sola'},
        { name: 'Adesola Ice'},
        { name: 'Jason Pomba'},
        { name: 'Carlos Almegro'}
    ];

    const progress = [
        { name: 'Not Started'},
        { name: 'In Progress'},
        { name: 'Completed'}
    ];
    
    if (!show) return null;

    return ReactDOM.createPortal(
        <div onClick={() => {close(); closeEdit();}} className="flex flex-col fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 justify-center items-center bg-black bg-opacity-30 m-0 h-full w-full z-2">
            <div onClick={e => e.stopPropagation()} className="flex flex-col rounded-2xl items-center fixed z-2 h-2/4 w-2/4 shadow-sm shadow-neutral-800 bg-neutral-900 ">
                <div className="flex justify-between items-center border-b border-neutral-700 px-5 h-16 w-full absolute mt-0 z-4 ">
                    <h2 className="text-white rubic">
                        Edit Task
                    </h2>
                    <button onClick={() => {close(); closeEdit();}} className="flex items-center text-white bg-neutral-700 hover:bg-red-600 hover:scale-110 rounded-2xl duration-300 p-2 w-fit">
                        <XMarkIcon className="w-6" />
                    </button>
                </div>
                <div className="mt-16 h-full w-full">
                    <div className="flex flex-col h-full w-full justify-evenly">
                        <div className="flex items-center justify-evenly text-white">
                            <div>Order</div>
                            <div className="flex items-center justify-center">
                                {editing ? (
                                    <div className="p-1 rounded-xl border-solid border-2 border-neutral-700 ">
                                        <input
                                            className="rounded-xl bg-transparent px-4 text-sm focus:text-white focus:outline-none"
                                            type="text"
                                            placeholder="Order" 
                                        />
                                    </div>
                                ) : (
                                    <div onClick={() => setEditing(true)} className="flex justify-center hover:bg-neutral-600 duration-200 w-44 px-4 rounded-md cursor-pointer">{order}</div>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center justify-evenly text-white">
                            <div>Status</div>
                            <div className="flex items-center justify-center w-44">
                                <DropDown data={progress}/>
                            </div>
                        </div>
                        <div className="flex items-center justify-evenly text-white">
                            <div>Owner</div>
                            <div className="flex items-center justify-center w-44">
                                <DropDown data={testUsers}/>
                            </div>
                        </div>
                        <div className="flex items-center justify-evenly text-white">
                            <div>Assigned</div>
                            <div className="flex items-center justify-center w-44">
                                <DropDown data={testUsers}/>
                            </div>
                        </div>
                        <div className="flex items-center justify-evenly text-white">
                            <div>Subsystem</div>
                            <div className="flex items-center justify-center p-2 border-solid border-2 border-neutral-700 rounded-xl">
                                <input
                                    className="rounded-xl bg-transparent px-4 text-sm focus:text-white focus:outline-none"
                                    type="text"
                                    placeholder="Subsystem Name" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-0 h-16 w-full px-5 py-3 text-white">
                    <button onClick={() => {close(); closeEdit();}} className="px-4 py-2 rounded-2xl bg-neutral-700 duration-300 hover:bg-red-600 hover:scale-110">
                        Cancel
                    </button>
                    <button onClick={close} className="px-4 py-2 rounded-2xl bg-neutral-700 duration-300 hover:bg-blue-600 hover:scale-110">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    );
}

export default Modal;