import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useitem from "../../../hooks/useItem";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Manageitems = () => {
    const [item, , refetch] = useitem();
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState('');

     //pagination
     const itemS_PER_PAGE = 10;
     const [currentPage, setCurrentPage] = useState(1);
 
     const indexOfFirstitem = (currentPage - 1) * itemS_PER_PAGE;
     const indexOfLastitem = currentPage * itemS_PER_PAGE;
     
     const filtereditems = item.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
     const currentitems = filtereditems.slice(indexOfFirstitem, indexOfLastitem);
     

 
     const paginate = (pageNumber) => setCurrentPage(pageNumber);
   
     //end

     const handleDeleteitem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/item/${item._id}`);
                //  console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }

     const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        // console.log(searchText);
        setSearch(searchText);
    }
    return (
        <div>
             <SectionTitle heading="Manage All items" subHeading="Hurry up"></SectionTitle> 
             <div>
                <div className="text-center mb-6">
                    <form onSubmit={handleSearch}>
                        <div className="join">
                            <input type="text" name="search" id="" className="input input-bordered join-item" placeholder="item Search" />
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
                                <th>item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th >Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {currentitems.map((item, index) => (
                    <tr key={item._id}>
                       <td>{indexOfFirstitem + index + 1}</td>

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
                        <td>৳ {item.price}</td>
                        <td>
                            <Link to={`/dashboard/updateitem/${item._id}`}>
                                <button className="btn btn-ghost btn-lg bg-orange-500">
                                    <FaEdit className="text-white"></FaEdit>
                                </button>
                            </Link>
                        </td>
                        <td>
                            <button
                                 onClick={() => handleDeleteitem(item)}
                                className="btn btn-ghost btn-lg">
                                <FaTrashAlt className="text-red-600"></FaTrashAlt>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>



                    </table>

                    <div className="pagination mt-8 flex justify-center">
    {Array.from({ length: Math.ceil(filtereditems.length / itemS_PER_PAGE) }, (_, i) => (
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

export default Manageitems;