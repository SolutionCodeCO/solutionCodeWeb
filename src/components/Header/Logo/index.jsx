import LinkHeader from '../LinksHeader'
import iconLogo from '/logo.png'
import iconLogoDark from "/logoOscuro.svg"
function Logo({color}){
  let Icon = color === "dark" ? iconLogo : iconLogoDark
  return(
    <LinkHeader to="/" > 
      <div className=" flex items-center gap-6">
        <img src={Icon} alt="logo" className='w-20' />
        <h1 className='font-medium'> <span className='font-semi-bold text-2xl' > SolutionCode </span> <br /> Desarrollo de software especializado.</h1>
      </div>
    </LinkHeader>
   
  )
}

export default Logo