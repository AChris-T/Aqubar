import hero3 from "../../assets/Image/hero1.png"
import hero2 from "../../assets/Image/hero2.png"
import hero1 from "../../assets/Image/hero3.png"
import hero4 from "../../assets/Image/hero2.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";

const HeroSection = () => {
  return (
    <>
    <div className="h-[450px] flex justify-between bg-[#101223]">
      <div className=" px-4 md:px-[70px] flex flex-col justify-center h-full gap-[34px]">
        <h2 className="text-[#fff] font-jacques text-[60px]">Aquber</h2>
        <p className="font-Montserrat md:w-[620px] flex flex-wrap text-white z-20 font-light text-[20px]">Welcome to our tech page!<br/>
            We are excited to have you here and to equip you with the latest
            on-demand tech skills.
        </p>
        <button className="text-[#fff]  rounded-[5px] h-[60px] bg-[#198CF6] w-[207px] border-2 border-[#198cf6] hover:bg-[#198cf6] text-[15px] font-semibold">Get Started</button>
      </div>
      <Swiper
          modules={[Pagination, Autoplay,]}
          slidesPerView={1}
          autoplay={true}
          spaceBetween={30}
          pagination={true}
          className="text-white w-full ml-[-160px] gap-72 hidden lg:block"
        >
             <SwiperSlide><img src={hero3} alt="heroImg" className="h-full w-full"/></SwiperSlide>
             <SwiperSlide><img src={hero2} alt="heroImg" className="h-full w-full"/></SwiperSlide>
             <SwiperSlide><img src={hero1} alt="heroImg" className="h-full w-full"/></SwiperSlide>
             <SwiperSlide><img src={hero4} alt="heroImg" className="h-full w-full"/></SwiperSlide>
        </Swiper>
      </div>
      <div>
        <div className="bg-[#198cf6] w-[205px] h-[68px] text-[#fff] text-[25px] font-inter font-semibold flex justify-center items-center">
            Aquber
        </div>
        <div className=" px-4 md:px-[71px]   flex flex-col gap-8 py-[51px] text-[#000] font-Montserrat text-[20px] font-light text-justify ">
        <p>
        Welcome to Aquber technologies, we are excited to have you here and to equip you with the latest on-demand tech skills. Our mission is to provide a platform for individuals to learn and grow in the ever-evolving tech space.
        </p>
        <p>
        We host tech events to keep you up-to-date on the latest trends and to provide a platform for networking and collaboration.
        </p>
        <p>
        We look forward to having you join us on this journey and helping you reach your tech goals.  
        </p>

        </div>

      </div>
      </>
  )
}

export default HeroSection
