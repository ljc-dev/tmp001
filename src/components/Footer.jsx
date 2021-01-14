import { useEffect } from "react";
import FacebookIco from "../icons/facebookIco"
import TwitterIco from "../icons/twitterIco"

const Footer = () => {
  useEffect(() => {
    console.log("render footer")
  }, []);
  return (
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
  )
}

export default Footer