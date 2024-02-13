import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './reviews.css';  // Import the new CSS file
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle

                subHeading={"Our Customer Says"}
                heading={"Reviews"}

            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="reviewsSwiper">

                {
                    reviews.map(review => <SwiperSlide

                        key={review._id}
                    >
                       
                        <div className=' flex flex-col items-center  lg:mx-24 lg:my-16 '>
                     
                       <Rating
                           style={{ maxWidth: 130 }}
                           value={review.rating}
                           readOnly
                        />
                      
                            <p className='py-8 text-sm lg:text-base ml-16 mr-16 lg:ml-0 lg:mr-0'>{review.details}</p>
                            <h3 className="text-2xl text-red-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};
export default Reviews;

