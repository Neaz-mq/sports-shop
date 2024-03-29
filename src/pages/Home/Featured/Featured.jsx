import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredimg from "../../../assets/Sports.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8">
            <SectionTitle
             heading={"Featured item"}
             subHeading={"Check It Out"}
             
            
            ></SectionTitle>

           <div className="md:flex justify-center items-center pb-20 pt-12 px-36" data-aos="fade-up"
     data-aos-anchor-placement="top-center"  data-aos-duration="1500">
           <div>
                <img className="w-screen " src={featuredimg} alt="" />
            </div>
            <div className="md:ml-10">
                <p className="text-xl mt-6 lg:mt-0 font-semibold mb-3">Feb 15, 2024</p>
                <p className="text-xl font-bold uppercase mb-3">Where Can I get item?</p>
                <p className="text-base mb-4 justify-start">Sports equipment, sporting equipment, also called sporting goods, are the tools, materials, apparel, and gear used to compete in a sport and varies depending on the sport. The equipment ranges from balls, nets, and protective gear like helmets. Sporting equipment can be used as protective gear or a tool used to help the athletes play the sport.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
               
                <button className="btn  btn-outline btn-error   md:btn-md ">Order Now</button>
               
            </div>
           </div>
        </div>
    );
};

export default Featured;