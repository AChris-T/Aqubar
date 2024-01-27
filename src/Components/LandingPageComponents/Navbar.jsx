import logo from "../../assets/Image/AqubarLogo.png"
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex items-center  bg-white justify-between md:px-[40px]  lg:px-[60px] h-[80px] pr-2  top-0 z-20">
      <div>
        <img src={logo} alt="logo" width={"147px"} height={"px2rem(52)"} className=""/>
      </div>
      <div className=" flex justify-center items-center font-inter text-[20px] font-normal text-[#353535] md:gap-[31px] gap-2.5 ">
      <IoMenu className="md:hidden text-[50px]"/>
        <a href="/" className="hidden  md:block">Service</a>
        <a href="/" className="hidden  md:block" >Tech on aqubar</a>
        <a href="/" className=" hidden  md:flex px-[18px] md:px-[28px]   justify-center items-center text-[15px] font-semibold h-[42px] rounded-[5px] border-2 border-[#198cf6] hover:bg-[#198cf6] hover:text-white">Login</a>
        <a href="/" className="hidden  md:flex w-[90px] md:w-[115px] md:px-[2px]  justify-center items-center text-[15px] font-semibold h-[42px] rounded-[5px] text-[#fff] border-2 bg-[#198cf6] border-[#198cf6] hover:bg-[#4d9de9] hover:border-[#63aaed]">Sign Up</a>
      </div>
    </div>
  )
}

export default Navbar
