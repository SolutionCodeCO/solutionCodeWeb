import ButtonCard from "./Button"
import logo from "/logoOscuro.svg" 
function  CardTitle() {
    return(
      <div className="col-start-2 col-end-4">
        <h1 className="text-8xl font-bold text-center text-primary "> ¿ Por qué Nosotros ?</h1>
        <div className="flex w-full justify-evenly items-center">
            <ButtonCard/>
            <img src={logo} alt="logo de la empresa" 
              className="w-24 h-24"
            />
        </div>
      </div>
    )
}

export default CardTitle