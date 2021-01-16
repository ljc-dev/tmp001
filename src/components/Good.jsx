import { useContext, useRef } from "react"
import { SignContext } from "../hooks/signContext"
import DotsVertical from "../icons/dotsVertical"
import FolderIco from "../icons/folderIco"
import StarIco from "../icons/starIco"

const Good = ({ good }) => {
  const { fileTitle, views, lastUpdated, children, fileType } = good
  const { showSignPopup, setShowSignPopup } = useContext(SignContext)
  const goodMenuRef = useRef(null)
  const goodMenuWrapperRef = useRef(null)
  const goodRef = useRef(null)

  function handleMenuToggle() {
    goodMenuWrapperRef.current.classList.toggle("hidden")
    goodRef.current.classList.toggle("bg-teal-50")
  }


  function handleMenuOverlayClick() {
    goodMenuWrapperRef.current.classList.add("hidden")
    goodRef.current.classList.remove("bg-teal-50")
  }

  function handleDownload() {
    goodMenuWrapperRef.current.classList.add("hidden")
    goodRef.current.classList.remove("bg-teal-50")
    setShowSignPopup(true)
  }

  function handleFav() {
    setShowSignPopup(true)
  }
  function handleReport() {
    goodMenuWrapperRef.current.classList.add("hidden")
    goodRef.current.classList.remove("bg-teal-50")
    setShowSignPopup(true)
  }

  return (
    <div ref={goodRef} className="overflow-visible flex justify-between py-6 border-b border-gray-300 px-4">
      <div className="flex flex-col">
        <button className="goodTitleBtn">{fileTitle}</button>
        <p className="text-sm">{views} views, {lastUpdated}</p>
        <p className="mt-1 flex items-center space-x-1.5"><FolderIco /> <span>{children ? `${children.length} item${children.length > 1 ? "s" : ""}` : `${fileType}`}</span></p>
      </div>
      <div className="flex flex-col justify-between items-center">
        <button onClick={handleMenuToggle}>
          <DotsVertical classes={"w-6 h-6 text-teal-700"} />
        </button>
        <div ref={goodMenuWrapperRef} className="relative hidden">
          <div onClick={handleMenuOverlayClick} className="fixed inset-0 h-full w-full"></div>
          <div className="absolute -top-4 -right-8 bg-white shadow-md w-56 grid grid-cols-1">
            <button className="text-left py-3 font-open tracking-tighter text-teal-800 px-6 capitalize">select items</button>
            <button onClick={handleDownload} className="text-left py-3 font-open tracking-tighter text-teal-800 px-6 capitalize">download</button>
            <button className="text-left py-3 font-open tracking-tighter text-teal-800 px-6 capitalize">share</button>
            <div className="w-48 mx-auto h-px bg-gray-300"></div>
            <button onClick={handleReport} className="text-left py-3 font-open tracking-tighter text-teal-800 px-6 capitalize">report</button>
          </div>
        </div>

        <p className="flex items-center space-x-1.5"><span>0</span><button onClick={handleFav} className="goodFavBtn"><StarIco /></button></p>
      </div>
    </div>
  )
}

export default Good