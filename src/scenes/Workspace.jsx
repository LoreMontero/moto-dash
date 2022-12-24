import Tables from '../components/Tables';

const Workspace = () => {
    return (
        <div className="flex flex-col ">
            <Tables 
                name="Create database"
                status=""
                file=""
            />
            <Tables 
                name=""
                status=""
                file=""
            />
            <Tables 
                name=""
                status=""
                file=""
            />
        </div>
    );
}

export default Workspace;