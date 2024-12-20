import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t  py-4 px-6 text-gray-600 dark:text-gray-400">
      <div className="md:flex justify-between items-center  ">
        <div className=" space-x-4 ">
          <Link href="/projects">
            <span className="hover:text-black dark:hover:text-white">
              Projects
            </span>
          </Link>
          <Link href="/about">
            <span className="hover:text-black dark:hover:text-white">
              About
            </span>
          </Link>
        </div>
        <p className="text-sm md:mt-0 mt-2">
          &copy; {new Date().getFullYear()} Dabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
