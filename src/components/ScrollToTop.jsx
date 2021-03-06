import { useScrollToTop } from "../hooks/scrollToTop"
import UpIco from '../icons/upIco'

const ScrollToTop = () => {
  const { scrollToTopRef, handleScrollToTop, } = useScrollToTop()

  return (
    <div className="md:hidden">
      <button ref={scrollToTopRef} onClick={handleScrollToTop} className="transform opacity-0 transition-opacity duration-500 hidden bg-teal-600 text-teal-50 fixed bottom-16 right-4 rounded-full z-50 focus:outline-none">
        <div className="w-12 h-12 flex items-center justify-center">
          <UpIco classes={"w-8 h-8"} />
        </div>
      </button>
    </div>
  )
}

export default ScrollToTop