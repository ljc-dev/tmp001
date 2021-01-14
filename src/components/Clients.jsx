import { useAutoScrollToTop } from "../hooks/scrollToTop";

const clientsArr = [
  { src: "./assets/brands/b1.svg", name: "client 1" },
  { src: "./assets/brands/b2.svg", name: "client 2" },
  { src: "./assets/brands/b3.svg", name: "client 3" },
  { src: "./assets/brands/b4.svg", name: "client 4" },
  { src: "./assets/brands/b5.svg", name: "client 5" },
  { src: "./assets/brands/b6.svg", name: "client 6" },
]

function getClient(client) {
  return (
    <img className="w-24 h-24 md:w-36 md:h-36 object-contain opacity-50" key={client.src} src={client.src} alt={client.name} />
  )
}

const Clients = () => {
  useAutoScrollToTop()

  return (
    <div data-aos="fade-in" className="px-6 flex flex-col items-center">
      <div data-aos="fade-up" className="mt-20 flex flex-col items-center pt-8">
        <h1 className="uppercase text-5xl md:text-6xl font-mont text-teal-900">clients</h1>
        <div className="w-20 h-1.5 bg-teal-900 mt-3"></div>
        <p className=" mt-4 md:mt-12 text-center text-teal-900 max-w-screen-sm font-open leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam facere nihil ipsum ex laborum, minus voluptate beatae deleniti voluptatibus quia velit distinctio quibusdam maiores, reprehenderit dolores. Error saepe eius est volupt saepe.
          </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-4 md:mt-12 md:gap-x-24 gap-y-0 md:gap-y-8 md:space-y-0">
        {
          clientsArr.map((client) => getClient(client))
        }
      </div>
      <q data-aos="fade-up" className="md:mt-20 relative font-open italic tracking-tight bg-teal-900 text-teal-50 px-4 py-8 text-center text-sm md:w-4/5 md:px-20">
        I'm a testimonial! Lorem ipsum dolor sit amet, consectetur adipisicing elit. At possimus maxime quas. Ad, veritatis asperiores. Unde laboriosam dolorem accusantium. Inventore ex eius nesciunt, vel itaque.
        <span className="block absolute -bottom-2 left-1/2 w-4 h-4 bg-teal-900 transform rotate-45 -translate-x-2">
        </span>
      </q>
      <p data-aos="fade-up" className="mt-8 mb-12 md:mb-16 text-sm">Samantha Jones, Project Manager</p>
    </div>
  );
}

export default Clients