import { forwardRef } from 'react'
import './menuIco.css'

const MenuIco = forwardRef((props, menuIcoRef) => {
  return (
    <div ref={menuIcoRef} className="menu-icon">
      <div></div>
    </div>
  )
})

export default MenuIco