import { useAutoScrollToTop } from "../hooks/scrollToTop";
import DotsVertical from "../icons/dotsVertical";
import SearchIco from "../icons/searchIco";
import './customAOS.css';
const clientsArr = [
  { src: "./assets/brands/b1.svg", name: "client 1" },
  { src: "./assets/brands/b2.svg", name: "client 2" },
  { src: "./assets/brands/b3.svg", name: "client 3" },
  { src: "./assets/brands/b4.svg", name: "client 4" },
  { src: "./assets/brands/b5.svg", name: "client 5" },
  { src: "./assets/brands/b6.svg", name: "client 6" },
]

const GoodToKnow = () => {
  useAutoScrollToTop()

  return (
    <div data-aos="fade-in" className="mt-20  w-full">
      <h1 data-aos="fade-up" className="uppercase text-4xl md:text-6xl font-rale text-teal-900 text-center leading-tight border">good to know</h1>
      <div className="w-20 h-1.5 bg-teal-900 mt-3 mx-auto"></div>
      <div className="w-full border flex justify-between mt-4 px-2">
        <p className="capitalize text-teal-900 font-open tracking-tight">files</p>
        <div className="flex">
          <button className="">
            <SearchIco classes={"h-6 w-6"} />
          </button>
          <button className="">
            <DotsVertical classes={"h-6 w-6"} />
          </button>
        </div>
      </div>
      <div className="flex">
        <button className="flex">
          <span className="capitalize">last updated</span>

        </button>
      </div>
    </div>
  )
}

export default GoodToKnow