import  { useState } from 'react';
import ItemCard from '../../../components/ItemCard/ItemCard';

const OrderTab = ({ items }) => {
  const [showAll, setShowAll] = useState(false);

  // Determine the number of items to display initially
  const displayedItems = showAll ? items : items.slice(0, 4);

  return (
    <div className='grid md:grid-cols-2 gap-16'>
      {displayedItems.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
      {!showAll && items.length > 4 && (
        <div className='flex justify-center items-center mt-4 lg:ml-64 lg:-mr-52'>
          <button
            className='btn btn-secondary'
            onClick={() => setShowAll(true)}
          >
            View All
          </button>
        </div>
      )}
      {showAll && (
        <div className='flex justify-center items-center mt-4 lg:ml-64 lg:-mr-52'>
          <button
            className='btn btn-secondary'
            onClick={() => setShowAll(false)}
          >
            View Less
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderTab;