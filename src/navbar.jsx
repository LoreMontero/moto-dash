import logo from './logo.svg';

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-36 m-0
                        flex flex-col bg-neutral-800 rounded-r-xl">

            <div className="flex justify-center w-32 mt-4">
                <img src={logo} alt="Motorsport Logo" />
            </div>
            <i>B</i>
            <i>C</i>
            <i>D</i>
            <i>E</i>
        </div>
    );
}

export default Navbar;