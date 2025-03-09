"use client";

import { useState } from "react";

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: [""],
    visibility: false,
    feature: [""],
    isDeployed: false,
    deployedLink: "",
    githubLink: "",
    image: null,
    videolink: "",
    user: "", // Replace with authenticated user ID
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...formData.feature];
    updatedFeatures[index] = value;
    setFormData((prev) => ({ ...prev, feature: updatedFeatures }));
  };
  const handleTeckStackChange = (index: number, value: string) => {
    const updatedTeckStack = [...formData.techStack];
    updatedTeckStack[index] = value;
    setFormData((prev) => ({ ...prev, techStack: updatedTeckStack }));
  };

  const addFeature = () => {
    setFormData((prev) => ({ ...prev, feature: [...prev.feature, ""] }));
  };
  const addTechStack = () => {
    setFormData((prev) => ({ ...prev, techStack: [...prev.techStack, ""] }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData); // Handle API request here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-screen   bg-gray-800 p-6 rounded-lg shadow-md text-white space-y-4"
    >
      <h2 className="text-2xl font-bold">Add a New Project</h2>

      {/* Project Name */}
      <div className="flex items-center gap-4">
        <label htmlFor="title" className="w-32 text-right">
          Project Name:
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          className="flex-1 p-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Tech Stack */}
      <div>
        <label>Tech Stack:</label>
        {formData.techStack.map((feat, index) => (
          <input
            key={index}
            type="text"
            value={feat}
            onChange={(e) => handleTeckStackChange(index, e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 mb-2"
          />
        ))}
        <button
          type="button"
          onClick={addTechStack}
          className="text-blue-400 hover:text-blue-600"
        >
          + Add Feature
        </button>
      </div>

      {/* Features */}
      <div>
        <label>Features:</label>
        {formData.feature.map((feat, index) => (
          <input
            key={index}
            type="text"
            value={feat}
            onChange={(e) => handleFeatureChange(index, e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 mb-2"
          />
        ))}
        <button
          type="button"
          onClick={addFeature}
          className="text-blue-400 hover:text-blue-600"
        >
          + Add Feature
        </button>
      </div>

      {/* Visibility */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="visibility"
          checked={formData.visibility}
          onChange={handleChange}
        />
        <label>Make project public?</label>
      </div>

      {/* Is Deployed */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="isDeployed"
          checked={formData.isDeployed}
          onChange={handleChange}
        />
        <label>Is Deployed?</label>
      </div>

      {/* Deployed Link (Conditional) */}
      {formData.isDeployed && (
        <div>
          <label>Deployed Link:</label>
          <input
            name="deployedLink"
            type="text"
            value={formData.deployedLink}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"
          />
        </div>
      )}

      {/* GitHub Link */}
      <div>
        <label>GitHub Link:</label>
        <input
          name="githubLink"
          type="text"
          value={formData.githubLink}
          onChange={handleChange}
          className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"
          required
        />
      </div>

      {/* Image Upload */}
      <div>
        <label>Project Image:</label>
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"
        />
      </div>

      {/* Video Link */}
      <div>
        <label>Video Link (optional):</label>
        <input
          name="videolink"
          type="text"
          value={formData.videolink}
          onChange={handleChange}
          className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white"
      >
        Submit
      </button>
    </form>
  );
}
