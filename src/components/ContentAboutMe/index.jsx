import LeftCards from "./LeftCards"
import RightCards from "./RightCards"
function ContentAboutMe() {
  return(
    <section className="grid grid-cols-6 pt-28 pb-10">
      <LeftCards/>
      <RightCards/>
    </section>
  )
}


export default ContentAboutMe