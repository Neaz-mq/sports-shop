import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";

import SportsItem from "../../Shared/SportsItem/SportsItem";

const PopularItem = () => {

    const [item, setItem] = useState([]);

    useEffect( () => {
        fetch ('item.json')
        .then(res => res.json())
        .then(data => {
            const PopularItems = data.filter(item => item.category === 'popular');
            setItem(PopularItems)})
    }, [])

    
    return (
        <section className="mb-12">
            <SectionTitle
            
            heading={"Popular Items"}
            subHeading={"From Our Items"}
           
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-6 pt-6">
                {
                    item.map(item => <SportsItem
                    
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