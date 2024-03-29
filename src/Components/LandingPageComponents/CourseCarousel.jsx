import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import { MdOutlineKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";

import "swiper/css";
import 'swiper/css/navigation';
import CourseImage_1 from "../../../src/assets/Image/Rect.png"
import Tutor from "../../../src/assets/Image/tutor.png"
import RatingIcons from "../Icons/RatingIcons";
import TimerIcons from "../Icons/TimerIcons";
import { useRef } from "react";
import CartIcon from "../Icons/CartIcon";


const CourseCarousel = () => {
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
    slidesPerView={'auto'}
    breakpoints={{
          240: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
    }}
    autoplay={true}
    spaceBetween={30}
    className="text-black w-full  mt-[20px]  lg:block"
  >
       <SwiperSlide className="flex w-full bg-[#fff] flex-col rounded-md ">
          <div>
                <img src={CourseImage_1} alt='corse' width={"100%"}/>
          </div>
          <div className="px-[13.4px] py-[17.5px]">
              <div className="flex gap-[24.4px] mb-[13.9px]">
                <RatingIcons/>
                <p className="text-[#353535] font-inter text-[15px] font-medium">4.00</p>
              </div>
                <h2 className="text-[#353535] font-inter font-medium text-[12px]">
                A complete javascript course for beginners.
                </h2>
              <div className="flex items-center mt-[12px] gap-2">
                <TimerIcons/>
                <p className="text-[13px] font-normal font-inter text-[#353535]">54h</p>
              </div>
              <div className="mt-[16px] flex items-center gap-2 w-full">
                    <img src={Tutor} alt="tutorImage" className="object-contain  h-[25px] rounded-full"/>
                    <p className="text-[#353535] font-inter text-[10px] font-normal">Posted by Aquber for javascript and web development</p>
              </div>
              <div className="flex items-center justify-between mt-10 text-centers">
                    <p className="text-[#5f5f5f] text-[10px] line-through">£5000</p>
                    <p className="text-[15px] font-normal text-[#353535]">£5000</p>
                    <button className="bg-[#198cf6] rounded-md cursor-pointer gap-1 w-[88px] h-[32px] flex items-center justify-center">
                    <CartIcon/>
                    <p className="text-[10px] text-[#fff] font-medium font-inter ">Buy course</p>
                    </button>
              </div>
          </div>
       </SwiperSlide>
       <SwiperSlide className="flex flex-col bg-[#fff] rounded-md ">
          <div>
                <img src={CourseImage_1} alt='corse' width={"100%"}/>
          </div>
          <div className="px-[13.4px] py-[17.5px]">
              <div className="flex gap-[24.4px] mb-[13.9px]">
                <RatingIcons/>
                <p className="text-[#353535] font-inter text-[15px] font-medium">4.00</p>
              </div>
                <h2 className="text-[#353535] font-inter font-medium text-[12px]">
                A complete javascript course for beginners.
                </h2>
              <div className="flex items-center mt-[12px] gap-2">
                <TimerIcons/>
                <p className="text-[13px] font-normal font-inter text-[#353535]">54h</p>
              </div>
              <div className="mt-[16px] flex items-center gap-2 w-full">
                    <img src={Tutor} alt="tutorImage" className="object-contain w-[25px] h-[25px] rounded-full"/>
                    <p className="text-[#353535] font-inter text-[10px] font-normal">Posted by Aquber for javascript and web development</p>
              </div>
              <div className="flex items-center justify-between mt-10 text-centers">
                    <p className="text-[#5f5f5f] text-[10px] line-through">£5000</p>
                    <p className="text-[15px] font-normal text-[#353535]">£5000</p>
                    <button className="bg-[#198cf6] rounded-md cursor-pointer gap-1 w-[88px] h-[32px] flex items-center justify-center">
                    <CartIcon/>
                    <p className="text-[10px] text-[#fff] font-medium font-inter ">Buy course</p>
                    </button>
              </div>
          </div>
       </SwiperSlide>
       <SwiperSlide className="flex flex-col bg-[#fff] rounded-md ">
          <div>
                <img src={CourseImage_1} alt='corse' width={"100%"}/>
          </div>
          <div className="px-[13.4px] py-[17.5px]">
              <div className="flex gap-[24.4px] mb-[13.9px]">
                <RatingIcons/>
                <p className="text-[#353535] font-inter text-[15px] font-medium">4.00</p>
              </div>
                <h2 className="text-[#353535] font-inter font-medium text-[12px]">
                A complete javascript course for beginners.
                </h2>
              <div className="flex items-center mt-[12px] gap-2">
                <TimerIcons/>
                <p className="text-[13px] font-normal font-inter text-[#353535]">54h</p>
              </div>
              <div className="mt-[16px] flex items-center gap-2 w-full">
                    <img src={Tutor} alt="tutorImage" className="object-contain w-[25px] h-[25px] rounded-full"/>
                    <p className="text-[#353535] font-inter text-[10px] font-normal">Posted by Aquber for javascript and web development</p>
              </div>
              <div className="flex items-center justify-between mt-10 text-centers">
                    <p className="text-[#5f5f5f] text-[10px] line-through">£5000</p>
                    <p className="text-[15px] font-normal text-[#353535]">£5000</p>
                    <button className="bg-[#198cf6] rounded-md cursor-pointer gap-1 w-[88px] h-[32px] flex items-center justify-center">
                    <CartIcon/>
                    <p className="text-[10px] text-[#fff] font-medium font-inter ">Buy course</p>
                    </button>
              </div>
          </div>
       </SwiperSlide>       
       <SwiperSlide className="flex flex-col bg-[#fff] rounded-md ">
          <div>
                <img src={CourseImage_1} alt='corse' width={"100%"}/>
          </div>
          <div className="px-[13.4px] py-[17.5px]">
              <div className="flex gap-[24.4px] mb-[13.9px]">
                <RatingIcons/>
                <p className="text-[#353535] font-inter text-[15px] font-medium">4.00</p>
              </div>
                <h2 className="text-[#353535] font-inter font-medium text-[12px]">
                A complete javascript course for beginners.
                </h2>
              <div className="flex items-center mt-[12px] gap-2">
                <TimerIcons/>
                <p className="text-[13px] font-normal font-inter text-[#353535]">54h</p>
              </div>
              <div className="mt-[16px] flex items-center gap-2 w-full">
                    <img src={Tutor} alt="tutorImage" className="object-contain w-[25px] h-[25px] rounded-full"/>
                    <p className="text-[#353535] font-inter text-[10px] font-normal">Posted by Aquber for javascript and web development</p>
              </div>
              <div className="flex items-center justify-between mt-10 text-centers">
                    <p className="text-[#5f5f5f] text-[10px] line-through">£5000</p>
                    <p className="text-[15px] font-normal text-[#353535]">£5000</p>
                    <button className="bg-[#198cf6] rounded-md cursor-pointer gap-1 w-[88px] h-[32px] flex items-center justify-center">
                    <CartIcon/>
                    <p className="text-[10px] text-[#fff] font-medium font-inter ">Buy course</p>
                    </button>
              </div>
          </div>
       </SwiperSlide>
       <SwiperSlide className="flex flex-col bg-[#fff] rounded-md ">
          <div>
                <img src={CourseImage_1} alt='corse' width={"100%"}/>
          </div>
          <div className="px-[13.4px] py-[17.5px]">
              <div className="flex gap-[24.4px] mb-[13.9px]">
                <RatingIcons/>
                <p className="text-[#353535] font-inter text-[15px] font-medium">4.00</p>
              </div>
                <h2 className="text-[#353535] font-inter font-medium text-[12px]">
                A complete javascript course for beginners.
                </h2>
              <div className="flex items-center mt-[12px] gap-2">
                <TimerIcons/>
                <p className="text-[13px] font-normal font-inter text-[#353535]">54h</p>
              </div>
              <div className="mt-[16px] flex items-center gap-2 w-full">
                    <img src={Tutor} alt="tutorImage" className="object-contain w-[25px] h-[25px] rounded-full"/>
                    <p className="text-[#353535] font-inter text-[10px] font-normal">Posted by Aquber for javascript and web development</p>
              </div>
              <div className="flex items-center justify-between mt-10 text-centers">
                    <p className="text-[#5f5f5f] text-[10px] line-through">£5000</p>
                    <p className="text-[15px] font-normal text-[#353535]">£5000</p>
                    <button className="bg-[#198cf6] rounded-md cursor-pointer gap-1 w-[88px] h-[32px] flex items-center justify-center">
                    <CartIcon/>
                    <p className="text-[10px] text-[#fff] font-medium font-inter ">Buy course</p>
                    </button>
              </div>
          </div>
       </SwiperSlide>
       <SwiperSlide className="flex flex-col bg-[#fff] rounded-md ">
          <div>
                <img src={CourseImage_1} alt='corse' width={"100%"}/>
          </div>
          <div className="px-[13.4px] py-[17.5px]">
              <div className="flex gap-[24.4px] mb-[13.9px]">
                <RatingIcons/>
                <p className="text-[#353535] font-inter text-[15px] font-medium">4.00</p>
              </div>
                <h2 className="text-[#353535] font-inter font-medium text-[12px]">
                A complete javascript course for beginners.
                </h2>
              <div className="flex items-center mt-[12px] gap-2">
                <TimerIcons/>
                <p className="text-[13px] font-normal font-inter text-[#353535]">54h</p>
              </div>
              <div className="mt-[16px] flex items-center gap-2 w-full">
                    <img src={Tutor} alt="tutorImage" className="object-contain w-[25px] h-[25px] rounded-full"/>
                    <p className="text-[#353535] font-inter text-[10px] font-normal">Posted by Aquber for javascript and web development</p>
              </div>
              <div className="flex items-center justify-between mt-10 text-centers">
                    <p className="text-[#5f5f5f] text-[10px] line-through">£5000</p>
                    <p className="text-[15px] font-normal text-[#353535]">£5000</p>
                    <button className="bg-[#198cf6] rounded-md cursor-pointer gap-1 w-[88px] h-[32px] flex items-center justify-center">
                    <CartIcon/>
                    <p className="text-[10px] text-[#fff] font-medium font-inter ">Buy course</p>
                    </button>
              </div>
          </div>
       </SwiperSlide>      
       <SwiperSlide className="flex flex-col bg-[#fff] rounded-md ">
          <div>
                <img src={CourseImage_1} alt='corse' width={"100%"}/>
          </div>
          <div className="px-[13.4px] py-[17.5px]">
              <div className="flex gap-[24.4px] mb-[13.9px]">
                <RatingIcons/>
                <p className="text-[#353535] font-inter text-[15px] font-medium">4.00</p>
              </div>
                <h2 className="text-[#353535] font-inter font-medium text-[12px]">
                A complete javascript course for beginners.
                </h2>
              <div className="flex items-center mt-[12px] gap-2">
                <TimerIcons/>
                <p className="text-[13px] font-normal font-inter text-[#353535]">54h</p>
              </div>
              <div className="mt-[16px] flex items-center gap-2 w-full">
                    <img src={Tutor} alt="tutorImage" className="object-contain w-[25px] h-[25px] rounded-full"/>
                    <p className="text-[#353535] font-inter text-[10px] font-normal">Posted by Aquber for javascript and web development</p>
              </div>
              <div className="flex items-center justify-between mt-10 text-centers">
                    <p className="text-[#5f5f5f] text-[10px] line-through">£5000</p>
                    <p className="text-[15px] font-normal text-[#353535]">£5000</p>
                    <button className="bg-[#198cf6] rounded-md cursor-pointer gap-1 w-[88px] h-[32px] flex items-center justify-center">
                    <CartIcon/>
                    <p className="text-[10px] text-[#fff] font-medium font-inter ">Buy course</p>
                    </button>
              </div>
          </div>
       </SwiperSlide>
       <SwiperSlide className="flex flex-col bg-[#fff] rounded-md ">
          <div>
                <img src={CourseImage_1} alt='corse' width={"100%"}/>
          </div>
          <div className="px-[13.4px] py-[17.5px]">
              <div className="flex gap-[24.4px] mb-[13.9px]">
                <RatingIcons/>
                <p className="text-[#353535] font-inter text-[15px] font-medium">4.00</p>
              </div>
                <h2 className="text-[#353535] font-inter font-medium text-[12px]">
                A complete javascript course for beginners.
                </h2>
              <div className="flex items-center mt-[12px] gap-2">
                <TimerIcons/>
                <p className="text-[13px] font-normal font-inter text-[#353535]">54h</p>
              </div>
              <div className="mt-[16px] flex items-center gap-2 w-full">
                    <img src={Tutor} alt="tutorImage" className="object-contain w-[25px] h-[25px] rounded-full"/>
                    <p className="text-[#353535] font-inter text-[10px] font-normal">Posted by Aquber for javascript and web development</p>
              </div>
              <div className="flex items-center justify-between mt-10 text-centers">
                    <p className="text-[#5f5f5f] text-[10px] line-through">£5000</p>
                    <p className="text-[15px] font-normal text-[#353535]">£5000</p>
                    <button className="bg-[#198cf6] rounded-md cursor-pointer gap-1 w-[88px] h-[32px] flex items-center justify-center">
                    <CartIcon/>
                    <p className="text-[10px] text-[#fff] font-medium font-inter ">Buy course</p>
                    </button>
              </div>
          </div>
       </SwiperSlide>
       <SwiperSlide className="flex flex-col bg-[#fff] rounded-md ">
          <div>
                <img src={CourseImage_1} alt='corse' width={"100%"}/>
          </div>
          <div className="px-[13.4px] py-[17.5px]">
              <div className="flex gap-[24.4px] mb-[13.9px]">
                <RatingIcons/>
                <p className="text-[#353535] font-inter text-[15px] font-medium">4.00</p>
              </div>
                <h2 className="text-[#353535] font-inter font-medium text-[12px]">
                A complete javascript course for beginners.
                </h2>
              <div className="flex items-center mt-[12px] gap-2">
                <TimerIcons/>
                <p className="text-[13px] font-normal font-inter text-[#353535]">54h</p>
              </div>
              <div className="mt-[16px] flex items-center gap-2 w-full">
                    <img src={Tutor} alt="tutorImage" className="object-contain w-[25px] h-[25px] rounded-full"/>
                    <p className="text-[#353535] font-inter text-[10px] font-normal">Posted by Aquber for javascript and web development</p>
              </div>
              <div className="flex items-center justify-between mt-10 text-centers">
                    <p className="text-[#5f5f5f] text-[10px] line-through">£5000</p>
                    <p className="text-[15px] font-normal text-[#353535]">£5000</p>
                    <button className="bg-[#198cf6] rounded-md cursor-pointer gap-1 w-[88px] h-[32px] flex items-center justify-center">
                    <CartIcon/>
                    <p className="text-[10px] text-[#fff] font-medium font-inter ">Buy course</p>
                    </button>
              </div>
          </div>
       </SwiperSlide>
       <SwiperSlide className="flex flex-col bg-[#fff] rounded-md ">
          <div>
                <img src={CourseImage_1} alt='corse' width={"100%"}/>
          </div>
          <div className="px-[13.4px] py-[17.5px]">
              <div className="flex gap-[24.4px] mb-[13.9px]">
                <RatingIcons/>
                <p className="text-[#353535] font-inter text-[15px] font-medium">4.00</p>
              </div>
                <h2 className="text-[#353535] font-inter font-medium text-[12px]">
                A complete javascript course for beginners.
                </h2>
              <div className="flex items-center mt-[12px] gap-2">
                <TimerIcons/>
                <p className="text-[13px] font-normal font-inter text-[#353535]">54h</p>
              </div>
              <div className="mt-[16px] flex items-center gap-2 w-full">
                    <img src={Tutor} alt="tutorImage" className="object-contain w-[25px] h-[25px] rounded-full"/>
                    <p className="text-[#353535] font-inter text-[10px] font-normal">Posted by Aquber for javascript and web development</p>
              </div>
              <div className="flex items-center justify-between mt-10 text-centers">
                    <p className="text-[#5f5f5f] text-[10px] line-through">£5000</p>
                    <p className="text-[15px] font-normal text-[#353535]">£5000</p>
                    <button className="bg-[#198cf6] rounded-md cursor-pointer gap-1 w-[88px] h-[32px] flex items-center justify-center">
                    <CartIcon/>
                    <p className="text-[10px] text-[#fff] font-medium font-inter ">Buy course</p>
                    </button>
              </div>
          </div>
       </SwiperSlide>
             
  </Swiper>
  <div className="flex justify-between ">
       <button onClick={() => swiperRef.current?.slidePrev()} className="mt-[-230px] opacity-20 z-20 text-[40px] bg-black h-[60px] rounded-full text-[#fff] w-[60px] flex items-center justify-center ml-4"><MdKeyboardArrowLeft /></button>
        <button onClick={() => swiperRef.current?.slideNext()} className="mt-[-230px] opacity-20 z-20 text-[40px] bg-black h-[60px] rounded-full text-[#fff] w-[60px] flex items-center justify-center mr-4"><MdOutlineKeyboardArrowRight /></button>
  </div>


</>
  )
}

export default CourseCarousel
