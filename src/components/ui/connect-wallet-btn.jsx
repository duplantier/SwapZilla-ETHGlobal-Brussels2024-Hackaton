import React from "react";

const ConnectWalletButton = () => {
  return (
    <button className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg " />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200  text-white hover:bg-transparent">
        Connect Your Wallet
      </div>
    </button>
  );
};

export default ConnectWalletButton;
