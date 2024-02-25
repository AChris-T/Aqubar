import pastPic from "../../assets/Image/20231020_115835 1.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Event from "../../assets/Image/Frame 10.png"
import Event_1 from "../../assets/Image/Frame 11.png"
import Event_2 from "../../assets/Image/Frame 12.png"
import Event_3 from "../../assets/Image/Frame 9.png"
import Event_4 from "../../assets/Image/Frame 8.png"
import Event_5 from "../../assets/Image/Frame 7.png"
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import "./Event.css"



// import required modules
const PastEvents = () => {
  return (
    <div>    
    <div className="md:px-[40px] py-[40px] px-4  lg:px-[60px] ">
      <h3 className="font-medium font-Montserrat leading-[48.76px] md:text-[40px] text-[30px] ">Past Events</h3>
      <p className="font-normal md:text-[20px] text-[15px]  font-Montserrat">View Our Slides from previous events</p>
      <div className="flex flex-col md:flex-row md:gap-20 gap-10 md:px-10 px-3 md:py-8 py-3 bg-white md:h-[400px] mt-4">
        <img src={pastPic} alt=""/>
        <div>
          <h3 className="font-medium font-Montserrat md:text-[35px] text-[25px] md:leading-[42.67px]">Exploring The Power Of Cloud, Blockchain and Cybersecurity.</h3>
          <p className="font-normal md:text-[25px] text-[18px] md:leading-[35.38px] mt-[20px] ">Join us and explore the latest advancement in cloud computing, blockchain and  cybersecurity. Learn from industry experts  and  gain practical knowledge to take your care to the   next level.</p>
        </div>
      </div>
      </div>
      <div className="">
      <h4 className="font-normal text-[30px] leading-[36.57px] font-Montserrat md:px-[40px] py-[40px] px-4  lg:px-[60px]  ">View Our Slide from our previous events</h4>
      <div className="w-full bg-white py-14">
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
            
          },
        }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mx-5 swiper_container"
      >
        <SwiperSlide>
          <img src={Event} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Event_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Event_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Event_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Event_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Event_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Event_3} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      </div>
      
    </div>
    </div>

  )
}

export default PastEvents
