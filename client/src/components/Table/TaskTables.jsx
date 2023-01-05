import React from 'react';
import {useState} from 'react';
import Modal from '../Modal';

const TaskTables = (props) => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <div>
                <h2 className="rubic text-white">
                    {props.title}
                </h2>
            </div>
            <div className="flex justify-center bg-neutral-900 shadow-sm shadow-neutral-800 w-fit rounded-2xl p-5">
                <table className="table-auto">
                    <thead className="border-b border-gray-700">
                        <tr className="flex justify-between">
                            <th className="text-white px-5">
                                Order
                            </th>
                            <th className="text-white px-5">
                                Status
                            </th>
                            <th className="text-white px-5">
                                Owner
                            </th>
                            <th className="text-white px-5">
                                Assigned
                            </th>
                            <th className="text-white px-5">
                                Subsystem
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={() => setShow(!show)} className="flex justify-between rounded-b-sm hover:bg-neutral-700 cursor-pointer">
                            <td className="text-gray-400 px-5">
                                {props.name}
                            </td>
                            <td className="text-gray-400 px-5">
                                {props.status}
                            </td>
                            <td className="text-gray-400 px-5">
                                {props.file}
                            </td>
                        </tr>
                        <Modal 
                            show={show}
                            close={() => setShow(false)}
                            order={props.name}
                        />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TaskTables;