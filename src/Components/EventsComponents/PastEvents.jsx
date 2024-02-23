import pastPic from "../../assets/Image/20231020_115835 1.png"
const PastEvents = () => {
  return (
    <div className="md:px-[40px] py-[40px] px-4  lg:px-[60px] bg-gray-100">
      <h3 className="font-medium font-Montserrat leading-[48.76px] md:text-[40px] text-[30px] ">Past Events</h3>
      <p className="font-normal md:text-[20px] text-[15px]  font-Montserrat">View Our Slides from previous events</p>
      <div className="flex flex-col md:flex-row gap-20 px-10 py-8 bg-white md:h-[400px] mt-4">
        <img src={pastPic} alt=""/>
        <div>
          <h3 className="font-medium font-Montserrat md:text-[35px] text-[25px] md:leading-[42.67px]">Exploring The Power Of Cloud, Blockchain and Cybersecurity.</h3>
          <p className="font-normal md:text-[25px] text-[18px] md:leading-[35.38px] mt-[20px] ">Join us and explore the latest advancement in cloud computing, blockchain and  cybersecurity. Learn from industry experts  and  gain practical knowledge to take your care to the   next level.</p>
        </div>
      </div>
    </div>
  )
}

export default PastEvents
