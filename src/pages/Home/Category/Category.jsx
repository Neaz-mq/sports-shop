import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../Category/category.css';

import slide1 from '../../../assets/cricket.png';
import slide2 from '../../../assets/football.png';
import slide3 from '../../../assets/tennis.png';
import slide4 from '../../../assets/volleyball.png'


// import required modules
import { EffectCards } from 'swiper/modules';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='m-16'>
        <section>
          <SectionTitle
          subHeading={"From 10.00 a.m to 11.59 p.m"}
          heading={"Order Online"}
          
          ></SectionTitle>
     
    
     <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"  data-aos="fade-down" data-aos-easing="linear"
            data-aos-duration="1500"
        >
            <SwiperSlide>
                <img src={slide1} alt="" />
              <div className='mb-2'>
              <h3 className='text-2xl uppercase mt-72 -ml-44'>Cricket</h3>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
            <img src={slide2} alt="" />
            <div className='mb-8'>
              <h3 className='text-2xl uppercase mt-72 -ml-44'>Football</h3>
              </div>
            </SwiperSlide>
           
            <SwiperSlide>
            <img src={slide3} alt="" />
            <div className='mb-14'>
              <h3 className='text-2xl uppercase mt-72 -ml-40'>Tennis</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide4} alt="" />
            <div className='mb-2'>
              <h3 className='text-2xl uppercase mt-72 -ml-48'>VolleyBall</h3>
              </div>
            </SwiperSlide>
            
        </Swiper>
    
        </section>
        </div>
    );
};

export default Category;