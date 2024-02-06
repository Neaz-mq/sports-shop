import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import itemImg from '../../../assets/item.jpg';


const Item = () => {
    return (
        <div>
            <Helmet>
           <title>Sports shop | Item</title>
        </Helmet>
           <Cover img={itemImg} title="Our Item"></Cover>
          
        </div>
    );
};

export default Item;