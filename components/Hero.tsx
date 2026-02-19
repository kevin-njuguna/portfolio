import { ChevronDown } from "lucide-react";
import { FileText } from "lucide-react";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col  justify-center text-center"
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-20">
        Kevin Njuguna
      </h1>
      <h2 className="text-gray-400 text-2xl mb-8 font-bold">
        Full Stack Software Engineer
      </h2>
      <p className="text-gray-500  mb-12 font-semibold">
        I build scalable web applications and backend systems with modern
        technologies.
      </p>

      <button className="flex w-fit border gap-1 border-green-700 text-green-700  px-6 py-2 rounded-xl hover:bg-green-700 hover:text-black transition mx-auto cursor-pointer mb-30">
        <FileText />
        View CV
      </button>
      <a href="#projects">
        <button className="cursor-pointer w-fit mx-auto group">
          <p className="text-gray-500 font-semibold text-[.7rem]  group-hover:text-green-500">
            VIEW MY WORK
          </p>
          <ChevronDown className="mx-auto mt-4 text-gray-500 animate-bounce group-hover:text-green-500" />
        </button>
      </a>
    </section>
  );
};

export default Hero;
