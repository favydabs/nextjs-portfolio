import Link from "next/link";
import email from "../public/assets/email.png";
import X from "../public/assets/X.png";
import linkedin from "../public/assets/linkedin.png";
import Image from "next/image";
const About = () => {
  return (
    <div className="md:mt-40 mt-10 max-w-2xl mx-auto px-4">
      <h3 className="text-2xl lg:text-4xl font-bold text-center mb-4 text-yellow-500">
        {`  I'M DABIT FAVOUR`}
      </h3>
      <p className=" mb-10 md:text-lg">
        {`  I'm a frontend developer with a solid foundation in software engineering. Graduating from ALX Software Engineering has equipped me
        with a strong skill set and a deep understanding of frontend development
        principles. My journey doesn't stop there. I'm also a proud graduate of
        Web3Bridge, further specializing in web2 advance. With a keen eye for
        design and a knack for crafting engaging user experiences. Whether it's
        building responsive websites, optimizing user interfaces. I'm always
        eager to tackle new challenges and push the boundaries of what's
        possible in frontend development.`}
      </p>

      <div className="flex justify-start space-x-8 lg:mb-20 md:mb-48 mb-10">
        <Link
          href="https://x.com/Favydabs?t=77N5famP4ylD-wU_Dmcn_g&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <Image src={X} alt="" width={30} className="rounded-full" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/dabit-favour-297b11250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <Image src={linkedin} alt="" width={30} className="rounded-full" />
        </Link>

        <Link
          href="mailto:favourdabit@gmail.com"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <Image src={email} alt="" width={30} className="rounded-full" />
        </Link>
      </div>
    </div>
  );
};

export default About;
