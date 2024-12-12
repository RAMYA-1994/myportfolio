import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Frontend Developer skilled in building responsive, 
                user-focused web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks like React. Strong design sense with experience in Bootstrap and NextUI for seamless UI/UX. Collaborative and detail-oriented, with a passion 
                for delivering high-quality code and visually appealing, functional applications.
                </p>
              </span>
            </div>
            
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                backend developer with a strong foundation in server-side programming, database management, and API development. Proficient in JavaScript (Node.js) and Python, with hands-on experience in building RESTful APIs,
                 managing MySQL and MongoDB databases, and ensuring secure data handling.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Full stack developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
               
                   Full Stack Developer is a professional who can work on both the 
                  frontend and backend of a website or application.
                   They handle the visual design and user interface, 
                     ensuring the site looks good and is easy to use,
                     while also managing the behind-the-scenes logic, 
                 databases, and server operations that make the application function.
                  Full Stack Developers use a variety of tools and technologies 
               like HTML, CSS, JavaScript for the frontend, and languages like Python, 
                Node.js, or Java for the backend. Their ability
              to manage all parts of development makes them versatile
                 and essential for creating complete and functional software solutions.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
