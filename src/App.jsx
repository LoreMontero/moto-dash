import Navbar from './components/Navbar';
import Tables from './components/Tables'

export default function App() {
  return (
    <div className="flex justify-evenly h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-blue-400 to-pink-400">
        <Navbar />
        <div className="flex flex-col">
          <h1></h1>
          <div className="flex">
            <Tables />
          </div>
        </div>
    </div>
  );
}