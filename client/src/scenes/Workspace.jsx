import TaskTables from '../components/Table/TaskTables';
import Topbar from './global/Topbar';

const Workspace = () => {
    return (
        <div className="flex flex-col ml-20 bg-black w-screen">
            <Topbar page="Workspace"/>
            <div className="flex flex-col justify-evenly items-center h-screen">
                <TaskTables 
                    name="Create Database"
                    status="Not Started"
                    file="N/A"
                />
                <TaskTables 
                    name="Integrate Server"
                    status="Not Started"
                    file="N/A"
                />
                <TaskTables 
                    name="Update Props"
                    status="Not Started"
                    file="N/A"
                />
            </div>
        </div>
    );
}

export default Workspace;