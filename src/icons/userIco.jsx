import { HiUserCircle } from 'react-icons/hi'
import { IconContext } from 'react-icons/lib'

const UserIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <HiUserCircle />
    </IconContext.Provider>
  )
}

export default UserIco