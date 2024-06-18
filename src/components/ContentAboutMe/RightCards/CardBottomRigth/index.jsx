import Button from "../../../Button"
import mokup from './mokup.jpg'
function  CardBottomRigth() {
  return(
    <div className="col-start-1 col-end-4 flex justify-evenly items-center bg-whiteP-600 shadow-buttons rounded-xl">
        <div className="flex flex-col gap-4 w-3/5 items-start">
            <p>Muy dinámico para cualquier tipo de persona</p>
            <h2 className="text-5xl">¡Plataformas realizadas desde cero!</h2>
            <Button color={"#0F1035"} self={"start"}/>
        </div>
        <img src={mokup} alt="Mokup de un telefono" className="w-60 rounded-xl" />
    </div>
  )
}

export default CardBottomRigth