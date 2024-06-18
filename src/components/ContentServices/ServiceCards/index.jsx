import ProfessionalAdvice from "./ProfessionalAdvice"
import ProgrammingCourses from "./ProgrammingCourses"
function ServicesCards() {
  return (
    <section className="w-3/5">
        <h1 className="text-5xl text-primary " > Explora los distintos servicios que SolutionCode te ofrece </h1>
        <div className="flex flex-wrap justify-evenly gap-8 mt-8">
            <ProgrammingCourses />
            <ProfessionalAdvice />
        </div>
        <p className="text-xl text-primary p-2 mt-4">
          ¿tienes una idea? aqui se te hara realidad.En solutionCode encontras asesoria de perfil, LandingPage, Aplicaciones web,          Paginas web, Gestión de personal, inventario, etc.
        </p>

        <p className="text-xl text-primary p-2">
            ¿Deseas aprender a desarrollar tu propia aplicacion? en SolutionCode encontraras cursos digitales con alternativas de aprendizaje.
        </p>
    </section>
  )
}
export default ServicesCards