import UserIco from "./icons/userIco"
import Rellax from 'rellax';
import { useEffect, useRef } from "react";
import FacebookIco from "./icons/facebookIco";
import TwitterIco from "./icons/twitterIco";

function App() {
  const heroRef = useRef(null)
  useEffect(() => {
    new Rellax(heroRef.current, {
      speed: -10,

    })
  }, [])

  function removeValidOrNotMarker(e) {
    if (e.target.classList.contains("ring")) {
      e.target.classList.remove("ring")
      e.target.classList.remove("ring-red-400")
    }
  }
  function checkInputValidity(e) {
    const isValid = e.target.checkValidity()
    if (!isValid) {
      e.target.classList.add("ring")
      e.target.classList.add("ring-red-400")
    } else {
      e.target.classList.remove("ring")
      e.target.classList.remove("ring-red-400")
    }
  }

  return (
    <div className="">
      <nav className="flex bg-teal-900 text-white h-20 justify-center items-center fixed inset-x-0 z-50">
        <button className="uppercase text-xl tracking-wider font-mont">james <span className="text-teal-400">consulting</span></button>
        <ul className="flex ml-20 text-sm">
          <li><a className="p-4" href="#about">About</a></li>
          <li><a className="p-4" href="#services">Services</a></li>
          <li><a className="p-4" href="#projects">Projects</a></li>
          <li><a className="p-4" href="#goodtoknow">Good To Know</a></li>
          <li><a className="p-4" href="#clients">Clients</a></li>
          <li><a className="p-4" href="#contact">Contact</a></li>
        </ul>
        <button className="ml-12 text-teal-400 flex items-center">
          <UserIco />
          <span className="text-sm ml-2">Log In</span>
        </button>
      </nav>
      <div ref={heroRef} className="bg-hero bg-no-repeat h-screen w-full bg-cover z-0"></div>
      <div className="relative z-40">
        <div className="flex flex-col items-center py-6 bg-opacity-70 bg-white">
          <p className="uppercase text-lg text-teal-900 tracking-wider font-mont">developing innovative strategies</p>
          <h1 className="mt-2 uppercase text-6xl text-teal-900 font-mont">achieving growth</h1>
        </div>
        <section className="flex justify-center bg-white text-center pt-16 pb-12 space-x-10">
          <div className="bg-teal-800 w-80 p-8  text-white">
            <h2 className="text-2xl uppercase tracking-wider font-mont text-gray-300">services</h2>
            <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, recusandae ducimus. Natus dolores praesentium possimus voluptatem eos maiores pariatur iusto harum voluptatibus obcaecati iste similique vitae, dolorum tempora odio doloribus?</p>
            <button className="capitalize mt-8 bg-teal-600 py-2 px-8 tracking-wide">more info</button>
          </div>
          <div className="bg-teal-800 w-80 p-8  text-white">
            <h2 className="text-2xl uppercase tracking-wider font-mont text-gray-300">projects</h2>
            <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, recusandae ducimus. Natus dolores praesentium possimus voluptatem eos maiores pariatur iusto harum voluptatibus obcaecati iste similique vitae, dolorum tempora odio doloribus?</p>
            <button className="capitalize mt-8 bg-teal-600 py-2 px-8 tracking-wide">more info</button>
          </div>
          <div className="bg-teal-800 w-80 p-8  text-white">
            <h2 className="text-2xl uppercase tracking-wider font-mont text-gray-300">clients</h2>
            <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, recusandae ducimus. Natus dolores praesentium possimus voluptatem eos maiores pariatur iusto harum voluptatibus obcaecati iste similique vitae, dolorum tempora odio doloribus?</p>
            <button className="capitalize mt-8 bg-teal-600 py-2 px-8 tracking-wide">more info</button>
          </div>
        </section>
        <section className=" py-20 flex items-center flex-col bg-teal-50 text-teal-900 text-center">
          <h2 className="uppercase text-6xl font-mont">about us</h2>
          <p className="max-w-screen-sm mt-16">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro facere nemo ex repellendus blanditiis nisi voluptas earum exceptzuri aut ex nihil consequatur ab molestiae inventore, placeat cum providentex praesentaium incidunt ipsa quibusidam aliquam ab ex!</p>
          <p className="max-w-screen-sm mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro facere nemo ex repellendus blanditiis nisi voluptas earum exceptzuri aut ex nihil consequatur ab molestiae inventore, placeat cum providentex praesentaium incidunt ipsa quibusidam aliquam ab ex deux culpa mae.</p>
          <button className="capitalize tracking-wide font-open bg-teal-900 py-2 px-8 text-teal-50 mt-10">read more</button>
        </section>
        <section className=" pt-20 pb-28 flex items-center flex-col bg-teal-900 text-teal-50 text-center">
          <h2 className="uppercase text-6xl font-mont">contact us</h2>
          <div className="flex mt-16 space-x-12">
            <img src="./assets/map0.png" alt="500 Terry Francois Street, San Francisco, CA 94158" />
            <div className="w-96">
              <p>500 Terry Francois Street, San Francisco, CA 94158 <br />
              info@mysite.com  Tel: 123-456-7890</p>
              <form className="flex flex-col items-start mt-6 ">
                <label htmlFor="firstName" className="capitalize pb-2">first name <span className="text-gray-200">*</span></label>
                <input onChange={removeValidOrNotMarker} onBlur={checkInputValidity} className=" w-full py-1 px-3 text-teal-900" type="text" placeholder="First Name" required name="firstName" id="firstName" />
                <label htmlFor="lastName" className="capitalize pb-2">last name</label>
                <input className="w-full py-1 px-3 text-teal-900" type="text" placeholder="Last Name" name="lastName" id="lastName" />
                <label htmlFor="email" className="capitalize pb-2">email <span className="text-gray-200">*</span></label>
                <input onChange={removeValidOrNotMarker} onBlur={checkInputValidity} className="w-full py-1 px-3 text-teal-900" type="email" placeholder="Email" required name="email" id="email" />
                <label htmlFor="subject" className="capitalize pb-2">subject</label>
                <input className="w-full py-1 px-3 text-teal-900" type="text" placeholder="Subject" name="subject" id="subject" />
                <label htmlFor="message" className="capitalize pb-2">message</label>
                <textarea className="h-32 w-full py-1 px-3 resize-none text-teal-900" placeholder="Type your message here..." name="message" id="message" />
                <button type="submit" className="capitalize self-end tracking-wide bg-teal-700 mt-4 py-1 px-8 text-teal-50">submit</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-teal-900 text-teal-50 py-16 text-sm w-full grid grid-cols-11">
        <p className="col-start-3 col-span-5">
          © 2023 by James Consulting. Proudly created with <a href="https://reactjs.org/docs/getting-started.html">React</a> and <a href="https://tailwindcss.com/">TailwindCSS</a>
        </p>
        <div className="col-start-10 flex space-x-4">
          <button className="w-4 h-4">
            <span className="sr-only">Facebook</span>
            <FacebookIco />
          </button>
          <button className="w-4 h-4">
            <span className="sr-only">Twitter</span>
            <TwitterIco />
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
