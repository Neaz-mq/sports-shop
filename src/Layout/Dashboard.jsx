import { FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
                {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-green-600" >
               <ul className="menu p-4">
                    <li><NavLink to="/dashboard/userHome">   <FaHome></FaHome>User Home</NavLink></li>

                    <li><NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
{/* shared nav links */}
                    <div className="divider"></div>
               <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
               </ul>

            
            </div>

        {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
      
    );
};

export default Dashboard;