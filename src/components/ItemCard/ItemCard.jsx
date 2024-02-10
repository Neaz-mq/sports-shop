import React from 'react';

const ItemCard = ({item}) => {
    console.log('ItemCard rendered:', item);
    const {name, description, image, price} = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src={image} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
  );
};

export default ItemCard;
