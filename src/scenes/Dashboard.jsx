import Sidebar from './global/Sidebar';
import Topbar from './global/Topbar';
import Tables from '../components/Tables';

const Dashboard = () => {
  return (
    <div className="flex h-screen font-sans bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-violet-800 via-cyan-100 to-violet-100">
      <Sidebar />
      <div className="flex flex-col h-screen w-screen mt-16 ml-20">
        <Topbar />
        <div className="flex flex-col justify-evenly h-screen">
          <div className="flex justify-around">
            <Tables />
            <Tables />
          </div>
          <div className="flex justify-center">
            <Tables />
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Dashboard;