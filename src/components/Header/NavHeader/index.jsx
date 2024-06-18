import { NavLink } from "react-router-dom";
import {clsx} from "clsx";
function NavHeader({color}) {
    return (
      <nav className={
        clsx(
          "flex items-center gap-6 px-4 py-2 rounded-full transition-all",
          {
            "bg-whiteP-50 shadow-md" : color === "dark",
            "bg-whiteP shadow-buttons" : color === "light",
          }
        )

      }>
        <NavLink to="/" className="hover:underline font-medium"> Inicio </NavLink>
        <NavLink to="/nosotros"  className="hover:underline font-medium"> Nosotros </NavLink>
        <NavLink to="/servicios"  className="hover:underline font-medium"> Servicios </NavLink>
        <NavLink to="/cursos"  className="hover:underline font-medium"> Cursos </NavLink>
        <NavLink to="/contactar"  className="hover:underline  font-medium"> Contacto </NavLink>
      </nav>
    )
}
export default NavHeader