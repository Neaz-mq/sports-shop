import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";



const ItemCard = ({ item }) => {
  console.log('ItemCard rendered:', item);
  const { name, description, image, price } = item;
  const {user} = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = item => {
   if(user && user.email){
//
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
       navigate('/login')
        
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
