import React from "react";
import ConnectWalletBtn from "./ui/connect-wallet-btn";

const Hero = () => {
  return (
    <section className="bg-white ">
      <div className="h-[700px] w-full bg-white bg-dot-black/[0.25] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_90%,black)]"></div>
        <section
          id="hero"
          className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
        >
          <div className="mb-2 flex justify-center items-center gap-1">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              Swapzilla
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-textColor md:text-5xl lg:text-6xl ">
            Cross-chain, marketplace-based way of swapping.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <ConnectWalletBtn />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
