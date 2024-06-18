import {clsx} from 'clsx'
import Logo from "./Logo"
import NavHeader from "./NavHeader"
import IconsHeader from "./IconsHeader"
function  Header({color}) {
  return (
    <header className={
      clsx(
        "flex items-center justify-between px-6 fixed top-4 right-0 left-0",
        {
          "text-whiteP bg-transparent": color === "dark",
          "text-primary bg-whiteP": color === "light",
        }
      )}
    >

      <Logo color={color}/>
      <NavHeader color={color}/>
      <IconsHeader color={color} />
    </header>
  )
}

export default Header