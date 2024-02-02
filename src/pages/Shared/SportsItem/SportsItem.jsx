import React from 'react';

const sportsItem = ({item}) => {
    const {name, description, image, price} = item;
    return (
        <div className='flex space-x-4'>
            <img className='w-[100px]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name} -------</h3>
                <p>{description}</p>
            </div>
            <p className='text-red-500'>{price} BDT</p>
        </div>
    );
};

export default sportsItem;