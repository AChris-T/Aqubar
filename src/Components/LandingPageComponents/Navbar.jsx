import logo from "../../assets/Image/AqubarLogo.png"
import { IoMenu } from "react-icons/io5";
import { useDisclosure } from '@mantine/hooks';
import { Drawer  } from '@mantine/core';


const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="fixed w-[100%] max-w-[1452px] z-30 ">   
    <div className="flex items-center relative  top-0 left-0  bg-white justify-between md:px-[40px]  lg:px-[60px] h-[80px] pr-2   z-20">
      <div>
        <img src={logo} alt="logo" width={"147px"} height={"px2rem(52)"} className=""/>
      </div>
      <div className=" flex justify-center items-center font-inter text-[20px] font-normal text-[#353535] md:gap-[31px] gap-2.5 ">
        <IoMenu onClick={open}  className=" text-[50px] md:hidden cursor-pointer"/>
        <a href="/" className="hidden  md:block">Service</a>
        <a href="/" className="hidden  md:block" >Tech on aqubar</a>
        <a href="/" className=" hidden  md:flex px-[18px] md:px-[28px]   justify-center items-center text-[15px] font-semibold h-[42px] rounded-[5px] border-2 border-[#198cf6] hover:bg-[#198cf6] hover:text-white">Login</a>
        <a href="/" className="hidden  md:flex w-[90px] md:w-[115px] md:px-[2px]  justify-center items-center text-[15px] font-semibold h-[42px] rounded-[5px] text-[#fff] border-2 bg-[#198cf6] border-[#198cf6] hover:bg-[#4d9de9] hover:border-[#63aaed]">Sign Up</a>


      <Drawer position="top" height="100px" size={'304px'}  radius="md" opened={opened} onClose={close} title="">
      <div className="flex flex-col gap-5" >
        <a href="/" className="">Service</a>
        <a href="/" className="" >Tech on aqubar</a>
        <a href="/" className=" w-[90px] flex md:w-[115px] md:px-[2px]     justify-center items-center text-[15px] font-semibold h-[42px] rounded-[5px] border-2 border-[#198cf6] hover:bg-[#198cf6] hover:text-white">Login</a>
        <a href="/" className="w-[90px] flex md:w-[115px] md:px-[2px]  justify-center items-center text-[15px] font-semibold h-[42px] rounded-[5px] text-[#fff] border-2 bg-[#198cf6] border-[#198cf6] hover:bg-[#4d9de9] hover:border-[#63aaed]">Sign Up</a>
      </div>
        </Drawer>
      </div>
    </div>
    </div>
 
  )
}

export default Navbar
