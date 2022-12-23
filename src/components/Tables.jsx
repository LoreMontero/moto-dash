const Tables = (props) => {
    return (
        <div className="flex justify-center bg-neutral-900 rounded-2xl p-5">
            <table className="table-auto">
                <thead className="border-b border-gray-700">
                    <tr className="flex justify-between">
                        <th className="text-white px-5">
                            Task Name
                        </th>
                        <th className="text-white px-5">
                            Status
                        </th>
                        <th className="text-white px-5">
                            Files
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="flex justify-between">
                        <td className="text-gray-400 px-5">
                            Rocket boosters
                        </td>
                        <td className="text-gray-400 px-5">
                            In progress
                        </td>
                        <td className="text-gray-400 px-5">
                             none
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Tables;