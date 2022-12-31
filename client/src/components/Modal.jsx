import React from 'react';
import ReactDOM from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Modal = ({ show, close }) => {
    if (!show) return null;

    return ReactDOM.createPortal(
        <div className="flex absolute justify-center bg-transparent items-center m-0 h-full w-full">
            <div className="h-full w-full absolute justify-center items-center bg-transparent m-0 z-1"> 
                <div className="flex justify-between absolute items-center backdrop-blur-sm 
                                bg-neutral-900 border-b border-gray-800 mt-0 z-2
                                p-32">
                    <h2 className="text-white">
                        Edit Task
                    </h2>
                    <button onClick={close} className="flex items-center text-white hover:bg-blue-600 hover:scale-110 rounded-2xl duration-300 p-2 w-fit">
                        <XMarkIcon className="w-6"/>
                    </button>
                </div>
                <div className="m-auto">

                </div>
            </div>
        </div>,
        document.getElementById('portal')
    );
}

export default Modal;