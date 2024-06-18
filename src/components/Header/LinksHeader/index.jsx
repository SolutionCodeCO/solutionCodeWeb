import { Link } from "react-router-dom";

function  LinkHeader ({children}) {
  return(
    <Link>
       {children}
    </Link> 
  )
}

export default LinkHeader

