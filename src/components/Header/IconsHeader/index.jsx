import Icon from "./Icon/icon"
import { SlGlobe } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";

function IconsHeader({color}) {
  return (
    <div className="flex gap-4 ">
      <Icon ruta={"./internet"} color={color}> <SlGlobe /> </Icon>
      <Icon ruta={"./whatsapp"} color={color}> <FaPhoneAlt /> </Icon>
      <Icon ruta={"./carrito"} color={color}> <IoCart /> </Icon>
      <Icon ruta={"./perfil"} color={color}> <FaCircleUser /> </Icon> 
    </div>
  )
}

export default IconsHeader