import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover'; tennisImg
import itemImg from '../../../assets/item.jpg';
import cricketImg from '../../../assets/cricket_category.jpg';
import footballImg from '../../../assets/football_category.jpg';
import volleyballImg from '../../../assets/volleyball_category.jpg';
import tennisImg from '../../../assets/tennis_category.jpg';
import useItem from '../../../hooks/useItem';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ItemCategory from '../ItemCategory/ItemCategory';


const Item = () => {
    const [item] = useItem();
    const cricket = item.filter(item => item.category === 'cricket');
    const football = item.filter(item => item.category === 'football');
    const tennis = item.filter(item => item.category === 'tennis');
    const volleyball = item.filter(item => item.category === 'volleyball');
    const offered = item.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Sports shop | Item</title>
            </Helmet>
            <Cover img={itemImg} title="Our Item"></Cover>

            {/* Main Cover */}
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            >
            </SectionTitle>
            {/* Offered Items */}
            <ItemCategory items={offered}></ItemCategory>
            {/* cricket items */}
            <ItemCategory
              items={cricket}
              title={"Cricket"}
              img={cricketImg}
            ></ItemCategory>

            <ItemCategory  items={football} title={"Football"} img={footballImg}></ItemCategory>
            <ItemCategory  items={tennis} title={"Tennis"} img={tennisImg}></ItemCategory>
            <ItemCategory  items={volleyball} title={"Volleyball"} img={volleyballImg}></ItemCategory>
        </div>
    );
};

export default Item;