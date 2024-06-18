import { Link } from "react-router-dom"
import { IoFlashOutline } from "react-icons/io5";
import { useState } from "react";
function  Button({color,self}) {
  const [ colorButton , setColor] = useState("#0F1035");
  return(
    <Link   to="/contactar" style={{alignSelf:`${self}`}} className="group" 
      onMouseOver={() => setColor("#f55")} 
      onMouseLeave={()=> setColor("#0F1035")}
    >

      <button  className={`flex gap-5 items-center justify-center text-whiteP px-3 py-1 rounded-full  text-3xl `} style={{backgroundColor:color}}> 
        <span className="flex items-center justify-center bg-whiteP rounded-full text-4xl "> 
          <IoFlashOutline color={`${colorButton}`} /> 
        </span> Empezar ahora
      </button>
    </Link>
  )
}

export default Button