import React from 'react';
import ReactDOM from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Modal = ({ show, close }) => {
    if (!show) return null;

    return ReactDOM.createPortal(
        <div onClick={close} className="flex fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 justify-center items-center bg-black bg-opacity-30 m-0 h-full w-full z-2">
            <div className="flex flex-col rounded-2xl items-center fixed z-2 h-2/4 w-2/4 shadow-md shadow-neutral-700 bg-neutral-900 "> 
                <div className="flex justify-between px-5 h-16 w-full absolute items-center mt-0 z-4 ">
                    <h2 className="text-white">
                        Edit Task
                    </h2>
                    <button onClick={close} className="flex items-center text-white hover:bg-blue-600 hover:scale-110 rounded-2xl duration-300 p-2 w-fit">
                        <XMarkIcon className="w-6"/>
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    );
}

export default Modal;