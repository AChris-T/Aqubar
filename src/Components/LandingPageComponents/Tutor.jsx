import tutor from "../../assets/Image/t.png"
import EventIcon from "../Icons/EventIcon"
const Tutor = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:px-[72px] px-3">
    <div>
        <div className="flex justify-between flex-col md:flex-row gap-8">
        <div className="flex gap-[20px] flex-col">
            <h5 className="text-[50px] font-Montserrat font-medium text-[#000] flex text-center">Become a tutor</h5>
            <p className="md:w-[600px] text-[25px] font-light">Join a wide range of tutors from different tech fields, upload courses on aquber.</p>
            <button className="border-2 border-[#198cf6] rounded-md text-[#198cf6] font-inter text-[15px] w-[183px] h-[51px] hover:bg-[#198cf6] hover:text-[#fff]">Become a tutor</button>
        </div>
        <div className="w-501px h-[349px] rounded-[10px] bg-[#198cf6] px-[19px] py-[27px] ">
            <img src={tutor} alt="tutorImage" className="h-full object-cover "/>
        </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row mt-[79px] gap-20 md:gap-0 ">
           <div className="md:px-[225px]">
            <EventIcon/>
           </div>
           <div className="flex flex-col gap-[26px] md:-ml-20">
           <h3 className="text-[#000] font-Montserrat text-[50px] font-normal flex text-center">Event and webinar</h3>
           <p className="text-[20px] font-Montserrat font-light text-[#000]">Join techies from different fields, attend and take
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
            <h3 className=" px-4 flex text-center text-[25px] font-inter font-light text-[#000]">Begin your journey with courses on aquber</h3>
            <button className="border-2 border-[#198cf6] rounded-md text-[#fff] font-inter text-[15px] w-[183px] h-[51px] bg-[#198cf6] hover:bg-[#198cf6] hover:text-[#fff]">Get Started</button>

        </div>
    </div>
    </>
  )
}

export default Tutor
