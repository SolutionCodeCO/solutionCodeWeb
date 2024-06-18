import IconTopCard from './Icons/Icon';
import { IoLogoAppleAr } from "react-icons/io5";
import { IoFlash } from "react-icons/io5";
import { IoMdPulse } from "react-icons/io";

import bgImage from './backgroundImage.jpg';

function TopCard() {
  return (
    <div
    className='w-96 h-56 rounded-3xl bg-cover bg-no-repeat bg-left-top flex flex-col justify-between py-4 items-center font-semibold text-xl'

     style={{background:`url(${bgImage})`}}>
        <h2 >Todo tipo de plataformas web </h2>
        <div className='flex justify-evenly items-center gap-2'> 
          <IconTopCard size={"sm"}> <IoLogoAppleAr /> </IconTopCard>
          <IconTopCard size={"md"}> <IoFlash /> </IconTopCard>
          <IconTopCard size={"sm"}> <IoMdPulse />  </IconTopCard>
         </div>
        <h2> Fácil, rapido y efectivo</h2>
    </div>
  )
}

export default TopCard