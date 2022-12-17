const Tables = () => {
    return (
        <div className="border-black border-2 rounded-2xl p-5">
            <table className="table-auto">
                <thead className="border-b-2 border-black">
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