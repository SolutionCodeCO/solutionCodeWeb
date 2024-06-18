import LeftCards from "./LeftCards"
import RightCards from "./RightCards"
function ContentAboutMe() {
  return(
    <main className="px-8 max-w-[1800px]">
       <section className="grid grid-cols-6 pt-32 pb-10">
          <LeftCards/>
          <RightCards/>
       </section>
    </main>
   
  )
}


export default ContentAboutMe