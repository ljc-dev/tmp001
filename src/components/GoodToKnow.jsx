import { useAutoScrollToTop } from "../hooks/scrollToTop";

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
    <div data-aos="fade-in" className="px-6 flex flex-col items-center">
      <div data-aos="fade-up" className="mt-20 flex flex-col items-center pt-8">
        <h1 className="uppercase text-5xl md:text-6xl font-mont text-teal-900">good to know</h1>
        <div className="w-20 h-1.5 bg-teal-900 mt-3"></div>

      </div>
    </div>
  );
}

export default GoodToKnow