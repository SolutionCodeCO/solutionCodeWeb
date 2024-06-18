import StudiesCard from "./StudiesCard"
import ServicesCards from "./ServiceCards"
import ButtonNextPrev from "../ButtonNextPrev"
function ContentServices() {
  return (
      <main className="p-8 max-w-[1800px] mt-24" >
        <section className="flex gap-8">
            <StudiesCard />
            <ServicesCards />
        </section>
        <div className="flex gap-4 mt-8 ">
        <ButtonNextPrev way="prev" />   
        <ButtonNextPrev way="next" />   
        </div>
           
      </main>
  )
}

export default ContentServices