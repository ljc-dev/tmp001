import { useAutoScrollToTop } from "../hooks/scrollToTop";

const projectsArr = [
  { src: "./assets/projects/pro1.jpg", title: "project 1", },
  { src: "./assets/projects/pro2.jpg", title: "project 2", },
  { src: "./assets/projects/pro3.jpg", title: "project 3", },
  { src: "./assets/projects/pro4.jpg", title: "project 4", },
]

function getCard(project) {
  return (
    <div data-aos="fade-up" key={project.title} className="flex flex-col md:flex-row w-72 md:w-full md:max-w-screen-lg text-teal-900">
      <div>
        <div className="w-72 h-48 bg-cover" style={{ backgroundImage: `url(${project.src})` }}></div>
      </div>
      <div className="-mt-1 flex flex-col pt-8 md:pt-0 pb-6 md:pb-0 md:h-auto md:pl-10 md:max-w-screen-sm">
        <p className=" uppercase text-left text-2xl md:text-3xl font-mont tracking-tighter">{project.title}</p>
        <p className=" mt-2 text-teal-900 font-open">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam ullam eligendi impedit culpa cupiditate accusantium. Officiis itaque modi fugit? Nostrum eos velit aliquam praesentium rem voluptatibus commodi distinctio ab.</p>
      </div>
    </div>
  )
}

const Projects = () => {
  useAutoScrollToTop()

  return (
    <div data-aos="fade-in" className="px-6 flex flex-col items-center">
      <div data-aos="fade-up" className="mt-20 flex flex-col items-center pt-8">
        <h1 className="uppercase text-5xl md:text-6xl font-mont text-teal-900">projects</h1>
        <div className="w-20 h-1.5 bg-teal-900 mt-3"></div>
      </div>
      <div className=" grid grid-cols-1 mt-12 md:mt-20 mb-8 space-y-12 md:space-y-20">
        {
          projectsArr.map((project) => getCard(project))
        }
      </div>
    </div>
  );
}

export default Projects