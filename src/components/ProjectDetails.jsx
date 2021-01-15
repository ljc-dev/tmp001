import { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useAutoScrollToTop } from "../hooks/scrollToTop";

const projectsArr = [
  { src: "/assets/projects/pro1.jpg", title: "project management", time: "1 hr", price: "$220", projectName: "project1" },
  { src: "/assets/projects/pro2.jpg", title: "operational consulting", time: "1 hr", price: "$150", projectName: "project2" },
  { src: "/assets/projects/pro3.jpg", title: "corporate strategy", time: "1 hr", price: "$170", projectName: "project3" },
]

function getProjectFromName(name) {
  return projectsArr.find(project => project.projectName === name)
}

const ProjectDetails = () => {
  const match = useRouteMatch()
  useAutoScrollToTop()
  let currentProjectName = ""
  if (match) {
    currentProjectName = match.params.project
  }

  const currentProject = getProjectFromName(currentProjectName)
  console.log(currentProject.src)

  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-cover" style={{ height: "90vh", backgroundImage: `url(${currentProject.src})` }}></div>
      <div className="flex flex-col w-full max-w-2xl mx-auto">
        <h3 className="mt-20 text-4xl font-rale text-teal-900 uppercase">{currentProject.title}</h3>
        <div className="mt-8 w-32 grid grid-cols-2">
          <p className="text-teal-900 border-t border-b border-l border-teal-700 border-opacity-25 font-rale py-3 text-center">{currentProject.time}</p>
          <p className="text-teal-900 border border-teal-700 border-opacity-25 font-rale py-3 text-center">{currentProject.price}</p>
        </div>
        <button className="darken bg-teal-600 capitalize py-1.5 px-6 text-teal-50 mt-8 self-start">book now</button>
        <div className="h-px bg-gray-300 w-full mt-8"></div>
        <h4 className="mt-8 text-xl font-mont text-teal-900 tracking-tight">Service Description</h4>
        <p className="mt-4 font-rale text-teal-900">
          Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.
        </p>
        <div className="h-px bg-gray-300 w-full mt-8"></div>
        <h4 className="mt-8 text-xl font-mont text-teal-900 tracking-tight">Contact Details</h4>
        <p className="mt-4 font-rale text-teal-900 mb-8">
          + 123-456-7890<br />
          info@mysite.com<br />
          500 Terry Francois Street, San Francisco, CA 94158, USA<br />
        </p>
      </div>
    </div>
  )
}

export default ProjectDetails