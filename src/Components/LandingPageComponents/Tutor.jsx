import tutor from "../../assets/Image/t.png"
import EventIcon from "../Icons/EventIcon"
import EventSlider from "../../assets/Image/bro.png"
import EventSlider_1 from "../../assets/Image/rafiki.png"


// or other themes
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide } from '@splidejs/react-splide';


const Tutor = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:px-[72px] px-3">
    <div>
        <h5 className="md:text-[50px] text-[30px] mb-[10px] font-Montserrat font-medium text-[#000] flex text-center">Become a tutor</h5>
        <div className="flex flex-col-reverse justify-between gap-8 md:flex-row">
        <div className="flex justify-center gap-[20px] flex-col">
            <p className="lg:w-[600px] md:text-[20px] text-[15px] font-light">Join a wide range of tutors from different tech fields, upload courses on aquber.</p>
            <button className="border-2 border-[#198cf6] rounded-md text-[#198cf6] font-inter text-[15px] w-[183px] h-[51px] hover:bg-[#198cf6] hover:text-[#fff]">Become a tutor</button>
        </div>
        <div className="lg:w-[480px] h-full rounded-[10px] bg-[#198cf6] px-[19px] py-[27px] ">
            <img src={tutor} alt="tutorImage" className="object-cover h-[] w-full "/>
        </div>
        </div>
      
        <div className="flex  justify-between flex-col md:flex-row mt-[150px] gap-20 md:gap-0 ">
          <div className="w-full md:ml-[-30px] lg:ml-0">
           <div className=" mt-[0px] w-[350px] -mx-10 md:mx-0 " >
           <Splide aria-label="My Favorite Images" 
            options={ {
             autoplay:true,
             rewind: true,
             gap   : '1rem',
             arrowPath:false,
             arrows:false
            } }
            >
              <SplideSlide >
                 <img src={EventSlider} alt="slide" className=""/>
              </SplideSlide>
             <SplideSlide>
             <img src={EventSlider_1} alt="slide" className=""/>
              </SplideSlide>
              <SplideSlide>
                <EventIcon/>
              </SplideSlide> 
              <SplideSlide>
                <EventIcon/>
              </SplideSlide>
               <SplideSlide>
                <EventIcon/>
              </SplideSlide>
            </Splide>
           </div>
           </div>
           <div className="flex flex-col  gap-[26px] lg:-ml-20 ">
           <h3 className="text-[#000] font-Montserrat md:text-[40px] lg:text-[50px] text-[30px] font-normal flex text-center ">Event and webinar</h3>
           <p className="md:text-[20px]   text-[15px] font-Montserrat font-light text-[#000]">Join techies from different fields, attend and take
                part in our events, boot camp and webinar both
                online and physically.
            </p>
            <button className="border-2 border-[#198cf6] rounded-md text-[#198cf6] font-inter text-[15px] w-[183px] h-[51px] hover:bg-[#198cf6] hover:text-[#fff]">Attend</button>
           </div>
        </div>
    </div>
    </div>
    <div>
        <div className="flex justify-center mt-[111px] flex-col items-center gap-[10px]">
            <h3 className=" px-4 flex text-center md:text-[25px] text-[20px] font-inter font-light text-[#000]">Begin your journey with courses on aquber</h3>
            <button className="border-2 border-[#198cf6] rounded-md text-[#fff] font-inter text-[15px] w-[183px] h-[51px] bg-[#198cf6] hover:bg-[#198cf6] hover:text-[#fff]">Get Started</button>

        </div>
    </div>
    </>
  )
}

export default Tutor
