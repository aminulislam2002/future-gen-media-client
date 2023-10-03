import { Link } from "react-router-dom";
import image1 from "../../../assets/images/project/Screenshot_9.png";
import image2 from "../../../assets/images/project/Screenshot_9.png";

const projects = [
  {
    id: 1,
    name: "Project Name 1",
    description: "Description for Project 1",
    imageUrl: image1,
    liveDemoUrl: "https://alazamsc.edu.bd/",
  },
  {
    id: 2,
    name: "Project Name 1",
    description: "Description for Project 2",
    imageUrl: image2,
    liveDemoUrl: "https://alazamsc.edu.bd/",
  },
  {
    id: 3,
    name: "Project Name 1",
    description: "Description for Project 3",
    imageUrl: image1,
    liveDemoUrl: "https://alazamsc.edu.bd/",
  },
  {
    id: 4,
    name: "Project Name 1",
    description: "Description for Project 4",
    imageUrl: image2,
    liveDemoUrl: "https://alazamsc.edu.bd/",
  },
];

const OurWorksForOurClients = () => {
  return (
    <div className="container mx-auto bg-gray-100 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Our Works For Our Clients</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={project.imageUrl} alt={project.name} className="w-full h-auto rounded-lg" />
            <h2 className="text-xl font-semibold mt-4">{project.name}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="mt-2 flex justify-center items-center">
              <div className="w-1/2">
                <Link to={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 w-full mr-4 transition duration-300">
                    Live Demo
                  </button>
                </Link>
              </div>
              <div className="w-1/2">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 w-full transition duration-300">
                  Features
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorksForOurClients;
