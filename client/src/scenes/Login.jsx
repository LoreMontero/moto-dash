import logo from "../logo.svg"
const Login = () =>{
    return(
        <>
            <div className = "flex flex-col bg-black h-screen w-screen ">
                <div className = "flex flex-col items-center mx-auto py-24">
                    <span className =""><img src={logo}/></span>
                    <div className = "border-gray-900 bg-gray-800 h-96 w-96 rounded-lg">
                        <div className = "flex flex-col items-center mt-5 ">
                            <h3 className = "text-white text-3xl font-extrabold">Login</h3>
                        </div>
                        <div className = "flex items-start w-96 mx-12">
                            <form className = "space-y-3 my-5">
                                
                                <div className="flex flex-col w-full">
                                    <label className="text-white text-start font-semibold text-base">Panther ID</label>
                                    <input type ="text" placeholder = "Panther ID"className = "text-white my-5 w-72 border-gray-900 p-1.5 rounded-lg bg-gray-900"></input>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-white text-start font-semibold text-base">Password</label>
                                    <input type ="password" placeholder = "Password" className = "text-white my-5 w-full border-gray-900 p-1.5 rounded-lg bg-gray-900"></input>
                                </div>
                                <div className="grid grid-cols-2">
                                    <button className = "w-24 h-12 mx-5 bg-gray-900 rounded-lg text-white duration-300 ease-in hover:bg-white hover:text-black">Login</button>
                                    <button className = "w-24 h-12 mx-5 bg-gray-900 rounded-lg text-white duration-300 ease-in hover:bg-white hover:text-black">Register</button>
                                </div>
                                
                                

                            </form>

                        </div>
                    </div>
                    

                </div>
                
            </div>
        </>
    )

}
export default Login;