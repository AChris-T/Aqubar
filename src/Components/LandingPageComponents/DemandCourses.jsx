
import DemandCarousel from "./DemandCarousel"
const DemandCourses = () => {
  return (
    <>
    <div className="px-4 md:px-[72px] py-[24px] gap-[24px] flex flex-col">
      <div >
        <h3 className="md:text-[40px] text-[30px] font-Montserrat font-medium text-[#000]">On Demand</h3>
      </div>
      <DemandCarousel/>
    </div>
      <div className="h-2 lg:w-[700px] w-200px mb-[80px] bg-[#198cf6] flex justify-center items-center lg:mx-80 md:mx-[152px] mx-[50px]
       mt-[105px]"></div>
    </>
  )
}

export default DemandCourses
