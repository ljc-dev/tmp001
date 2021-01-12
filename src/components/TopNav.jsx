import { useRef } from "react"
import UserIco from "../icons/userIco"
import HamBtn from "./HamBtn"

function getMobileMenuItem(title) {
  return
}

const TopNav = () => {
  const mobileMenuRef = useRef(null)
  const menuBtnRef = useRef(null)

  function toggleMenu() {
    if (menuBtnRef.current.classList.contains("menu-active")) {
      //show overflow
      document.body.classList.remove("overflow-hidden")
      //hide menu
      menuBtnRef.current.classList.remove("menu-active")
      mobileMenuRef.current.classList.add("opacity-0")
      setTimeout(() => {
        mobileMenuRef.current.classList.remove("flex")
        mobileMenuRef.current.classList.add("hidden")
      }, 700)
    } else {
      //hide overflow
      document.body.classList.add("overflow-hidden")
      //show menu
      menuBtnRef.current.classList.add("menu-active")
      mobileMenuRef.current.classList.add("flex")
      mobileMenuRef.current.classList.remove("hidden")
      setTimeout(() => {
        mobileMenuRef.current.classList.remove("opacity-0")
      }, 100)
    }
  }

  function handleLoginBtnClick() {
    const stateObj = { page: "about" }
    window.history.replaceState(stateObj, "", "./about")
  }

  return (
    <nav className="flex bg-teal-900 text-white h-20 justify-center items-center fixed inset-x-0 top-0 z-20">
      <a href="#home" className="uppercase text-lg sm:text-xl tracking-wider font-mont ml-6 md:ml-0">james <span className="text-teal-400">consulting</span></a>
      <ul className="md:flex lg:ml-20 md:ml-4 text-sm hidden">
        <li><a className="p-4 md:px-2 lg:px-4" href="#about">About</a></li>
        <li><a className="p-4 md:px-2 lg:px-4" href="#services">Services</a></li>
        <li><a className="p-4 md:px-2 lg:px-4" href="#projects">Projects</a></li>
        <li><a className="p-4 md:px-2 lg:px-4" href="#goodtoknow">Good To Know</a></li>
        <li><a className="p-4 md:px-2 lg:px-4" href="#clients">Clients</a></li>
        <li><a className="p-4 md:px-2 lg:px-4" href="#contact">Contact</a></li>
      </ul>
      <button className="hidden md:flex lg:ml-12 md:ml-2 text-teal-400 items-center">
        <UserIco />
        <span className="text-sm ml-2 md:ml-1">Log In</span>
      </button >
      <HamBtn menuToggleCallback={toggleMenu} ref={menuBtnRef} />
      <div ref={mobileMenuRef} className=" hidden opacity-0 flex-col bg-teal-900 text-white items-center fixed inset-0 z-40 w-full h-screen transform transition-opacity duration-1000">
        <button onClick={handleLoginBtnClick} className="flex mt-4 text-teal-400 items-center">
          <UserIco />
          <span className="text-sm ml-2">Log In</span>
        </button >
        <ul className="flex flex-col mt-6 text-center space-y-4">
          <li><a className="inline-block px-2 py-1" onClick={toggleMenu} href="#about">About</a></li>
          <li><a className="inline-block px-2 py-1" onClick={toggleMenu} href="#services">Services</a></li>
          <li><a className="inline-block px-2 py-1" onClick={toggleMenu} href="#projects">Projects</a></li>
          <li><a className="inline-block px-2 py-1" onClick={toggleMenu} href="#goodtoknow">Good To Know</a></li>
          <li><a className="inline-block px-2 py-1" onClick={toggleMenu} href="#clients">Clients</a></li>
          <li><a className="inline-block px-2 py-1" onClick={toggleMenu} href="#contact">Contact</a></li>
        </ul >
      </div >
    </nav >

  )
}

export default TopNav