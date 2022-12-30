import React from 'react';
import ReactDOM from 'react-dom';

const editTask = ({ show, close }) => {
    if (!show) return null;

    return ReactDOM.createPortal(
        <div className="">

        </div>,
        document.getElementById('modal')
    );
}

export default editTask;