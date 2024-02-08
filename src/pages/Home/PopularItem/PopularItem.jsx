import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SportsItem from "../../Shared/SportsItem/SportsItem";
import useItem from "../../../hooks/useItem";


const PopularItem = () => {

    const [item] = useItem();
    const popular = item.filter(item => item.category === 'popular');
    
    return (
        <section className="mb-12">
            <SectionTitle
            
            heading={"Popular Items"}
            subHeading={"From Our Items"}
           
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-6 pt-6">
                {
                    popular.map(item => <SportsItem
                    
                        key={item._id}
                        item={item}
                    
                    ></SportsItem>)
                }
            </div>
            <div className="text-center mt-10">
            <button className="btn btn-outline btn-error">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularItem;