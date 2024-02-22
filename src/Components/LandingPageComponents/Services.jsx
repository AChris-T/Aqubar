/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react"
import service from "../../assets/Image/serv.png"
import service_1 from "../../assets/Image/serve.png"
import service_2 from "../../assets/Image/served.png"
import  AOS  from "aos"
import 'aos/dist/aos.css'
const Services = () => {
  useEffect (() =>{
    AOS.init({});
  },[])
  return (
    <div>
        <div className="bg-[#198cf6] md:w-[205px] w-[120px] h-[50px] md:h-[68px] text-[#fff] text-[15px] md:text-[25px] font-inter font-semibold flex justify-center items-center">Services</div>
        <div className="flex flex-col">
            <div className="flex justify-center flex-wrap text-center lg:text-start mt-[50px]">
                <h2 className="text-[#000] font-inter font-medium text-[15px] md:text-[25px] px-4 md:px-[63px]">We provide platforms for individuals to learn and grow in the ever-evolving tech space.</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:mt-[118px] mt-[40px] px-4 md:px-[63px]">
                  <div data-aos="fade-right"
                    data-aos-duration="1000">
                     <img src={service} alt="service" className="mt-10 w-full  px-[20px] md:px-0"/>
                  </div>
                  <div  data-aos="fade-left" data-aos-duration="3000">
                    <h2 className="lg:w-[752px] md:w-[500px] font-light text-[#000] md:text-[25px] text-[15px] font-Montserrat"><p className="font-medium  flex justify-center items-center md:justify-start mt-10 md:mt-0">- Boot-Camps</p>
                      <p className="mt-10 flex text-center md:text-start">Explore our specialized boot-camps programs designed 
                      to fast-track your skills and knowledge 
                      in various fields. Whether you're aiming
                       for a career change or looking to
                        enhance your expertise, our boot-camps
                         offer hands-on, high-impact learning
                          experiences to help you achieve your 
                          goals.</p>
                    </h2>
                  </div>
            </div>
            <div className="h-2 lg:w-[700px] w-200px bg-[#198cf6] flex  justify-center items-center lg:mx-80 mx-[50px]  md:mx-[152px]  mt-[105px]"></div>
                <div className="flex flex-col-reverse md:flex-row justify-between mt-[80px] md:mt-[118px] px-4 md:px-[63px]">  
                  <div data-aos="zoom-out-left">
                    <h2 className="lg:w-[752px] md:w-[500px] font-light text-[#000] text-[15px] md:text-[25px] font-Montserrat"><p className="font-medium flex justify-center items-center md:justify-start">- Live Training Sessions</p>
                      <p className="mt-10 flex text-center md:text-start">
                        Join our interactive live training
                         sessions to enhance your learning experience.
                          Our expert educators provide real-time guidance,
                           answer your questions, and help you master key 
                           concepts. Don't miss the opportunity to engage 
                           with the best in the field.</p>
                    </h2>
                  </div>
                  <div className="mt-6 " data-aos="flip-left">
                      <img src={service_1} alt="service" className="md:mt-10 mt:0 mb-10 md:mb-0  md:w-full px-[20px] md:px-0" />
                  </div>
            </div>
            <div className="h-2 lg:w-[700px] w-200px bg-[#198cf6] flex justify-center items-center lg:mx-80 md:mx-[152px] mx-[50px]  mt-[105px]"></div>

                <div className="flex flex-col md:flex-row justify-between md:mt-[118px] mt-[80px] gap-8 px-4 md:px-[63px]">  
                <div className="banner" data-aos="zoom-in-down">
                      <img src={service_2} alt="service" className="mt-8 w-full md:w-full px-[20px] md:px-0"/>
                  </div>
                  <div data-aos="zoom-in-down">
                    <h2 className="lg:w-[752px] md:w-[500px] font-light text-[#000] text-[15px] md:text-[25px]  font-Montserrat"><p className="font-medium  flex justify-center items-center md:justify-start">- Events</p>
                      <p className="mt-10 flex text-center md:text-start">
                       Stay Informed and Engaged! Explore our upcoming webinars, worskshops, and conferences to keep up with the latest trends in education technology, connect with eperts, and enhance your teaching and learning experience.</p>
                    </h2>
                  </div>
                  
            </div>
            <div className="h-2 lg:w-[700px] w-200px bg-[#198cf6] flex justify-center items-center lg:mx-80 mx-[50px] md:mx-[152px] mt-[105px]"></div>
        </div>
    </div>
  )
}

export default Services
