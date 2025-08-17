import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center relative"
    >
      <div className="absolute inset-0"></div>

      <div className="relative max-w-3xl px-4 mt-10">
        <h1 className="font-changa flex flex-col text-4xl md:text-7xl text-gray-100 mb-10">
          ¡Bienvenidos a{" "}
          <span className="text-[#f7d7a9] font-carter mt-4">
            TechCode Solutions!
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-20">
          Desarrollo de software y soluciones tecnológicas.
        </p>
        <a
          href="#contact"
          className="bg-white px-6 py-3 rounded-full font-semibold hover:bg-[#f7d7a9] hover:scale-125 transition-all"
        >
          HAS TU COTIZACIÓN GRATIS
        </a>

        <div className="flex justify-center gap-6 mt-16 text-white text-3xl">
          <a
            className="hover:text-[#f7d7a9] hover:scale-125 transition-transform"
            href="https://www.facebook.com/profile.php?id=61578264547309"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="hover:text-[#f7d7a9] hover:scale-125 transition-transform"
            href="https://www.instagram.com/techcode.solutions/"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            className="hover:text-[#f7d7a9] hover:scale-125 transition-transform"
            href="https://www.tiktok.com/@techcode.solutions?_t=ZM-8y5lrZ6wHfM&_r=1"
            target="_blank"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
