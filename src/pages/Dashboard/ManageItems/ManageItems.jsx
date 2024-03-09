import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useItem from "../../../hooks/useItem";
import { useState } from "react";


const ManageItems = () => {
    const [item] = useItem();
    const [search, setSearch] = useState('');

     //pagination
     const ITEMS_PER_PAGE = 10;
     const [currentPage, setCurrentPage] = useState(1);
 
     const indexOfFirstItem = (currentPage - 1) * ITEMS_PER_PAGE;
     const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
     
     const filteredItems = item.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
     const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
     

 
     const paginate = (pageNumber) => setCurrentPage(pageNumber);
   
     //end

     const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        // console.log(searchText);
        setSearch(searchText);
    }
    return (
        <div>
             <SectionTitle heading="Manage All Items" subHeading="Hurry up"></SectionTitle> 
             <div>
                <div className="text-center mb-6">
                    <form onSubmit={handleSearch}>
                        <div className="join">
                            <input type="text" name="search" id="" className="input input-bordered join-item" placeholder="Item Search" />
                            <button className="btn join-item rounded-r-full" >Search</button>
                        </div>
                    </form>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    No.
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th >Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {currentItems.map((item, index) => (
                    <tr key={item._id}>
                       <td>{indexOfFirstItem + index + 1}</td>

                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>
                            <Link to={`/dashboard/updateItem/${item._id}`}>
                                <button className="btn btn-ghost btn-lg bg-orange-500">
                                    <FaEdit className="text-white"></FaEdit>
                                </button>
                            </Link>
                        </td>
                        <td>
                            <button
                               
                                className="btn btn-ghost btn-lg">
                                <FaTrashAlt className="text-red-600"></FaTrashAlt>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>



                    </table>

                    <div className="pagination mt-8 flex justify-center">
    {Array.from({ length: Math.ceil(filteredItems.length / ITEMS_PER_PAGE) }, (_, i) => (
        <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 mx-1 rounded-full focus:outline-none focus:shadow-outline ${
                currentPage === i + 1
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800'
            }`}
        >
            {i + 1}
        </button>
    ))}
</div>

                </div>
            </div>
        </div>
    );
};

export default ManageItems;