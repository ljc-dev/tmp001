import { FiX } from 'react-icons/fi'
import { IconContext } from 'react-icons/lib'

const CrossIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <FiX />
    </IconContext.Provider>
  )
}

export default CrossIco