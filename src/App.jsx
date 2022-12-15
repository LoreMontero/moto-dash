import Sidebar from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
import Tables from './components/Tables'

export default function App() {
  return (
    <div className="flex h-screen font-sans bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-violet-800 via-cyan-100 to-violet-100">
      <Sidebar />
      <div className="flex flex-column ml-20">
        <Topbar />
        <Tables />
      </div>
    </div>
  );
}