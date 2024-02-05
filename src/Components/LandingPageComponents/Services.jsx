/* eslint-disable react/no-unescaped-entities */
import service from "../../assets/Image/serv.png"
import service_1 from "../../assets/Image/serve.png"
import service_2 from "../../assets/Image/served.png"
const Services = () => {
  return (
    <div>
        <div className="bg-[#198cf6] w-[205px] h-[68px] text-[#fff] text-[25px] font-inter font-semibold flex justify-center items-center">Services</div>
        <div className="flex flex-col">
            <div className="flex justify-center flex-wrap text-center lg:text-start mt-[50px]">
                <h2 className="text-[#000] font-inter font-medium text-[15px] md:text-[25px] px-4 md:px-[63px]">We provide platforms for individuals to learn and grow in the ever-evolving tech space.</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:mt-[118px] mt-[40px] px-4 md:px-[63px]">
                  <div>
                     <img src={service} alt="service" className="mt-10 w-full"/>
                  </div>
                  <div>
                    <h2 className="lg:w-[752px] md:w-[500px] font-light text-[#000] md:text-[25px] text-[15px] font-Montserrat"><p className="font-medium">- Boot-Camps</p>
                      <p className="mt-10">Explore our specialized boot-camps programs designed 
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
            <div className="h-2 lg:w-[700px] w-200px bg-[#198cf6] flex  justify-center items-center lg:mx-80 mx-2  md:mx-[152px]  mt-[105px]"></div>
                <div className="flex flex-col md:flex-row justify-between mt-[80px] md:mt-[118px] px-4 md:px-[63px]">  
                  <div>
                    <h2 className="lg:w-[752px] md:w-[500px] font-light text-[#000] text-[15px] md:text-[25px] font-Montserrat"><p className="font-medium">- Live Training Sessions</p>
                      <p className="mt-10">
                        Join our interactive live training
                         sessions to enhance your learning experience.
                          Our expert educators provide real-time guidance,
                           answer your questions, and help you master key 
                           concepts. Don't miss the opportunity to engage 
                           with the best in the field.</p>
                    </h2>
                  </div>
                  <div className="mt-6 ">
                      <img src={service_1} alt="service" className="mt-10 w-full" />
                  </div>
            </div>
            <div className="h-2 lg:w-[700px] w-200px bg-[#198cf6] flex justify-center items-center lg:mx-80 md:mx-[152px] mx-2  mt-[105px]"></div>

                <div className="flex flex-col md:flex-row justify-between md:mt-[118px] mt-[80px] gap-8 px-4 md:px-[63px]">  
                <div className="banner">
                      <img src={service_2} alt="service" className="mt-8 w-full"/>
                  </div>
                  <div>
                    <h2 className="lg:w-[752px] md:w-[500px] font-light text-[#000] text-[15px] md:text-[25px]  font-Montserrat"><p className="font-medium">- Live Training Sessions</p>
                      <p className="mt-10">
                        Join our interactive live training
                         sessions to enhance your learning experience.
                          Our expert educators provide real-time guidance,
                           answer your questions, and help you master key 
                           concepts. Don't miss the opportunity to engage 
                           with the best in the field.</p>
                    </h2>
                  </div>
                  
            </div>
            <div className="h-2 lg:w-[700px] w-200px bg-[#198cf6] flex justify-center items-center lg:mx-80 mx-2 md:mx-[152px] mt-[105px]"></div>
        </div>
    </div>
  )
}

export default Services
