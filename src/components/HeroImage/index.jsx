import Header from "../Header"
import ContentHero from "./Content/Content"

function  HeroImage() {
  return(
    <section className=' w-full h-[100vh] bg-no-repeat bg-cover' style={{backgroundImage:`url('./heroImage.png')`}}>
        <Header color={"dark"}></Header>
        <ContentHero/>
       
    </section>
  )
}

export default HeroImage