import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularItem from "../PopularItem/PopularItem";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
             <Helmet>
           <title>Sports shop</title>
        </Helmet>
           <Banner></Banner>
           <Category></Category>
           <PopularItem></PopularItem>
           <Featured></Featured>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;