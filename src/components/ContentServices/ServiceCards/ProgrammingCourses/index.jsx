import { TbBrain } from "react-icons/tb";

function ProgrammingCourses() {
  return (
    <div className="flex flex-col justify-between items-center p-5 rounded-2xl bg-[url('/imageBg2.jpg')] bg-no-repeat bg-cover w-80 h-72 text-whiteP">
        <h2 className="text-3xl font-bold text-center">Encuentra cursos de Programación </h2>
        <p >Alternativas de aprendizaje con varios lenguajes top 2024.</p>
        <button className=" p-2 rounded-xl bg-blackP-200 flex gap-2 text-xl items-center hover:scale-110"> 
          <span> <TbBrain className="text-2xl"/> </span> Aprender 
        </button>
    </div>
  )
}

export default ProgrammingCourses