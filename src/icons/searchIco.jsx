import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

const SearchIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <AiOutlineSearch />
    </IconContext.Provider>
  )
}

export default SearchIco