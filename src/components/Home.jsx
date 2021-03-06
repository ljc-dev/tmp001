import { useAutoScrollToTop } from "../hooks/scrollToTop"
import { checkInputValidity, removeValidOrNotMarker } from "../utils/formFcts"
import Rellax from 'rellax'
import { useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"

const Home = () => {
  const history = useHistory()
  const formConfirmMsgRef = useRef(null)
  useEffect(() => {
    new Rellax(".rellax", {})
  }, [])

  useAutoScrollToTop()

  function handleContactFormSubmit(e) {
    e.preventDefault()
    formConfirmMsgRef.current.classList.remove("opacity-0")
    setTimeout(() => {
      formConfirmMsgRef.current.classList.add("opacity-0")
    }, 2000)
    e.target.reset()
  }

  function handleReadMoreAboutClick() {
    return history.push("/about")
  }

  return (
    <div data-aos="fade-in" className="" id="home">
      <div data-rellax-speed="-10" data-rellax-xs-speed="-3" data-rellax-mobile-speed="-5" className="rellax bg-hero bg-no-repeat h-96 pt-16 md:pt-0 md:h-screen w-full bg-cover z-0" ></div >
      <div className="relative z-10">
        <div className="flex flex-col items-center py-6 bg-opacity-70 bg-white text-center">
          <p className="uppercase text-sm md:text-base lg:text-lg text-teal-900 font-mont">developing innovative strategies</p>
          <h1 className="mt-2 uppercase text-3xl md:text-4xl lg:text-6xl text-teal-900 font-mont tracking-tighter">achieving growth</h1>
        </div >
        <section className="bg-white md:pt-20 md:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-screen-lg mx-auto gap-y-px sm:gap-y-8 sm:py-8 md:py-0 md:gap-y-0 md:gap-x-4 lg:gap-x-10">
            <div data-aos="sm-fade-up" data-aos-anchor="#home" className="bg-teal-800 max-w-xl mx-auto w-full p-8 md:p-4 lg:p-8 text-center text-white">
              <h2 className="text-2xl uppercase tracking-wider font-mont text-gray-300">services</h2>
              <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, recusandae ducimus. Natus dolores praesentium possimus voluptatem eos maiores pariatur iusto harum voluptatibus obcaecati iste similique vitae, dolorum tempora odio doloribus?</p>
              <button className="capitalize mt-8 bg-teal-600 py-2 px-8 tracking-wide">more info</button>
            </div >
            <div data-aos="sm-fade-up" className="bg-teal-800 max-w-xl mx-auto w-full p-8 md:p-4 lg:p-8 text-center text-white">
              <h2 className="text-2xl uppercase tracking-wider font-mont text-gray-300">projects</h2>
              <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, recusandae ducimus. Natus dolores praesentium possimus voluptatem eos maiores pariatur iusto harum voluptatibus obcaecati iste similique vitae, dolorum tempora odio doloribus?</p>
              <button className="capitalize mt-8 bg-teal-600 py-2 px-8 tracking-wide">more info</button>
            </div >
            <div data-aos="sm-fade-up" className="bg-teal-800 max-w-xl mx-auto w-full p-8 md:p-4 lg:p-8 text-center text-white">
              <h2 className="text-2xl uppercase tracking-wider font-mont text-gray-300">clients</h2>
              <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, recusandae ducimus. Natus dolores praesentium possimus voluptatem eos maiores pariatur iusto harum voluptatibus obcaecati iste similique vitae, dolorum tempora odio doloribus?</p>
              <button className="capitalize mt-8 bg-teal-600 py-2 px-8 tracking-wide">more info</button>
            </div >
          </div>
        </section >
        <section data-aos="sm-fade-up" id="about" className=" py-20 flex items-center flex-col bg-teal-50 text-teal-900 text-center">
          <div data-aos="bg-fade-in">
            <h2 className="uppercase text-4xl md:text-5xl lg:text-6xl font-mont">about us</h2>
            <p className="max-w-screen-sm mt-16 px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro facere nemo ex repellendus blanditiis nisi voluptas earum exceptzuri aut ex nihil consequatur ab molestiae inventore, placeat cum providentex praesentaium incidunt ipsa quibusidam aliquam ab ex!</p>
            <p className="max-w-screen-sm mt-4 px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro facere nemo ex repellendus blanditiis nisi voluptas earum exceptzuri aut ex nihil consequatur ab molestiae inventore, placeat cum providentex praesentaium incidunt ipsa quibusidam aliquam ab ex deux culpa mae.</p>
            <button onClick={handleReadMoreAboutClick} className="capitalize tracking-wide font-open bg-teal-900 py-2 px-8 text-teal-50 mt-16 md:mt-10">read more</button>
          </div >
        </section >
        <section data-aos="sm-fade-up" id="contact" className=" pt-20 md:pb-28 flex items-center flex-col bg-teal-900 text-teal-50 text-center">
          <h2 data-aos="bg-fade-in" className="uppercase text-4xl md:text-5xl lg:text-6xl font-mont">contact us</h2>
          <div className="flex flex-col-reverse md:flex-row mt-16 px-4">
            <img className="hidden md:block md:w-1/2 object-fill" src="./assets/map0.png" alt="500 Terry Francois Street, San Francisco, CA 94158" />
            <img className="md:hidden block mt-16 md:w-1/2 object-cover" src="./assets/map0-sm.png" alt="500 Terry Francois Street, San Francisco, CA 94158" />
            <div className="md:ml-8 lg:ml-12 w-full lg:w-96 md:w-80">
              <p data-aos="bg-fade-in" >500 Terry Francois Street, San Francisco, CA 94158 <br />
              info@mysite.com  Tel: 123-456-7890</p>
              <form onSubmit={handleContactFormSubmit} className="flex flex-col items-start mt-6 ">
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
                <button type="submit" className="capitalize self-end tracking-wide bg-teal-700 mt-4 py-1 text-center w-40 text-teal-50">submit</button>
                <p ref={formConfirmMsgRef} className="self-end mt-2 text-teal-50 text-sm font-mont opacity-0">Thanks for submitting!</p>
              </form>
            </div >
          </div >
        </section >
      </div >
    </div >
  )
}

export default Home