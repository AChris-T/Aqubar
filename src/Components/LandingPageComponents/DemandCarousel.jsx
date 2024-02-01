import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import { MdOutlineKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";
import cyber from "../../assets/Image/cyberImage.png"
import web from "../../assets/Image/web.png"
import ui from "../../assets/Image/ui.png"
import "swiper/css";
import 'swiper/css/navigation';
import { useRef } from "react";

const DemandCarousel = () => {
    const swiperRef = useRef();

  return (
    <>
        <Swiper
            modules={[Navigation]}
                onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}

        effect={"flip"}
        grabCursor={true}
        pagination={true}
        slidesPerView={3}
        breakpoints={{
          240: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={true}
        spaceBetween={50}
        className="text-black  w-full  mt-[20px]  lg:block"
         >
        <SwiperSlide className="flex flex-col bg-[#fff] rounded-md ">
        <div className=" w-full  h-full rounded-[5px] border-[1px] border-[#198cf6]">
            <img src={cyber} alt="cyberImage" className="w-full"/>
            <h2 className="md:text-[25px] text-[20px] font-semibold text-[#000] px-[32px] py-[35px] font-inter">Cyber security</h2>
        </div>  
        </SwiperSlide>
        <SwiperSlide className="flex flex-col bg-[#fff] rounded-md ">
        <div className=" w-full h-full rounded-[5px] border-[1px] border-[#198cf6]">
            <img src={web} alt="cyberImage" className="w-full"/>
            <h2 className="md:text-[25px] text-[20px]  font-semibold text-[#000] px-[32px] py-[35px] font-inter">Web development</h2>
        </div>  
        </SwiperSlide>
        <SwiperSlide className="flex flex-col bg-[#fff] rounded-md ">
        <div className=" w-full h-full rounded-[5px] border-[1px] border-[#198cf6]">
            <img src={ui} alt="cyberImage" className="w-full"/>
            <h2 className="md:text-[23px] text-[20px] lg:text-[23px]  font-semibold text-[#000] px-[15px] py-[35px] font-inter">Product designing(ui/ux)</h2>
        </div> 
        </SwiperSlide>

  </Swiper>
  <div className="flex justify-between ">
       <button onClick={() => swiperRef.current?.slidePrev()} className="mt-[-250px] opacity-80 z-20 text-[40px] bg-black h-[60px] rounded-full text-[#fff] w-[60px] flex items-center justify-center"><MdKeyboardArrowLeft /></button>
        <button onClick={() => swiperRef.current?.slideNext()} className="mt-[-250px] opacity-80 z-20 text-[40px] bg-black h-[60px] rounded-full text-[#fff] w-[60px] flex items-center justify-center"><MdOutlineKeyboardArrowRight /></button>
  </div>
      
    </>
  )
}

export default DemandCarousel
