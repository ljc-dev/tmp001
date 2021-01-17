import { useContext, useRef, useState } from "react";
import { useAutoScrollToTop } from "../hooks/scrollToTop";
import { SignContext } from "../hooks/signContext";
import ArrowDownIco from "../icons/arrowDownIco";
import ArrowUpIco from "../icons/arrowUpIco";
import CaretDownIco from "../icons/caretDownIco";
import DotsVertical from "../icons/dotsVertical";
import PlusIco from "../icons/plusIco";
import SearchIco from "../icons/searchIco";
import { sortGoods } from "../utils/sortGoodsFns";
import Good from "./Good";

const initialSortingMenuItems = [
  { title: "name", upDownNot: "not" },
  { title: "last updated", upDownNot: "down" },
  { title: "views", upDownNot: "not" },
  { title: "favorites", upDownNot: "not" },
  { title: "file type", upDownNot: "not" },
  { title: "file size", upDownNot: "not" },
]

const goods = [
  {
    fileType: "folder", fileTitle: "Welcome to File Share", fileSize: "0", lastUpdated: "01/13/2021", views: 5, favorite: 0,
    children: [
      {
        fileType: "pdf", fileTitle: "Welcome to File Share.pdf", fileSize: "4.32 MB", lastUpdated: "01/10/2021", views: 0, favorite: 0,
      },
      {
        fileType: "pdf", fileTitle: "File Share FAQ.pdf", fileSize: "4.15 MB", lastUpdated: "01/10/2021", views: 0, favorite: 0,
      },
    ],
  },
  {
    fileType: "folder", fileTitle: "Business Glossary", fileSize: "0", lastUpdated: "01/13/2021", views: 26, favorite: 0,
    children: [
      {
        fileType: "pdf", fileTitle: "I am a document.pdf", fileSize: "20.29 KB", lastUpdated: "01/10/2021", views: 0, favorite: 0,
      },
    ],
  },
  {
    fileType: "folder", fileTitle: "Marketing Tools", fileSize: "0", lastUpdated: "01/13/2021", views: 8, favorite: 0,
    children: [
      {
        fileType: "pdf", fileTitle: "I am a document.pdf", fileSize: "20.29 KB", lastUpdated: "01/10/2021", views: 0, favorite: 0,
      },
    ],
  },
  {
    fileType: "folder", fileTitle: "Yearly Gantt Template", fileSize: "0", lastUpdated: "01/13/2021", views: 4, favorite: 0,
    children: [
      {
        fileType: "pdf", fileTitle: "I am a document.pdf", fileSize: "20.29 KB", lastUpdated: "01/10/2021", views: 0, favorite: 0,
      },
    ],
  },
]

function getTitleFromSortedMenu(sortingMenuItems) {
  const item = sortingMenuItems.find((item) => item.upDownNot !== "not")
  return item.title
}

const GoodToKnow = () => {
  const { showSignPopup, setShowSignPopup } = useContext(SignContext)
  const sortingMenuRef = useRef(null)
  const sortingMenuBtnTitleRef = useRef(null)
  const [sortingMenuItems, setSortingMenuItems] = useState(initialSortingMenuItems)

  useAutoScrollToTop()

  function handleSortingMenuToggleClick() {
    sortingMenuRef.current.classList.toggle("hidden")
  }

  function handleSortingMenuItemClick(e) {
    let currentNode = e.target
    let newSortingTitle = ""

    while (true) {
      if (currentNode.parentNode.nodeName.toLowerCase() === "div") {
        newSortingTitle = currentNode.innerText.toLowerCase()
        break
      }
      currentNode = currentNode.parentNode
    }
    console.log("new title", newSortingTitle)
    sortingMenuRef.current.classList.add("hidden")
    updateSortingMenuTitle(newSortingTitle)
    updateSortingMenuItems(newSortingTitle)
  }

  function updateSortingMenuItems(newSortingTitle) {
    const upItem = sortingMenuItems.find((item => item.upDownNot === "up"))
    setSortingMenuItems(sortingMenuItems.map((menuItem) => {
      if (menuItem.title === newSortingTitle) {
        if (menuItem.upDownNot === "up") {
          menuItem.upDownNot = "down"
        } else if (menuItem.upDownNot === "down") {
          menuItem.upDownNot = "up"
        } else {
          // it's "not"
          menuItem.upDownNot = upItem ? "up" : "down"
        }
      } else {
        menuItem.upDownNot = "not"
      }
      return menuItem
    }))
  }

  function updateSortingMenuTitle(newSortingTitle) {
    sortingMenuBtnTitleRef.current.innerText = newSortingTitle
  }

  function getSortingItemBtn(item) {
    return (
      <button className={`flex justify-between items-center capitalize py-2 px-4 hover:shadow-md ${item.upDownNot === "not" ? "text-teal-900" : "text-teal-600"}`} key={item.title}>
        <span>{item.title}</span>
        {item.upDownNot === "up" && <ArrowUpIco />}
        {item.upDownNot === "down" && <ArrowDownIco />}
      </button>
    )
  }

  function addFileClick() {
    setShowSignPopup(true)
  }

  function handleOverlayClick() {
    sortingMenuRef.current.classList.add("hidden")
  }

  const sortedGoods = sortGoods(sortingMenuItems, goods)
  const sortedTitle = getTitleFromSortedMenu(sortingMenuItems)

  return (
    <div data-aos="fade-in" className="">
      <div data-aos="fade-up" className="mt-20 flex flex-col items-center pt-8 w-full">
        <h1 className=" uppercase text-4xl md:text-6xl font-rale text-teal-900 text-center leading-tight">good to <br className="sm:hidden" /> know</h1>
        <div className="w-20 h-1.5 bg-teal-900 mt-3 mx-auto"></div>
        <div className="w-full flex justify-between mt-4 px-4">
          <p className="capitalize text-teal-900 font-open tracking-tight">files</p>
          <div className="flex items-center">
            <button className="flex h-6 w-6 items-center justify-center">
              <SearchIco classes={"h-4 w-4"} />
            </button>
            <button className="">
              <DotsVertical classes={"h-6 w-6"} />
            </button>
          </div>
        </div>
        <div className="w-full relative flex justify-between mt-4  px-4">
          <button onClick={handleSortingMenuToggleClick} className="flex items-center text-teal-900">
            <span ref={sortingMenuBtnTitleRef} className="capitalize text-teal-900 font-open tracking-tight">{sortedTitle}</span>
            <CaretDownIco classes={"mt-1 ml-0.5 w-3 h-3"} />
          </button>
          <button onClick={addFileClick} className="rounded-full h-10 w-10 flex items-center justify-center bg-teal-600 text-teal-50">
            <PlusIco classes={" h-6 w-6"} />
          </button>
        </div>
        <div ref={sortingMenuRef} className="relative hidden self-start">
          <div onClick={handleOverlayClick} className="fixed inset-0 w-full h-full">

          </div>
          <div onClick={handleSortingMenuItemClick} className="absolute w-56 bg-white top-0 left-1 rounded-sm shadow-md flex flex-col pt-2">
            {
              sortingMenuItems.map((item) => getSortingItemBtn(item))
            }
          </div>
        </div>
        <div className="w-full flex flex-col mt-2 mb-14 font-open text-teal-900 border-t border-gray-300">
          {
            sortedGoods && sortedGoods.map((good, index) => <Good good={good} key={index} />)
          }
        </div>
      </div>
    </div>
  )
}

export default GoodToKnow