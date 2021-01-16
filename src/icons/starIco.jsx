import { FiStar } from 'react-icons/fi'
import { IconContext } from 'react-icons/lib'

const StarIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <FiStar />
    </IconContext.Provider>
  )
}

export default StarIco