import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";



const ItemCard = ({ item }) => {
  console.log('ItemCard rendered:', item);
  const { name, description, image, price, _id } = item;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = item => {
   if(user && user.email){
      console.log(user.email, item);
      const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
      }
      axios.post('http://localhost:5000/carts', cartItem)
      .then(res => {
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
        });
        }
      })
   }
   else {
    Swal.fire({
      title: "You are not Logged in",
      text: "Please login to add to the cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Login!"
    }).then((result) => {
      if (result.isConfirmed) {
       navigate('/login', {state: {from: location}})
        
      }
    });
   }
  }

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure style={{ height: '300px', overflow: 'hidden' }}>
        <img
          src={image}
          alt="items"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className='text-red-500 font-bold text-base'>{price} BDT</p>
        <div className="card-actions justify-center items-center"> {/* Updated this line */}
          <button 
          onClick={() => handleAddToCart(item)}
           className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
