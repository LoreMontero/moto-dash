import Topbar from "./global/Topbar"
const Order = () => {
    return(
        <>
            <div className="flex flex-col ml-20 h-screen pb-24 bg-black w-screen">
                <Topbar page="Order"/>
                <div className="flex flex-col justify-center mx-auto h-screen max-w-screen">
                    <h1 className = "text-4xl font-extrabold mx-auto pt-24 pb-5 text-white">Create A Manufacturing Order</h1>
                    <p className = "text-sm font-light mx-auto pb-24 text-white">
                        Please fill out the required fields below in order to start a manufacturing order.
                    </p>
                    <form action ="" class ="flex flex-col space-y-8 ">
                        <div>
                            <label for = "email" className = "text-start block text-base text-white font-semibold py-2.5">Name</label>
                            <input type= "text" placeholder = "Name" className = "text-white p-2.5 border-gray-300 bg-gray-900 w-full rounded-lg"/>
                        </div>
                        <div>
                            <label for = "email" className = "text-start block text-base text-white font-semibold py-2.5">Order</label>
                            <input type= "text" placeholder = "Order" className = "text-white p-2.5 border-gray-300 bg-gray-900 w-full rounded-lg"/>
                        </div>
                        
                        <div class = "grid grid-cols-2 ">
                            <div class = "px-5 ">
                                <label for = "email" className = "text-start block text-base text-white font-semibold py-2.5">Assigne Email</label>
                                <input type= "text" placeholder = "Assigne Email" className = "text-white p-2.5 border-gray-300 bg-gray-900 w-full rounded-lg"/>
                            </div>
                            <div class = "px-5">
                                <label for = "email" className = "text-start block text-base text-white font-semibold py-2.5">Name of Assigne</label>
                                <input type= "text" placeholder = "Name of Assigne" className = "text-white p-2.5 border-gray-300 bg-gray-900 w-full rounded-lg"/>
                            </div>
                            
                        </div>
                        <div>
                            <label for = "email" className = "text-start block text-base text-white font-semibold py-5">Subsystem</label>
                            <select id= "dropdownDefault" data-dropdown-toggle ="dropdown" placeholder = "Order" className = "text-white p-2.5 border-gray-300 bg-gray-900 w-full rounded-lg">
                                <option>Propulsion</option>
                                <option>ACE</option>
                                <option>Vehicle Dynamics</option>
                                
                            </select>
                            
                        </div>
                       {/*<div>
                            <label for = "Files" className = "text-start block text-base text-white font-semibold py-2.5">Files</label>
                            <input type = "file" class = "" name ="file"></input>
                            
                        </div>*/}
                        <button class = "h-12 mx-auto w-24 bg-gray-900 border-gray-900 text-white rounded-lg duration-300 ease-in hover:bg-white hover:text-black">Submit</button>

                    </form>
                       

                </div>
            </div>
        </>
    )
}
export default Order