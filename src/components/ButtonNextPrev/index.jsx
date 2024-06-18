import clsx from "clsx";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

function ButtonNextPrev({way}) {
  let icon = way === "prev" ?  <FaArrowCircleLeft />  :  <FaArrowCircleRight />

  return (
    <div className={ clsx(
      "w-10 h-10 rounded-full flex items-center justify-center shadow-btnNext hover:scale-110",
        {
          "bg-redProyect text-whiteP" : way === "next",
          "bg-whiteP text-redProyect " : way === "prev",
        })
    }>

      <button className="text-5xl font-bold"> {icon} </button>
    </div>
  )
}

export default ButtonNextPrev