import ItemCard from "../../../components/ItemCard/ItemCard";

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-2 gap-16'>
              {items.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
              </div>
    );
};

export default OrderTab;