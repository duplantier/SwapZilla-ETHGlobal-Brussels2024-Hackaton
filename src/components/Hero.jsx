import React from "react";
import ConnectWalletBtn from "./ui/connect-wallet-btn";
const Hero = () => {
  return (
    <section className=" h-[100vh] w-[100] bg-mainWhite bg-dot-black/[0.2] relative flex flex-col items-center justify-center mx-auto">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-mainWhite [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
      <section
        id="hero"
        className="mx-auto max-w-screen-xl text-center  "
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
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <ConnectWalletBtn />
      </section>
    </section>
  );
};

export default Hero;
