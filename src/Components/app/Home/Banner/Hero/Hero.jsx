import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-center mt-24 md:mt-32 lg:mt-[250px]">
      <div className="text-center">
        <h1 className="font-inter text-5xl  xl:text-6xl font-extrabold italic leading-16 tracking-tighter mb-6">
          <span className="text-white">Traveling</span>{" "}
          <span className="text-red-500">Made</span>{" "}
          <span className="text-white">Easier</span>
        </h1>
        <p
          
          className="font-inter text-base font-bold leading-8 tracking-tighter text-center text-gray-200 px-3"
        >
          Discover Nepal’s endless possibilities with our intuitive and
          convenient booking platform, designed to help you find your dream
          accommodation.
        </p>
      </div>
    </section>
  );
};

export default Hero;
