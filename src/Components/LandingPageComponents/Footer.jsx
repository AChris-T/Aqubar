import logo from "../../assets/Image/whiteAqubar.png"
import Facebook from "../Icons/Facebook"
import InstragramIcon from "../Icons/InstragramIcon"
import SearchIcons from "../Icons/SearchIcons"
import Twitter from "../Icons/Twitter"
const Footer = () => {
  return (
    <div className="bg-[#0E0E0E] ">
    <div className=" border-b-[#198cf6] border-b-2 font-inter  text-[#cacaca] px-4 md:px-[70px] py-[29px] w-full flex justify-between md:items-center flex-col md:flex-row">

        <div className="flex-col  md:flex gap-[30px] hidden  ">
            <h1 className="font-semibold text-[20px]">Usefull links</h1>
            <a href="" className="text-[15px] font-normal ">Become a tutor</a>
            <a href="" className="text-[15px] font-normal ">Buy courses</a>
            <a href="" className="text-[15px] font-normal ">FAQ</a>
            <a href="" className="text-[15px] font-normal ">Aquber affiliate</a>
        </div>
        <div className="flex md:justify-center  flex-col md:items-center" >
            <img src={logo} alt="logo" width={"138px"}/>
            <h2 className="px-2">Contact us</h2>
            <a href="www.aqubertechnologies@gmail.com" target="_blank" className="text-[15px] font-normal px-2">aqubertechnologies@gmail.com</a>
        </div>
        
        <div  className="px-2 mt-8 flex flex-col gap-4">
          <h2 className="text-[25px] font-semibold">Newsletter</h2>
          <p>Subscribe for newsletters from Aquber 
            technologies.
            </p>
            <div className="flex items-center">
            <input className="md:w-[374px] rounded-[40px] h-[48px] border-[1px] border-[#198cf6] bg-transparent" />
            <div className="cursor-pointer ml-[-40px]">
            <SearchIcons/>
            </div>
            </div>
          <div className="mt-2">
            <h2 className="text-[25px] font-semibold">Socials</h2>
            <div className="flex gap-[50px] mt-3">
              <InstragramIcon/>
              <Facebook/>
              <Twitter/>
            </div>
          </div>


        </div>
      
    </div>
    <div>
      <h2 className="text-[#cacaca] md:text-[20px] text-[15px] flex justify-center py-[21px]">Copyright C@2023 All rights reserved</h2>
    </div>
    </div>
  )
}

export default Footer
