import partner from "../../assets/Image/partner.png"
const Partners = () => {
  return (
    <div className="flex justify-center items-center mt-[179px] px-4 mb-[80px]  md:gap-[116px]">
    <h3 className="text-[#000] font-Montserrat text-[30px] md:text-[50px] font-medium">Official partner </h3>
      <img src={partner} alt="partnersImage"/>
    </div>
  )
}

export default Partners
