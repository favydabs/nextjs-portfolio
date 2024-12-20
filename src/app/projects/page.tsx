"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  counter,
  quizApp,
  snip1,
  youtubeClone,
  bankApp,
  todo,
  pacman,
  // wogaa,
} from "@/src/app/components/Images";

const projects = [
  // {
  //   image: wogaa,
  //   title: "WOGAA",
  //   description: "Word of God Abundant Assembly. ",
  //   demo: "https://wogaa.org",
  // },
  {
    image: counter,
    title: "Passenger-Counter-App",
    description:
      "This application is designed to streamline the process of tracking passenger numbers. It offers solutions associated with manual counting methods.",
    demo: "https://boisterous-caramel-06d791.netlify.app",
  },
  {
    image: quizApp,
    title: "Quiz-App",
    description:
      "This application is designed to provide users with an interactive quiz experience. It presents users with a series of questions related to JavaScript programming.",
    demo: "https://favydabs.github.io/Quiz-App/",
  },
  {
    image: snip1,
    title: "Ecommerce-Web-App",
    description:
      "The Ecommerce Web App is a fully-functional online platform designed to facilitate buying and selling of products or services over the internet.",
    demo: "https://favydabs.github.io/Ecommerce-Web-App/",
  },
  {
    image: youtubeClone,
    title: "YouTube Clone",
    description:
      "This is a simplified version of YouTube, replicating some of its core functionalities. It serves as an educational tool for those interested in learning.",
    demo: "https://deft-smakager-197191.netlify.app",
  },
  {
    image: bankApp,
    title: "Bank-Landing-Page",
    description:
      "The bank app is crafted to provide users with a seamless and secure banking experience. With a clean and intuitive interface.",
    demo: "https://favydabs.github.io/Bank-landing-page/",
  },
  {
    image: todo,
    title: "To-Do-List-App",
    description:
      "To-Do List App helps you manage your daily activities. The app makes it easy to create, prioritize, and track your to-do items with just a few taps.",
    demo: "https://favydabs.github.io/to-do-list-web2acx/",
  },
  {
    image: pacman,
    title: "Pacman (using arrow keys)",
    description:
      "In this game, the objective is to eat all the dots (pellets) while avoiding four ghosts.",
    demo: "https://favydabs.github.io/Pac-man_Game/",
  },
];

const Projects = () => {
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
              className="block transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-xl bg-gray-100 text-black"
            >
              <div className="relative overflow-hidden ">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="transition-transform duration-300 group-hover:scale-110 rounded-t-xl"
                />
                <div className="absolute inset-0 bg-[#000] bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white font-semibold text-center p-4">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-md">{project.description}</p>
                </div>
              </div>
              <h3 className=" lg:px-8 px-4 mt-2  text-xl font-semibold ">
                {project.title}
              </h3>
              <p className=" lg:px-8  px-4 py-4 ">{project.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
