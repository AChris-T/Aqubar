
const HeroSection = () => {
  return (
    <div className="w-[100%]  md:h-[500px] h-[450px]   md:mt-[60px] ">
      <div className="eventbg" >
        <div className="w-full h-full ">
            <div className="flex flex-col justify-center w-full h-full px-2 md:px-10">
            <div className="flex items-center justify-between mb-2 "> 
                <div className="flex items-center w-full gap-2 md:gap-10 font-Montserrat ">  
                <div className="w-[40px] rounded-full  border-[1px] border-white h-[40px]"></div>
                <h3 className="font-medium w-[250px] md:w-[500px] md:leading-[60.95px] leading-8 text-[25px]  md:text-[50px] text-white">Discover Our Upcoming events!</h3>
               </div>
                 <div className="md:w-[40px] w-[45px] rounded-full  border-[1px] border-white h-[40px]"></div>
            </div>
                <p className="text-white md:ml-[90px] ml-[45px] font-normal text-[16px] md:leading-[24.38px]">Welcome to our Events section!<br/> Get ready for exciting happenings by checking out <br/> our upcoming events.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
