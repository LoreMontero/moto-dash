import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/solid';

const Topbar = () => {
    return (
        <div className="flex fixed justify-center items-center mt-0 ml-20 h-16 w-screen">
            <div className="flex justify-center p-5">
                <h1 className="rubic font-bold text-xl">Dashboard</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="relative p-2 border-solid border-2 border-black rounded-2xl">
                    <span className="absolute inset-y-0 flex items-center px-3 pointer-events-none">
                        <MagnifyingGlassIcon className="fill-black w-5"/> 
                    </span>
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="rounded-10 bg-transparent pr-4 pl-10 text-sm focus:text-black focus:outline-none"
                    />

                </div>
                <div className="p-2 border-solid border-2 border-black rounded-2xl hover:bg-blue-600">
                    <BellIcon className="fill-black w-5"/>
                </div>
                <button>
                    <img src="" alt="" />
                    
                </button>
            </div>
        </div>
    );
}

export default Topbar;