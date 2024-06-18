import { IoFlashOutline } from "react-icons/io5";

function  ButtonCard() {
  return(
    <div className="w-72 h-40 bg-gradient-to-r from-[#2E9AB2] to-[#2F2875]  flex justify-evenly items-center text-whiteP  rounded-2xl " >
       <div className="bg-gradient-to-r from-[#2E9AB2] to-[#2F2875] w-[30%] h-4/5 rounded-2xl flex items-center justify-center shadow-md" >
          <IoFlashOutline className="text-8xl "/>
       </div>
       <h2 className="text-3xl font-medium"> Eficiencia <br />  +125% </h2>
    </div>
  )
}

export default ButtonCard