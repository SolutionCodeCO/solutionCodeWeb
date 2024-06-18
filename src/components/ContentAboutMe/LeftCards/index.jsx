import TopCard from "./TopCard"
import BottomCard from "./BottomCard"

function LeftCards () {
  return(
    <section className="col-start-1 col-end-3 items-center flex justify-center flex-col gap-12 mb-2">
        <TopCard />
        <BottomCard />
    </section>
  )
}

export default LeftCards