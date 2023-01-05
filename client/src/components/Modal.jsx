import React from 'react';
import ReactDOM from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

function Modal({ show, close, order }) {
    const progress = ["Not Started", "In Progress", "Completed"];
    const [editing, setEditing] = useState(false);
    
    if (!show) return null;

    return ReactDOM.createPortal(
        <div onClick={close} className="flex flex-col fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 justify-center items-center bg-black bg-opacity-30 m-0 h-full w-full z-2">
            <div onClick={e => e.stopPropagation()} className="flex flex-col rounded-2xl items-center fixed z-2 h-2/4 w-2/4 shadow-sm shadow-neutral-800 bg-neutral-900 ">
                <div className="flex justify-between items-center border-b border-neutral-700 px-5 h-16 w-full absolute mt-0 z-4 ">
                    <h2 className="text-white rubic">
                        Edit Task
                    </h2>
                    <button onClick={close} className="flex items-center text-white bg-neutral-700 hover:bg-red-600 hover:scale-110 rounded-2xl duration-300 p-2 w-fit">
                        <XMarkIcon className="w-6" />
                    </button>
                </div>
                <div className="mt-16 h-full w-full">
                    <div className="flex flex-col h-full w-full justify-evenly">
                        <div className="flex items-center justify-evenly text-white">
                            <div>Order</div>
                            <div className="flex items-center justify-center p-2 border-solid border-2 border-neutral-700 rounded-xl">
                                {editing ? (
                                    <input
                                        className="rounded-xl bg-transparent px-4 text-sm focus:text-white focus:outline-none"
                                        type="text"
                                        placeholder="Order" 
                                    />
                                ) : (
                                    <div onClick={() => setEditing(true)}>{order}</div>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center justify-evenly text-white">
                            <div>Status</div>
                            <div className="flex items-center justify-center p-2 border-solid border-2 border-neutral-700 rounded-xl">
                                <input
                                    className="rounded-xl bg-transparent px-4 text-sm focus:text-white focus:outline-none"
                                    type="text"
                                    placeholder="Order" 
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-evenly text-white">
                            <div>Owner</div>
                            <div className="flex items-center justify-center p-2 border-solid border-2 border-neutral-700 rounded-xl">
                                <input
                                    className="rounded-xl bg-transparent px-4 text-sm focus:text-white focus:outline-none"
                                    type="text"
                                    placeholder="Order" 
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-evenly text-white">
                            <div>Assigned</div>
                            <div className="flex items-center justify-center p-2 border-solid border-2 border-neutral-700 rounded-xl">
                                <input
                                    className="rounded-xl bg-transparent px-4 text-sm focus:text-white focus:outline-none"
                                    type="text"
                                    placeholder="Order" 
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-evenly text-white">
                            <div>Subsystem</div>
                            <div className="flex items-center justify-center p-2 border-solid border-2 border-neutral-700 rounded-xl">
                                <input
                                    className="rounded-xl bg-transparent px-4 text-sm focus:text-white focus:outline-none"
                                    type="text"
                                    placeholder="Order" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-0 h-16 w-full px-5 text-white">
                    <button className="px-4 py-2 rounded-2xl bg-neutral-700 duration-300 hover:bg-red-600 hover:scale-110">
                        Cancel
                    </button>
                    <button className="px-4 py-2 rounded-2xl bg-neutral-700 duration-300 hover:bg-blue-600 hover:scale-110">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    );
}

export default Modal;