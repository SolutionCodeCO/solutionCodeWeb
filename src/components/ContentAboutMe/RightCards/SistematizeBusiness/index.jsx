import { IoMdTrendingUp } from "react-icons/io";
import figure from './figureBusiness.jpg'
function  SistematizeBusiness() {
  return (
    <div className="col-start-1 col-end-2 w-72 h-[380px] bg-cover rounded-xl flex flex-col justify-evenly items-center text-primary text-center font-semibold"  style={{ backgroundImage: `url(${figure})`}}>
      <h2 className="font-medium text-4xl"> ¡Sistematiza tu negocio! </h2>
      <p >¡Lo que haces en <span className="font-bold"> 2 </span> horas, lo puedes hacer en <span> 20 </span>  minutos!</p>
      <IoMdTrendingUp className="text-6xl" />
      <p>Soporte <span className="font-bold"> 24/7 </span> </p>
    </div>
  )
}

export default SistematizeBusiness