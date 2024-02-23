import EventsSlider from "../../Components/EventsComponents/EventsSlider"
import HeroSection from "../../Components/EventsComponents/HeroSection"
import PastEvents from "../../Components/EventsComponents/PastEvents"
import UpcomingEvents from "../../Components/EventsComponents/UpcomingEvents"
import Footer from "../../Components/Modals/Footer"
import Navbar from "../../Components/Modals/Navbar"

const EventPage = () => {
  return (
    <div className="max-w-[1500px]  bg-[#FAFAF9] mx-auto shadow-card overflow-x-hidden">
      <Navbar/>
      <HeroSection/>
      <UpcomingEvents/>
      <PastEvents/>
      <EventsSlider/>
      <Footer/>
    </div>
  )
}

export default EventPage
