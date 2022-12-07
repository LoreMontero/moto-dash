import Navbar from './scenes/global/Navbar';
import Topbar from './scenes/global/Topbar';

export default function App() {
  return (
    <div className="flex h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-violet-800 via-cyan-100 to-violet-100">
      <Navbar />
    </div>
  );
}