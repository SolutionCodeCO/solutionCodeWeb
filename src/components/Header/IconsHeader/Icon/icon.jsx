import {clsx} from 'clsx'
import LinkHeader from "../../LinksHeader"

function  Icon({children,ruta,color}) {
  return (
    <LinkHeader to={ruta} > 
      <div className={
        clsx(
          "w-10 h-10 rounded-full flex items-center justify-center  text-2xl transition-colors",
          {
            "bg-whiteP-50 shadow-md hover:text-primary hover:bg-whiteP" : color === "dark",
            "bg-whiteP shadow-buttons hover:text-whiteP hover:bg-primary" : color === "light",
          }
        )
      }>
        {children}
      </div>
    </LinkHeader>
   
  )
}

export default Icon