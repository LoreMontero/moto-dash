import TaskTables from '../components/Table/TaskTables';
import Topbar from './global/Topbar';

const Workspace = () => {
    return (
        <div className="flex flex-col ml-20 h-screen w-screen">
            <Topbar page="Workspace"/>
            <div className="flex flex-col justify-evenly items-center h-screen">
                <TaskTables 
                    order="Create Database"
                    status="Not Started"
                    owner="N/A"
                />
                <TaskTables 
                    order="Integrate Server"
                    status="Not Started"
                    owner="N/A"
                />
                <TaskTables 
                    order="Update Props"
                    status="Not Started"
                    owner="N/A"
                />
            </div>
        </div>
    );
}

export default Workspace;