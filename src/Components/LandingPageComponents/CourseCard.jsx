import CourseCarousel from "./CourseCarousel"


const CourseCard = () => {
  return (
    <div className="px-4 md:px-[72px] mt-[55px]">
        <h3 className="text-[#000] text-[40px] font-Montserrat font-medium flex text-center">A wide range of course</h3>
        <p className="md:w-[750px] text-[#000] font-light font-Montserrat" >
        Choose from our wide range of courses and get started, with more courses published monthly.
        From web dev to as far as graphic designing.
        </p>

        <h3 className="text-[#000000] font-inter font-semibold text-[25px] mt-[20px]">Build your career in the tech space with our diverse courses....</h3>
        <CourseCarousel/>
        </div>
      
  )
}

export default CourseCard
