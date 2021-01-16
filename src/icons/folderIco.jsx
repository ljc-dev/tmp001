import { BsFolder } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

const FolderIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <BsFolder />
    </IconContext.Provider>
  )
}

export default FolderIco