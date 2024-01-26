import CourseCard from "../../Components/LandingPageComponents/CourseCard"
import DemandCourses from "../../Components/LandingPageComponents/DemandCourses"
import Footer from "../../Components/LandingPageComponents/Footer"
import HeroSection from "../../Components/LandingPageComponents/HeroSection"
import Navbar from "../../Components/LandingPageComponents/Navbar"
import Partners from "../../Components/LandingPageComponents/Partners"
import Services from "../../Components/LandingPageComponents/Services"
import Tutor from "../../Components/LandingPageComponents/Tutor"

const LandingPageLayout = () => {
  return (
    <div className="max-w-[1452px] bg-[#FAFAF9] mx-auto shadow-card">
      <Navbar/>
      <HeroSection/>
      <Services/>
      <CourseCard/>
      <DemandCourses/>
      <Tutor/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default LandingPageLayout
