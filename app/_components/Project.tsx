"use client";
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

const Project = ({ projectRef }: any) => {
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
      className="flex flex-col cust justify-around gap-y-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen rounded-xl border-b p-8 transition-colors duration-300"
    >
      {/* Section Title */}
      <div>
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Projects 🚀
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-6">
          Here are some of the projects I’ve worked on.
        </p>
      </div>

      {/* Domain Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {domains.map((domain) => (
          <button
            key={domain}
            onClick={() => {
              setSelectedDomain(domain);
              setCurrentPage(1);
            }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:scale-110 ${
              selectedDomain === domain
                ? "bg-blue-600 text-white shadow-blue-500"
                : "bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            {domain}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6">
        {paginatedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {project.domain}
              </p>
              <div className="flex justify-between items-center gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-lg hover:shadow-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  GitHub
                </a>
                {project.isDeployed && project.deployedLink && (
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 text-white rounded-md shadow-lg hover:shadow-green-500 transition-all duration-300 transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-6 py-2 border-2 border-[#ff6f91] text-[#ff6f91] bg-white rounded-full shadow-[0_0_10px_#ff6f91] hover:shadow-[0_0_20px_#ff6f91] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <span className="px-6 py-2 border-[#ff9671] bg-white shadow-[0_0_10px_#ff9671] hover:shadow-[0_0_20px_#ff9671] text-black rounded-full ">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-6 py-2 border-2 border-[#ff6f91] text-[#ff6f91] bg-white rounded-full shadow-[0_0_10px_#ff6f91] hover:shadow-[0_0_20px_#ff6f91] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
