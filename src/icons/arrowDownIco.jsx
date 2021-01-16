import { HiArrowNarrowDown } from 'react-icons/hi'
import { IconContext } from 'react-icons/lib'

const ArrowDownIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <HiArrowNarrowDown />
    </IconContext.Provider>
  )
}

export default ArrowDownIco