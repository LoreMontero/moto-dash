import logo from '../logo.svg';
import { EnvelopeIcon, Squares2X2Icon, CalendarIcon, RectangleStackIcon  } from '@heroicons/react/24/solid';

const Navbar = () => {
    return (
        <div className="fixed h-screen w-36
                        flex flex-col bg-zinc-800  
                        backdrop-filter gap-10">

            <div className="flex justify-center w-32 mt-4">
                <img src={logo} alt="Motorsport Logo" />
            </div>
            <div className="flex flex-col p-5">
                <ul>
                    <li>
                        <div className="flex items-center text-white hover:bg-blue-600 rounded-2xl duration-300 p-2 w-fit">
                            <RectangleStackIcon className="w-4"/>
                            <span>Dashboard</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex justify-center text-white hover:bg-blue-600 rounded-2xl duration-300 p-2 w-fit">
                            <Squares2X2Icon className="w-4"/>
                            <span>Workspace</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex justify-center text-white hover:bg-blue-600 rounded-2xl duration-300 p-2 w-fit">
                            <EnvelopeIcon className="w-4"/>
                            <span>Inbox</span>
                        </div>
                    </li>
                    <li> 
                        <div className="flex justify-center text-white hover:bg-blue-600 rounded-2xl duration-300 p-2 w-fit">
                            <CalendarIcon className="w-4"/>
                            <span>Events</span>
                        </div>
                    </li>
                </ul>
            </div>    
        </div>
    );
}

export default Navbar;