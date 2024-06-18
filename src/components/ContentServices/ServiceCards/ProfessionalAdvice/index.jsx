import { IoBulbOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

function ProfessionalAdvice() {
  return (
    <div className=" relative w-80 h-72 bg-[url('/imageBg1.jpg')] rounded-2xl bg-cover bg-no-repeat p-5 flex flex-col justify-between items-center ">
      <div className=" absolute top-0 left-0 right-0 bottom-0 rounded-2xl bg-blackP-200 " ></div>
      <h2 className="text-whiteP  text-center w-full font-semibold text-4xl z-10">Asesoria Profesional</h2>
      <IoBulbOutline  className="text-8xl text-whiteP z-10"/>
      <button className="flex gap-2 p-2 rounded-lg bg-blackP-300 text-whiteP text-xl items-center z-10 hover:scale-110">
         <span> <FaPhone /> </span> Asesoria 
      </button>
    </div>
  )
}

export default  ProfessionalAdvice