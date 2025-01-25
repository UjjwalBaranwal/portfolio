import { RefObject } from "react";

interface ProjectProps {
  projectRef: RefObject<HTMLDivElement>;
}
function Project({ projectRef }: ProjectProps) {
  return (
    <div ref={projectRef} className="min-h-screen bg-blue-50 p-8 border-b">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <p className="text-gray-600">This is the Projects section of the page.</p>
    </div>
  );
}
export default Project;
