import logo from './logo.svg';
import { EnvelopeIcon, Squares2X2Icon, CalendarIcon, RectangleStackIcon  } from '@heroicons/react/24/solid';

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-36 m-0
                        flex flex-col bg-black
                        bg-opacity-60 backdrop-filter gap-20">

            <div className="flex justify-center w-32 mt-4">
                <img src={logo} alt="Motorsport Logo" />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-center text-white hover:bg-sky-500 rounded-2xl duration-300">
                    <RectangleStackIcon className="w-4"/>
                    <p>Dashboard</p>
                </div>
                <div className="flex justify-center text-white hover:bg-sky-500 rounded-2xl">
                    <Squares2X2Icon className="w-4"/>
                    <p>Workspace</p>
                </div>
                <div className="flex justify-center text-white hover:bg-sky-500 rounded-2xl">
                    <EnvelopeIcon className="w-4"/>
                    <p>Inbox</p>
                </div>    
                <div className="flex justify-center text-white hover:bg-sky-500 rounded-2xl">
                    <CalendarIcon className="w-4"/>
                    <p>Events</p>
                </div>
            </div>    
        </div>
    );
}

export default Navbar;