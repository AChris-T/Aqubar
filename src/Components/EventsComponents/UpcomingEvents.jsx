import EventPic from "../../assets/Image/Frame 6.png"
const UpcomingEvents = () => {
  return (
    <div className="md:px-[40px] px-4 py-[40px]  lg:px-[60px] bg-gray-100">
    <div className="flex flex-col justify-between md:items-center md:flex-row">
    <h3 className="md:text-[40px] text-[25px]  leading-[48.76px] font-Montserrat font-medium">Upcoming Events</h3>
    <div className="flex gap-3 md:gap-12">
      <input placeholder="Type" className="h-[50px] rounded-md bg-[#CBE0F3] text-black pl-4 pr-4 md:w-[180px] w-[145px] placeholder-black text-[20px] font-Montserrat  focus:outline-none"/>      
      <input placeholder="Type" className="h-[50px] rounded-md bg-[#CBE0F3] text-black pl-4 pr-4 md:w-[180px] w-[145px] placeholder-black text-[20px] font-Montserrat  focus:outline-none"/>      
    </div>
    </div>
    <div className="flex flex-col gap-4 md:gap-16 md mt-7 md:flex-row">
      <img src={EventPic} alt="sg" className="object-cover"/>
      <img src={EventPic} alt="sg" className="object-cover"/>
    </div>
    </div>
  )
}

export default UpcomingEvents
