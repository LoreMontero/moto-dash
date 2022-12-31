import React from 'react';
import ReactDOM from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Modal = ({ show, close }) => {
    if (!show) return null;

    return ReactDOM.createPortal(
        <div className="flex fixed justify-center bg-white opacity-10 items-center m-0 h-full w-full z-1">
            <div className="p-32 bg-neutral-900 z-2"> 
                <div className="flex justify-between absolute items-center mt-0 
                                bg-neutral-900 z-3 ">
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