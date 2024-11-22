"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-16 px-8">
      <div>
        <p className="lg:text-2xl font-semibold lg:mb-10 mb-4">
          {`These are the most recent projects I've worked on, however I've worked on many throughout the years. Please get in touch with me if something catches your attention.`}
        </p>
      </div>
      <h2 className="text-4xl font-bold text-yellow-500 mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="block transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center p-4">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
