import { AiFillCaretDown } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

const CaretDownIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <AiFillCaretDown />
    </IconContext.Provider>
  )
}

export default CaretDownIco