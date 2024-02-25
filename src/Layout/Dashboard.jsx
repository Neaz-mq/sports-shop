import { FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
                {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-green-600" >
               <ul className="menu p-4 text-white text-lg font-bold">
                    <li><NavLink to="/dashboard/userHome">   <FaHome></FaHome>User Home</NavLink></li>

                    <li><NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink></li>
{/* shared nav links */}
                    <div className="divider"></div>
               <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/cricket">
                            <FaSearch></FaSearch>
                            Items</NavLink>
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