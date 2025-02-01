import React from "react";
import ProjectCard from "./ProjectCard";
import bannerImg1 from "../../assets/2016_08_02_9267_1470132061._large.jpg";
import bannerImg2 from "../../assets/original-0441209f42c4e1866c8182388a0044e8.webp";
import bannerImg3 from "../../assets/dashboard-design-example-hcare.png";
import bannerImg4 from "../../assets/cf95a4a7cdfe0b94043ea65779427a7b1df36ee9-1440x835.webp";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>

      {/* Using Grid Layout */}
      <div className="py-12 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <ProjectCard
          image={bannerImg1}
          title="Airbnb Clone"
          main="A full-stack MERN application that allows users to explore rental properties, book accommodations, and manage reservations. It includes user authentication using JWT, secure password hashing with bcrypt, and a MongoDB database for storing listings and bookings.."
          vlink="https://airbnbclone-gamma.vercel.app/"
          repolink="https://github.com/RAMYA-1994/airbnbclone-frontend"
          repolinkBE="https://github.com/RAMYA-1994/airbnbclone-backend"
        />

        <ProjectCard
          image={bannerImg2}
          title="Dash Board"
          main="A MERN stack-based admin dashboard with role-based authentication using JWT, data visualization, and CRUD operations. It helps businesses manage and track key metrics, using MongoDB as the database and Express.js for API handling.killed in creating responsive, high-performance landing pages using HTML, CSS, JavaScript, and frameworks like React and Next.js."
          vlink="https://landingpage-sable-six.vercel.app/"
          repolink="https://github.com/RAMYA-1994/landingpage"
          repolinkBE="" // No backend repo
        />

        <ProjectCard
          image={bannerImg3}
          title="Task Managemnt app"
          main=" A dynamic task management application that helps users create, assign, and track tasks efficiently. Features include priority setting, deadlines, and analytics.It features JWT authentication, password hashing with bcrypt, and an intuitive React UI for managing tasks efficiently."
          vlink="https://price-card-task-six.vercel.app/"
          repolink="https://github.com/RAMYA-1994/price-card-task"
          repolinkBE="" // No backend repo
        />

        <ProjectCard
          image={bannerImg4} 
          title="Weather App"
          main="A full-stack weather forecasting application that provides real-time weather updates. Includes user authentication, personalized location tracking, and an interactive UI. full-stack e-commerce platform with product listings, user authentication, cart functionality, and payment integration using Stripe."
          vlink="https://ecommerce-demo.vercel.app/"
          repolink="https://github.com/RAMYA-1994/ecommerce-frontend"
          repolinkBE="https://github.com/RAMYA-1994/ecommerce-backend"
        />
      </div>
    </div>
  );
};

export default Projects;
