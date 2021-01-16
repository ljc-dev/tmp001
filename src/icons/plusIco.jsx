import { AiOutlinePlus } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

const PlusIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <AiOutlinePlus />
    </IconContext.Provider>
  )
}

export default PlusIco