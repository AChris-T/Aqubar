import cyber from "../../assets/Image/cyberImage.png"
import web from "../../assets/Image/web.png"
import ui from "../../assets/Image/ui.png"
const DemandCourses = () => {
  return (
    <div className="px-4 md:px-[72px] py-[24px] gap-[24px] flex flex-col">
      <div >
        <h3 className="text-[40px] font-Montserrat font-medium text-[#000]">On Demand</h3>
      </div>
      <div className="w-full flex gap-[94px] flex-col md:flex-row">
        <div className="md:w-[366px] w-full  h-full rounded-[5px] border-[1px] border-[#198cf6]">
            <img src={cyber} alt="cyberImage"/>
            <h2 className="text-[25px] font-semibold text-[#000] px-[32px] py-[35px] font-inter">Cyber security</h2>
        </div> 
        <div className="md:w-[366px] w-full h-full rounded-[5px] border-[1px] border-[#198cf6]">
            <img src={web} alt="cyberImage"/>
            <h2 className="text-[25px] font-semibold text-[#000] px-[32px] py-[35px] font-inter">Web development</h2>
        </div> 
        <div className="md:w-[366px] w-full h-full rounded-[5px] border-[1px] border-[#198cf6]">
            <img src={ui} alt="cyberImage"/>
            <h2 className="text-[25px] font-semibold text-[#000] px-[20px] py-[35px] font-inter">Product designing(ui/ux)</h2>
        </div> 
      </div>
      <div className="h-2 md:w-[700px] w-200px bg-[#198cf6] flex justify-center items-center md:mx-72 mx-8  mt-[105px]"></div>
    </div>
  )
}

export default DemandCourses
