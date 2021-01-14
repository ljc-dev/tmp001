import { useAutoScrollToTop } from "../hooks/scrollToTop";

const serviceArr = [
  { src: "./assets/projects/pro1.jpg", title: "project management", time: "1 hr", price: "$220" },
  { src: "./assets/projects/pro2.jpg", title: "operational consulting", time: "1 hr", price: "$150" },
  { src: "./assets/projects/pro3.jpg", title: "corporate strategy", time: "1 hr", price: "$170" },
]

function getCard(service, index) {
  return (
    <div key={index} className="flex flex-col w-72 text-center text-teal-900 border">
      <button className="focus:outline-none">
        <div className="darken w-72 h-48 bg-cover" style={{ backgroundImage: `url(${service.src})` }}></div>
      </button>
      <div className="flex flex-col py-6 px-4 md:h-64">
        <button className="uppercase text-xl md:text-2xl font-mont tracking-tight hover:opacity-60 transition-opacity transform duration-100 ease-linear focus:outline-none">{service.title}</button>
        <p className="mt-4">{service.time}</p>
        <p className="md:mt-2">{service.price}</p>
        <button className="darken capitalize bg-teal-900 text-teal-50 py-2 mt-6 md:mt-auto md:w-32 md:mx-auto hover:opacity-70 transition-opacity transform duration-300 ease-linear focus:outline-none">book now</button>
      </div>
    </div>
  )
}

const Services = () => {
  useAutoScrollToTop()

  return (
    <div data-aos="fade-in" className="px-6 flex flex-col items-center">
      <div className="mt-20 flex flex-col items-center pt-8">
        <h1 className="uppercase text-5xl font-mont text-teal-900">services</h1>
        <div className="w-20 h-1.5 bg-teal-900 mt-3"></div>
        <p className=" mt-4 md:mt-12 text-center text-teal-900 md:w-2/3 lg:w-3/5 font-open leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam facere nihil ipsum ex laborum, minus voluptate beatae deleniti voluptatibus quia velit distinctio quibusdam maiores, reprehenderit dolores. Error saepe eius est volupt saepe.
          </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-8 space-y-12 md:space-y-0 md:gap-x-16 lg:gap-x-8 md:gap-y-16 md:pb-20">
        {
          serviceArr.map((service, index) => getCard(service, index))
        }
      </div>
    </div>
  );
}

export default Services