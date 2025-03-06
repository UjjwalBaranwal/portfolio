import Image from "next/image";

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
];

// function Project({ projectRef }: ProjectProps) {
//   return (
//     <div ref={projectRef} className="min-h-screen bg-blue-50 p-8 border-b">
//       <h2 className="text-2xl font-bold mb-4">Projects</h2>
//       <p className="text-gray-600">This is the Projects section of the page.</p>
//     </div>
//   );
// }

const Project: React.FC<ProjectProps> = ({ projectRef }) => {
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
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
    </div>
  );
};

export default Project;
