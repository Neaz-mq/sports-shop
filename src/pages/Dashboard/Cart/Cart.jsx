import { FaTrashAlt } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';

const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce( (total, item) => total + item.price, 0)
    return (
        <div className='lg:ml-10'>
            <div className="flex justify-evenly lg:mt-4 mb-12 lg:-ml-36 ">
                <h2 className="text-xl lg:text-4xl ">Items: {cart.length}</h2>
                <h2 className="text-xl lg:text-4xl">Total Price: {totalPrice} BDT</h2>
                <button disabled className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto w-1/2 lg:w-full">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No.
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button
                                      
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;