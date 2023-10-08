import { Link } from "react-router-dom";
import image1 from "../../../assets/images/project/project-1.png";
import image2 from "../../../assets/images/project/project-2.png";
import image3 from "../../../assets/images/project/project-3.png";
import image4 from "../../../assets/images/project/project-4.png";

const projects = [
  {
    id: 1,
    name: "Al-Azam High School and College",
    imageUrl: image1,
    liveDemoUrl: "https://alazamsc.edu.bd/",
  },
  {
    id: 2,
    name: "Golbunia Nesaria Dakhil Madrasah",
    imageUrl: image2,
    liveDemoUrl: "https://golbuniamadrasha.com/",
  },
  {
    id: 3,
    name: "Portfolio of Md. Alamgir",
    imageUrl: image3,
    liveDemoUrl: "https://sites.google.com/view/ayeshadreamhouse",
  },
  {
    id: 4,
    name: "AYESHA Dream House",
    imageUrl: image4,
    liveDemoUrl: "/",
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
          <div key={project?.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="overflow-x-auto max-h-80">
              <img src={project?.imageUrl} alt={project?.name} className="w-full h-auto rounded-lg" />
            </div>
            <h2 className="text-xl font-semibold mt-4">{project?.name}</h2>
            <p className="text-gray-600 mt-2">{project?.description}</p>
            <div className="mt-2 flex justify-center items-center">
              <div className="w-1/2">
                <Link to={project?.liveDemoUrl} target="_blank" rel="noopener noreferrer">
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
