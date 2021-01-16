import { FiMoreVertical } from 'react-icons/fi'
import { IconContext } from 'react-icons/lib'

const DotsVertical = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <FiMoreVertical />
    </IconContext.Provider>
  )
}

export default DotsVertical