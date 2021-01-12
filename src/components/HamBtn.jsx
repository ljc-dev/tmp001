import { forwardRef } from "react"
import MenuIco from "../icons/menuIco"

const HamBtn = forwardRef(({ menuToggleCallback, }, ref) => {
  return (
    <button onClick={menuToggleCallback} className="md:hidden ml-auto mr-4 focus:outline-none relative z-50">
      <span className="sr-only">menu</span>
      <MenuIco ref={ref} />
    </button >
  )
})

export default HamBtn