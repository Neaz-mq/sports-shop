
import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const NavBar = () => {
    
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {

        })
        .catch(error => console.log(error));
    }
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };



    const navOptions = <>
        <li className="hover:bg-red-600 rounded-lg font-semibold text-red-600 lg:text-white"><Link to="/">Home</Link></li>
        <li  className="hover:bg-red-600 rounded-lg font-semibold text-red-600 lg:text-white"><Link to="/item">Our Item</Link></li>
        <li  className="hover:bg-red-600 rounded-lg font-semibold text-red-600 lg:text-white"><Link to="/order/cricket">Order Item</Link></li>
        <li  className="hover:bg-red-600 rounded-lg font-semibold text-red-600 lg:text-white"><Link to="/secret">Secret</Link></li>
        
       {
          user ? <>
            <img
                            src={user?.photoURL}
                            alt="User"
                            className="rounded-full h-9 w-9 mr-2 ml-8"
                        />
           <span className="font-bold text-xl text-yellow-400 ml-4 lg:ml-0  mt-2">{user?.displayName}</span>
          <button onClick={handleLogOut} className="btn btn-outline btn-error lg:-mt-2 lg:ml-5 mt-7 ">LogOut</button>
          
          </> : <>
          <li  className="hover:bg-red-600 rounded-lg font-semibold text-red-600 lg:text-white"><Link to="/login">Login</Link></li>
          </>
       }
     
        
    </>

    return (
        <>
            <div className="navbar fixed  bg-opacity-30  z-10   bg-gray-400 text-black -mt-2 lg:mt-0">
                <div className="navbar-start">
           
            <div className={`dropdown from-neutral-50 -mt-4 z-12 ml-56 -mr-56 ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
           
             <label tabIndex={0} className="btn btn-success  lg:hidden ml-28 -mr-28 mt-3 md:-ml-36 md:mr-36">
            
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                 
              </label>
           
              {isDropdownOpen && (
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-6 -ml-3 shadow bg-base-100 rounded-box   w-52 text-black z-10 font-bold">
                      {navOptions}
                  </ul>
              )}
         
            </div>
                    <a href="/" className="-mt-2 ml-16 -mr-20 lg:ml-0 lg:mr-0 md:ml-64 "><img src="https://i.ibb.co/JyJhGTj/150x80.png" alt="" /></a>
                </div>
                <div className="navbar-center  hidden lg:flex  mt-4 mr-32 ">
                    <ul className="menu menu-horizontal  px-1 text-lg ">
                        {navOptions}
                    </ul>
                </div>
                
            </div>
        </>
    );
};

export default NavBar;