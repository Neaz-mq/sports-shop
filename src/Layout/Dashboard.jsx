import { FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaHdd } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    const isAdmin = true;
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-green-600" >
                <ul className="menu p-4 text-white text-lg font-bold">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminHome">   <FaHome></FaHome>Admin Home</NavLink></li>

                            <li><NavLink to="/dashboard/addItems"> <FaHdd /> Add Items </NavLink></li>

                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userHome">   <FaHome></FaHome>User Home</NavLink></li>

                                <li><NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink></li>
                            </>
                    }

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