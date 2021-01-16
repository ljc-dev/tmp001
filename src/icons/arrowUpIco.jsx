import { HiArrowNarrowUp } from 'react-icons/hi'
import { IconContext } from 'react-icons/lib'

const ArrowUpIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <HiArrowNarrowUp />
    </IconContext.Provider>
  )
}

export default ArrowUpIco