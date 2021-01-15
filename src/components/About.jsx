import { useAutoScrollToTop } from "../hooks/scrollToTop"

const personArr = [
  { src: "./assets/avatars/av2.png", name: "James Johnson", title: "Founder and Principal", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ad. Quod placeat fugiat odio, quidem odit aut voluptatibus omnis possimus dolores eligendi, dolor asperiores deserunt nobis nihil autem dolore corporis." },
  { src: "./assets/avatars/av1.png", name: "Samantha Jones", title: "Project Manager", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ad. Quod placeat fugiat odio, quidem odit aut voluptatibus omnis possimus dolores eligendi, dolor asperiores deserunt nobis nihil autem dolore corporis." },
  { src: "./assets/avatars/av4.png", name: "Kim Bailey", title: "VP Marketing", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ad. Quod placeat fugiat odio, quidem odit aut voluptatibus omnis possimus dolores eligendi, dolor asperiores deserunt nobis nihil autem dolore corporis." },
  { src: "./assets/avatars/av3.png", name: "Trevor Sinclair", title: "VP Accounts", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ad. Quod placeat fugiat odio, quidem odit aut voluptatibus omnis possimus dolores eligendi, dolor asperiores deserunt nobis nihil autem dolore corporis." },
]

function getCard(person, index) {
  return (
    <div data-aos="fade-up" className="max-w-md" key={index}>
      <div className="flex h-32">
        <img className="w-32 h-32 object-cover" src={person.src} alt={person.name} />
        <div className="p-4 bg-teal-900 text-teal-50 flex-1 font-mont tracking-tighter md:text-2xl flex flex-col md:justify-center">
          <p>{person.name}</p>
          <p>{person.title}</p>
        </div>
      </div>
      <p className=" mt-4 text-left text-sm text-teal-900 leading-relaxed tracking-wide">
        {person.desc}
      </p>
    </div>
  )
}

const About = () => {
  useAutoScrollToTop()


  return (
    <div data-aos="fade-in" className="px-6 flex flex-col items-center">
      <div data-aos="fade-up" className="mt-20 flex flex-col items-center pt-8">
        <h1 className="uppercase text-5xl md:text-6xl font-mont text-teal-900">about</h1>
        <div className="w-20 h-1.5 bg-teal-900 mt-3"></div>
        <p className=" mt-4 md:mt-12 text-center text-teal-900 max-w-screen-sm font-open leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam facere nihil ipsum ex laborum, minus voluptate beatae deleniti voluptatibus quia velit distinctio quibusdam maiores, reprehenderit dolores. Error saepe eius est volupt saepe.
          </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 mt-12 mb-8 space-y-12 md:space-y-0 md:gap-x-16 md:gap-y-16">
        {
          personArr.map((person, index) => getCard(person, index))
        }
      </div>
    </div>
  );
}

export default About