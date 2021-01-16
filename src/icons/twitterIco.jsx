import { AiOutlineTwitter } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

const TwitterIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <AiOutlineTwitter />
    </IconContext.Provider>
  )
}

export default TwitterIco