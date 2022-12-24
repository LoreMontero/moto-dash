import Tables from '../components/Tables';

const Workspace = () => {
    return (
        <div className="flex flex-col justify-evenly items-center h-screen">
            <Tables 
                name="Create Database"
                status="Not Started"
                file="N/A"
            />
            <Tables 
                name="Integrate Server"
                status="Not Started"
                file="N/A"
            />
            <Tables 
                name="Update Props"
                status="Not Started"
                file="N/A"
            />
        </div>
    );
}

export default Workspace;