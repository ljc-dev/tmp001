import { HiChevronUp } from 'react-icons/hi'
import { IconContext } from 'react-icons/lib'

const UpIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <HiChevronUp />
    </IconContext.Provider>
  )
}

export default UpIco