import CardBottomRigth from "./CardBottomRigth"
import CardTitle from "./CardTitle"
import SistematizeBusiness from "./SistematizeBusiness"

function  RightCards() {
    return (
      <section className="col-start-3 col-end-7  grid grid-cols-3 grid-rows-1">
          <SistematizeBusiness/>
          <CardTitle />
          <CardBottomRigth />
      </section>
    )
}
export default RightCards