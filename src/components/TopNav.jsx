import { useRef } from "react";
import { useHistory } from 'react-router-dom';
import HamBtn from "./HamBtn";
import LoginBtn from "./LoginBtn";
import { HashLink as Link } from 'react-router-hash-link';

const items = [
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Projects", path: "/projects" },
  { title: "Good To Know", path: "/good-to-know" },
  { title: "Clients", path: "/clients" },
  { title: "Contact", path: "/#contact" },
]

function getDesktopMenuItem(item, key) {
  const { title, path } = item
  return (
    <li key={key}><Link smooth to={path} className="py-2 md:mx-2 lg:mx-4 border-b-2 border-teal-900 hover:border-gray-100" >{title}</Link></li>
  )
}

function getMobileMenuItem(item, key) {
  const { title, path } = item
  return (
    <li key={key}><Link smooth to={path} className="inline-block px-1 py-1 border-b-2 border-teal-900 hover:border-gray-100" >{title}</Link></li>
  )
}

const TopNav = () => {
  const mobileMenuRef = useRef(null)
  const menuBtnRef = useRef(null)
  const history = useHistory()

  function handleHomeClick() {
    const path = history.location.pathname
    if (path === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      return window.history.replaceState({ to: "home" }, "", "/",)
    } else {
      return history.push("/")
    }
  }

  function toggleMenu() {
    if (menuBtnRef.current.classList.contains("menu-active")) {
      //show overflow
      document.documentElement.classList.remove("overflow-hidden")
      //hide menu
      menuBtnRef.current.classList.remove("menu-active")
      mobileMenuRef.current.classList.add("opacity-0")
      setTimeout(() => {
        mobileMenuRef.current.classList.remove("flex")
        mobileMenuRef.current.classList.add("hidden")
      }, 700)
    } else {
      //hide overflow
      document.documentElement.classList.add("overflow-hidden")
      //show menu
      menuBtnRef.current.classList.add("menu-active")
      mobileMenuRef.current.classList.add("flex")
      mobileMenuRef.current.classList.remove("hidden")
      setTimeout(() => {
        mobileMenuRef.current.classList.remove("opacity-0")
      }, 100)
    }
  }

  return (
    <nav className="flex bg-teal-900 text-white h-20 justify-center items-center fixed inset-x-0 top-0 z-20">
      <button onClick={handleHomeClick} className="uppercase text-lg sm:text-xl tracking-wider font-mont ml-6 md:ml-0">james <span className="text-teal-400">consulting</span></button>
      <ul className="hidden md:flex lg:ml-20 md:ml-4 md:text-sm lg:text-base">
        {
          items.map((item, key) => getDesktopMenuItem(item, key))
        }
      </ul>
      <div className="hidden md:flex">
        <LoginBtn />
      </div>
      <HamBtn menuToggleCallback={toggleMenu} ref={menuBtnRef} />
      <div ref={mobileMenuRef} className=" hidden opacity-0 flex-col bg-teal-900 text-white items-center fixed inset-0 z-40 w-full h-screen transform transition-opacity duration-700">
        <LoginBtn />
        <ul onClick={toggleMenu} className="flex flex-col mt-6 text-center space-y-4">
          {
            items.map((item, key) => getMobileMenuItem(item, key))
          }
        </ul >
      </div >
    </nav >
  )
}

export default TopNav