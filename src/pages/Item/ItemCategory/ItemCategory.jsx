import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import SportsItem from '../../Shared/SportsItem/SportsItem';

const ItemCategory = ({items, title, img}) => {
    return (
        <div className='lg:pt-4 pb-5'>
             {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-6 mt-16">
                {
                    items.map(item => <SportsItem
                    
                        key={item._id}
                        item={item}
                    
                    ></SportsItem>)
                }
            </div>
<Link to={`/order/${title}`}>

<div className='text-center mt-5'>
<button className="btn  btn-outline btn-error   md:btn-md ">Order Now</button>
</div>



</Link>
        </div>
    );
};

export default ItemCategory;