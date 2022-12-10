import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/solid';

const Topbar = () => {
    return (
        <div className="flex fixed justify-center items-center mt-0 ml-20 h-16 w-screen">
            <div className="flex justify-center p-5">
                <h1 className="rubic font-bold">Dashboard</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="">
                    <MagnifyingGlassIcon className="fill-black w-6 "/>
                </div>
                <div>
                    <BellIcon className="fill-black w-6 "/>
                </div>
            </div>
        </div>
    );
}

export default Topbar;