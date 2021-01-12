import { useScrollToTop } from "../hooks/scrollToTop"
import UpIco from '../icons/upIco'

const ScrollToTop = () => {
  const { scrollToTopRef, handleScrollToTop, } = useScrollToTop()

  return (
    <div className="md:hidden">
      <button ref={scrollToTopRef} onClick={handleScrollToTop} className="transform opacity-0 transition-opacity duration-500 hidden bg-teal-600 p-1 text-teal-50 fixed bottom-16 right-4 w-10 h-10 rounded-full z-50 outline-none">
        <UpIco />
      </button>
    </div>
  )
}

export default ScrollToTop