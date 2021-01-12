import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useRef } from "react"
import Rellax from 'rellax'
import FacebookIco from "./icons/facebookIco"
import MenuIco from "./icons/menuIco"
import TwitterIco from "./icons/twitterIco"
import UserIco from "./icons/userIco"
import smoothscroll from 'smoothscroll-polyfill'
import UpIco from './icons/upIco'

function App() {
  smoothscroll.polyfill()
  const mainRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const menuIcoRef = useRef(null)
  const heroRef = useRef(null)
  const scrollToTopRef = useRef(null)

  useEffect(() => {
    new Rellax(heroRef.current, {})
    AOS.init({})
  }, [])

  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("scroll", handleScroll)
  }, [])

  function removeValidOrNotMarker(e) {
    if (e.target.classList.contains("ring")) {
      e.target.classList.remove("ring")
      e.target.classList.remove("ring-red-400")
      e.target.classList.remove("bg-red-50")
    }
  }

  function checkInputValidity(e) {
    const isValid = e.target.checkValidity()
    if (!isValid) {
      e.target.classList.add("ring")
      e.target.classList.add("ring-red-400")
      e.target.classList.add("bg-red-50")
    } else {
      e.target.classList.remove("ring")
      e.target.classList.remove("ring-red-400")
      e.target.classList.remove("bg-red-50")
    }
  }

  function toggleMenu() {
    if (menuIcoRef.current.classList.contains("menu-active")) {
      //show overflow
      document.body.classList.remove("overflow-hidden")
      //hide menu
      menuIcoRef.current.classList.remove("menu-active")
      mobileMenuRef.current.classList.add("opacity-0")
      setTimeout(() => {
        mobileMenuRef.current.classList.remove("flex")
        mobileMenuRef.current.classList.add("hidden")

      }, 700)
    } else {
      //hide overflow
      document.body.classList.add("overflow-hidden")
      //show menu
      menuIcoRef.current.classList.add("menu-active")
      mobileMenuRef.current.classList.add("flex")
      mobileMenuRef.current.classList.remove("hidden")
      setTimeout(() => {
        mobileMenuRef.current.classList.remove("opacity-0")
      }, 100)
    }
  }

  function scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  function handleScroll() {
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    // console.log("scroll", scrollTop, scrollTotal)
    if ((scrollTop / scrollTotal) > 0.4) {
      if (scrollToTopRef.current.classList.contains("hidden")) {
        scrollToTopRef.current.classList.remove("hidden")
      }
      setTimeout(() => {
        if (scrollToTopRef.current.classList.contains("opacity-0")) {
          scrollToTopRef.current.classList.remove("opacity-0")
        }
      }, 100)
    } else {
      if (!scrollToTopRef.current.classList.contains("opacity-0")) {
        scrollToTopRef.current.classList.add("opacity-0")
        setTimeout(() => {
          scrollToTopRef.current.classList.add("hidden")
        }, 300)
      }
    }
  }

  function handleLoginBtnClick() {
    const stateObj = { page: "about" }
    window.history.replaceState(stateObj, "", "./about")
  }

  return (
    <div ref={mainRef} className="" id="home">
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
        <button onClick={toggleMenu} className="md:hidden ml-auto mr-4 focus:outline-none relative z-50">
          <span className="sr-only">menu</span>
          <MenuIco ref={menuIcoRef} />
        </button >
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
      <div ref={heroRef}
        data-rellax-speed="-10"
        data-rellax-xs-speed="-5" data-rellax-mobile-speed="-5"
        className="bg-hero bg-no-repeat h-96 pt-16 md:pt-0 md:h-screen w-full bg-cover z-0" ></div >
      <div className="relative z-10">
        <div className="flex flex-col items-center py-6 bg-opacity-70 bg-white">
          <p className="uppercase text-sm md:text-base lg:text-lg text-teal-900 font-mont">developing innovative strategies</p>
          <h1 className="mt-2 uppercase text-3xl md:text-4xl lg:text-6xl text-teal-900 font-mont tracking-tighter">achieving growth</h1>
        </div >
        <section className="md:flex hidden justify-center bg-white text-center pt-16 pb-12 space-x-10">
          <div className="bg-teal-800 w-80 p-8 text-white">
            <h2 className="text-2xl uppercase tracking-wider font-mont text-gray-300">services</h2>
            <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, recusandae ducimus. Natus dolores praesentium possimus voluptatem eos maiores pariatur iusto harum voluptatibus obcaecati iste similique vitae, dolorum tempora odio doloribus?</p>
            <button className="capitalize mt-8 bg-teal-600 py-2 px-8 tracking-wide">more info</button>
          </div >
          <div className="bg-teal-800 w-80 p-8  text-white">
            <h2 className="text-2xl uppercase tracking-wider font-mont text-gray-300">projects</h2>
            <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, recusandae ducimus. Natus dolores praesentium possimus voluptatem eos maiores pariatur iusto harum voluptatibus obcaecati iste similique vitae, dolorum tempora odio doloribus?</p>
            <button className="capitalize mt-8 bg-teal-600 py-2 px-8 tracking-wide">more info</button>
          </div >
          <div className="bg-teal-800 w-80 p-8  text-white">
            <h2 className="text-2xl uppercase tracking-wider font-mont text-gray-300">clients</h2>
            <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, recusandae ducimus. Natus dolores praesentium possimus voluptatem eos maiores pariatur iusto harum voluptatibus obcaecati iste similique vitae, dolorum tempora odio doloribus?</p>
            <button className="capitalize mt-8 bg-teal-600 py-2 px-8 tracking-wide">more info</button>
          </div >
        </section >
        <section className="flex md:hidden flex-col justify-center bg-white text-center space-y-px">
          <div data-aos="fade-up" data-aos-anchor="#home" className="bg-teal-800 p-8 text-white">
            <h2 className="text-2xl uppercase tracking-wider font-mont text-gray-300">services</h2>
            <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, recusandae ducimus. Natus dolores praesentium possimus voluptatem eos maiores pariatur iusto harum voluptatibus obcaecati iste similique vitae, dolorum tempora odio doloribus?</p>
            <button className="capitalize mt-8 bg-teal-600 py-2 px-8 tracking-wide">more info</button>
          </div >
          <div data-aos="fade-up" className="bg-teal-800 p-8 text-white">
            <h2 className="text-2xl uppercase tracking-wider font-mont text-gray-300">projects</h2>
            <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, recusandae ducimus. Natus dolores praesentium possimus voluptatem eos maiores pariatur iusto harum voluptatibus obcaecati iste similique vitae, dolorum tempora odio doloribus?</p>
            <button className="capitalize mt-8 bg-teal-600 py-2 px-8 tracking-wide">more info</button>
          </div >
          <div data-aos="fade-up" className="bg-teal-800 p-8 text-white">
            <h2 className="text-2xl uppercase tracking-wider font-mont text-gray-300">clients</h2>
            <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, recusandae ducimus. Natus dolores praesentium possimus voluptatem eos maiores pariatur iusto harum voluptatibus obcaecati iste similique vitae, dolorum tempora odio doloribus?</p>
            <button className="capitalize mt-8 bg-teal-600 py-2 px-8 tracking-wide">more info</button>
          </div >
        </section >
        <section id="about" className=" py-20 flex items-center flex-col bg-teal-50 text-teal-900 text-center">
          <div data-aos="fade-in">
            <h2 className="uppercase text-4xl md:text-5xl lg:text-6xl font-mont">about us</h2>
            <p className="max-w-screen-sm mt-16 px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro facere nemo ex repellendus blanditiis nisi voluptas earum exceptzuri aut ex nihil consequatur ab molestiae inventore, placeat cum providentex praesentaium incidunt ipsa quibusidam aliquam ab ex!</p>
            <p className="max-w-screen-sm mt-4 px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro facere nemo ex repellendus blanditiis nisi voluptas earum exceptzuri aut ex nihil consequatur ab molestiae inventore, placeat cum providentex praesentaium incidunt ipsa quibusidam aliquam ab ex deux culpa mae.</p>
            <button className="capitalize tracking-wide font-open bg-teal-900 py-2 px-8 text-teal-50 mt-16 md:mt-10">read more</button>
          </div >
        </section >
        <section id="contact" className=" pt-20 md:pb-28 flex items-center flex-col bg-teal-900 text-teal-50 text-center">
          <h2 data-aos="fade-in" className="uppercase text-4xl md:text-5xl lg:text-6xl font-mont">contact us</h2>
          <div className="flex flex-col-reverse md:flex-row mt-16 px-4">
            <img className="hidden md:block md:w-1/2 object-fill" src="./assets/map0.png" alt="500 Terry Francois Street, San Francisco, CA 94158" />
            <img className="md:hidden block mt-16 md:w-1/2 object-fill" src="./assets/map0-sm.png" alt="500 Terry Francois Street, San Francisco, CA 94158" />
            <div className="md:ml-8 lg:ml-12 w-full lg:w-96 md:w-80">
              <p data-aos="fade-in">500 Terry Francois Street, San Francisco, CA 94158 <br />
              info@mysite.com  Tel: 123-456-7890</p>
              <form className="flex flex-col items-start mt-6 ">
                <label htmlFor="firstName" className="capitalize pb-2">first name <span className="text-orange-200">*</span></label>
                <input onChange={removeValidOrNotMarker} onBlur={checkInputValidity} className="w-full py-1 px-3 text-teal-900 hover:bg-teal-50" type="text" placeholder="First Name" required name="firstName" id="firstName" />
                <label htmlFor="lastName" className="capitalize pb-2">last name</label>
                <input className="w-full py-1 px-3 text-teal-900 hover:bg-teal-50" type="text" placeholder="Last Name" name="lastName" id="lastName" />
                <label htmlFor="email" className="capitalize pb-2">email <span className="text-orange-200">*</span></label>
                <input onChange={removeValidOrNotMarker} onBlur={checkInputValidity} className="w-full py-1 px-3 text-teal-900 hover:bg-teal-50" type="email" placeholder="Email" required name="email" id="email" />
                <label htmlFor="subject" className="capitalize pb-2">subject</label>
                <input className="w-full py-1 px-3 text-teal-900 hover:bg-teal-50" type="text" placeholder="Subject" name="subject" id="subject" />
                <label htmlFor="message" className="capitalize pb-2">message</label>
                <textarea className="h-32 w-full py-1 px-3 resize-none text-teal-900 hover:bg-teal-50" placeholder="Type your message here..." name="message" id="message" />
                <button type="submit" className="capitalize self-end tracking-wide bg-teal-700 mt-4 py-1 px-8 text-teal-50">submit</button>
              </form>
            </div >
          </div >
        </section >
      </div >
      <footer className="bg-teal-900 text-teal-50">
        <div data-aos="fade-in" className="text-sm w-full md:grid md:grid-cols-11 flex flex-col text-center items-center md:items-start md:text-left pt-12 pb-8 md:py-16">
          <p className="w-3/4 md:w-full md:col-start-3 md:col-span-5">
            © 2023 by James Consulting. Proudly created with <a href="https://reactjs.org/docs/getting-started.html">React</a> and <a href="https://tailwindcss.com/">TailwindCSS</a>
          </p>
          <div className="mt-6 md:mt-0 md:col-start-10 flex space-x-4">
            <button className="w-6 h-6 md:w-4 md:h-4">
              <span className="sr-only">Facebook</span>
              <FacebookIco />
            </button>
            <button className="w-6 h-6 md:w-4 md:h-4">
              <span className="sr-only">Twitter</span>
              <TwitterIco />
            </button >
          </div >
        </div >
      </footer >
      <div className="md:hidden">
        <button ref={scrollToTopRef} onClick={scrollToTop} className="transform opacity-0 transition-opacity duration-500 hidden bg-teal-600 p-1 text-teal-50 fixed bottom-16 right-4 w-10 h-10 rounded-full z-50 outline-none">
          <UpIco />
        </button>
      </div>
    </div >
  )
}

export default App
