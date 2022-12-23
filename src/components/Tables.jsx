const Tables = (props) => {
    return (
        <div className="flex justify border-black border-2 rounded-2xl p-5">
            <table className="table-auto">
                <thead className="border-b-2 border-black">
                    <tr className="flex justify-between">
                        <th className="px-5">
                            Task Name
                        </th>
                        <th className="px-5">
                            Status
                        </th>
                        <th className="px-5">
                            Files
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="flex justify-between">
                        <td className="px-5">
                            Add Rocket boosters
                        </td>
                        <td className="px-5">
                            In progress
                        </td>
                        <td className="px-5">
                            none
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Tables;