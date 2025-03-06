import Image from "next/image";
import { useState } from "react";

type Project = {
  name: string;
  domain: string;
  githubLink: string;
  isDeployed: boolean;
  deployedLink?: string;
  image: string;
};

type ProjectProps = {
  projectRef: React.RefObject<HTMLDivElement>;
  projects: Project[];
};
const itemsPerPage = 6;
const domains = ["All", "AI/ML", "Web Development", "Blockchain"];

const projects = [
  {
    name: "Sentiment Analysis",
    domain: "AI/ML",
    githubLink: "github/jdlkfa",
    isDeployed: true,
    deployedLink: "deployed/link",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Portfolio Website",
    domain: "Web Development",
    githubLink: "github/xyzportfolio",
    isDeployed: true,
    deployedLink: "deployed/portfolio-link",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chatbot Development",
    domain: "AI/ML",
    githubLink: "github/chatbotproject",
    isDeployed: false,
    deployedLink: "",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "E-Commerce Website",
    domain: "Web Development",
    githubLink: "github/ecommerceproject",
    isDeployed: true,
    deployedLink: "deployed/ecommerce-link",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Blockchain-based Voting System",
    domain: "Blockchain",
    githubLink: "github/blockchainvoting",
    isDeployed: false,
    deployedLink: "",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Real-time Weather App",
    domain: "Web Development",
    githubLink: "github/weatherapp",
    isDeployed: true,
    deployedLink: "deployed/weather-link",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Face Recognition System",
    domain: "AI/ML",
    githubLink: "github/facerecognition",
    isDeployed: false,
    deployedLink: "",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Stock Price Predictor",
    domain: "AI/ML",
    githubLink: "github/stockpredictor",
    isDeployed: true,
    deployedLink: "deployed/stock-predictor",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "NFT Marketplace",
    domain: "Blockchain",
    githubLink: "github/nftmarketplace",
    isDeployed: false,
    deployedLink: "",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Social Media Dashboard",
    domain: "Web Development",
    githubLink: "github/socialmediadashboard",
    isDeployed: true,
    deployedLink: "deployed/social-dashboard",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fraud Detection System",
    domain: "AI/ML",
    githubLink: "github/frauddetection",
    isDeployed: false,
    deployedLink: "",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Blog CMS",
    domain: "Web Development",
    githubLink: "github/blogcms",
    isDeployed: true,
    deployedLink: "deployed/blogcms",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Crypto Wallet App",
    domain: "Blockchain",
    githubLink: "github/cryptowallet",
    isDeployed: false,
    deployedLink: "",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "AI-Powered Resume Analyzer",
    domain: "AI/ML",
    githubLink: "github/resumeanalyzer",
    isDeployed: true,
    deployedLink: "deployed/resume-analyzer",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Online Code Editor",
    domain: "Web Development",
    githubLink: "github/codeeditor",
    isDeployed: true,
    deployedLink: "deployed/codeeditor",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "DeFi Lending Platform",
    domain: "Blockchain",
    githubLink: "github/defilending",
    isDeployed: false,
    deployedLink: "",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "AI-Powered Chat Assistant",
    domain: "AI/ML",
    githubLink: "github/aichatassistant",
    isDeployed: true,
    deployedLink: "deployed/chat-assistant",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "E-Learning Platform",
    domain: "Web Development",
    githubLink: "github/elearning",
    isDeployed: true,
    deployedLink: "deployed/elearning",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Supply Chain Tracker",
    domain: "Blockchain",
    githubLink: "github/supplychaintracker",
    isDeployed: false,
    deployedLink: "",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "AI-Generated Art Platform",
    domain: "AI/ML",
    githubLink: "github/aiart",
    isDeployed: true,
    deployedLink: "deployed/aiart",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Task Management App",
    domain: "Web Development",
    githubLink: "github/taskmanager",
    isDeployed: true,
    deployedLink: "deployed/taskmanager",
    image:
      "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Project = ({ projectRef }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDomain, setSelectedDomain] = useState("All");

  const filteredProjects =
    selectedDomain === "All"
      ? projects
      : projects.filter((project) => project.domain === selectedDomain);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div
      ref={projectRef}
      className="min-h-screen bg-blue-50 dark:bg-gray-900 p-8 border-b transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Projects
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
        Here are some of the projects I’ve worked on.
      </p>

      <div className="flex justify-center mb-6">
        {domains.map((domain) => (
          <button
            key={domain}
            onClick={() => {
              setSelectedDomain(domain);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 mx-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
              selectedDomain === domain
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
            }`}
          >
            {domain}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-4 transition-colors duration-300"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-3">
              {project.name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
              {project.domain}
            </p>
            <div className="flex gap-4 mt-3">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub
              </a>
              {project.isDeployed && project.deployedLink && (
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-2 text-gray-900 dark:text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Project;
// function Project({ projectRef }: ProjectProps) {
//   return (
//     <div ref={projectRef} className="min-h-screen bg-blue-50 p-8 border-b">
//       <h2 className="text-2xl font-bold mb-4">Projects</h2>
//       <p className="text-gray-600">This is the Projects section of the page.</p>
//     </div>
//   );
// }
