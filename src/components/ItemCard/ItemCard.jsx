import React from 'react';

const ItemCard = ({ item }) => {
  console.log('ItemCard rendered:', item);
  const { name, description, image, price } = item;

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
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
