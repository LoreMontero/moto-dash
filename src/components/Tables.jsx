const Tables = () => {
    return (
        <div className="bg-gray-800 opacity-75 rounded-2xl p-5">
            <table className="table-fixed rounded-2xl">
                <thead className="bg-neutral-800">
                    <tr>
                        <th>
                            Task Name
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Files
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Add Rocket boosters
                        </td>
                        <td>
                            In progress
                        </td>
                        <td>
                            none
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Tables;