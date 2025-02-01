import React from "react";

const ProjectCard = ({ image, title, main, vlink, repolink, repolinkBE }) => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg w-full flex flex-col justify-between h-full">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-sm text-gray-300 mt-2 flex-grow">{main}</p>
      
      {/* Buttons Container - Ensuring 3 buttons in a single line */}
      <div className="flex justify-center gap-2 mt-4 w-full">
        <a href={vlink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-600 flex-1 text-center">
          Deployed Link
        </a>
        <a href={repolink} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm hover:bg-gray-600 flex-1 text-center">
          GitHub FE
        </a>
        {repolinkBE ? (
          <a href={repolinkBE} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm hover:bg-gray-600 flex-1 text-center">
            GitHub BE
          </a>
        ) : (
          <span className="bg-gray-600 text-gray-400 px-3 py-2 rounded-md text-sm flex-1 text-center">
            No Backend
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
