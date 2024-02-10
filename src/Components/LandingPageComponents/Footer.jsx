import logo from "../../assets/Image/whiteAqubar.png"
import Facebook from "../Icons/Facebook"
import InstragramIcon from "../Icons/InstragramIcon"
import SearchIcons from "../Icons/SearchIcons"
import Twitter from "../Icons/Twitter"
import { MdOutlineMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#0E0E0E] ">
    <div className=" border-b-[#198cf6] border-b-2 font-inter  text-[#cacaca] px-4 md:px-10 lg:px-[70px] py-[29px] w-full flex justify-between md:items-center flex-col  md:flex-row">

        <div className="flex-col  md:flex gap-[30px]   ">
            <h1 className="font-semibold text-[20px] flex mb-4 md:mb-0">Usefull links</h1>
            <div className="flex flex-row flex-wrap md:flex-col gap-[20px] flex-1">   
            <a href="" className="text-[15px] font-normal hover:text-[#b6b5b5] ">Become a tutor</a>
            <a href="" className="text-[15px] font-normal hover:text-[#b6b5b5]">Buy courses</a>
            <a href="" className="text-[15px] font-normal hover:text-[#b6b5b5] ">FAQ</a>
            <a href="" className="text-[15px] font-normal hover:text-[#b6b5b5] ">Aquber affiliate</a>
            </div>
        </div>
        <div className="flex-col hidden md:flex md:justify-center md:items-center " >
            <img src={logo} alt="logo" width={"138px"}/>
            <h2 className="px-2">Contact us</h2>
            <a href="www.aqubertechnologies@gmail.com" target="_blank" className="text-[15px] font-normal px-2">aqubertechnologies@gmail.com</a>
        </div>
        
        <div  className="flex flex-col gap-4 px-2 mt-8">
          <h2 className="text-[25px] font-semibold">Newsletter</h2>
          <p className="md:w-[200px]">Subscribe for newsletters from Aquber 
            technologies.
            </p>
            <div className="flex items-center">
            <input className="w-full px-4 place rounded-[40px] h-[48px] border-[1px] border-[#198cf6] bg-transparent" />
            <div className="cursor-pointer ml-[-40px] bg-slate-700 rounded-full">
            <SearchIcons/>
            </div>
            </div>
          <div className="mt-2">
            <h2 className="text-[25px] font-semibold">Socials</h2>
            <div className="flex gap-[50px] mt-3 items-center cursor-pointer">
            <a href=""><InstragramIcon/></a>
            <a href=""> <Facebook/></a>
            <a href="">  <Twitter/></a>
            <a href=""> <MdOutlineMarkEmailRead className="text-[35px]"/></a>
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
