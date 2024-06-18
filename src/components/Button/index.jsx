import { Link } from "react-router-dom"
import { IoFlashOutline } from "react-icons/io5";
function  Button({color,self}) {
  return(
    <Link to="./contactar" style={{alignSelf:`${self}`}}>
      <button style={{backgroundColor:color}} className="flex gap-5 items-center justify-center text-whiteP px-3 py-1 rounded-full  text-3xl"> 
        <span className="flex items-center justify-center bg-whiteP rounded-full text-4xl"> 
          <IoFlashOutline color="#0F1035"/> 
        </span> Empezar ahora
      </button>
    </Link>
  )
}

export default Button