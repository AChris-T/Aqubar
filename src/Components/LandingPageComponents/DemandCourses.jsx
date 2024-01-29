import cyber from "../../assets/Image/cyberImage.png"
import web from "../../assets/Image/web.png"
import ui from "../../assets/Image/ui.png"
const DemandCourses = () => {
  return (
    <>
    <div className="px-4 md:px-[72px] py-[24px] gap-[24px] flex flex-col">
      <div >
        <h3 className="md:text-[40px] text-[30px] font-Montserrat font-medium text-[#000]">On Demand</h3>
      </div>
      <div className="w-full flex gap-[94px] flex-col lg:flex-row">
        <div className="lg:w-[366px] w-full  h-full rounded-[5px] border-[1px] border-[#198cf6]">
            <img src={cyber} alt="cyberImage" className="w-full"/>
            <h2 className="md:text-[25px] text-[20px] font-semibold text-[#000] px-[32px] py-[35px] font-inter">Cyber security</h2>
        </div> 
        <div className="lg:w-[366px] w-full h-full rounded-[5px] border-[1px] border-[#198cf6]">
            <img src={web} alt="cyberImage" className="w-full"/>
            <h2 className="md:text-[25px] text-[20px]  font-semibold text-[#000] px-[32px] py-[35px] font-inter">Web development</h2>
        </div> 
        <div className="lg:w-[366px] w-full h-full rounded-[5px] border-[1px] border-[#198cf6]">
            <img src={ui} alt="cyberImage" className="w-full"/>
            <h2 className="md:text-[24px] text-[20px] lg:text-[23px]  font-semibold text-[#000] px-[15px] py-[35px] font-inter">Product designing(ui/ux)</h2>
        </div> 
      </div>
    </div>
      <div className="h-2 lg:w-[700px] w-200px mb-[80px] bg-[#198cf6] flex justify-center items-center lg:mx-80 md:mx-[52px] mx-2  mt-[105px]"></div>
    </>
  )
}

export default DemandCourses
