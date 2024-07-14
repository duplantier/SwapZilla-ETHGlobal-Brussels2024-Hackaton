import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

// 1. Your WalletConnect Cloud project ID
const projectId = "61658dfc0addfa0de74535259e960678";

// 2. Set chains
const sepolia = {
  chainId: 11155111,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia.etherscan.io",
  rpcUrl: "https://rpc.sepolia.org",
};

const base = {
  chainId: 8453,
  name: "Base",
  currency: "ETH",
  explorerUrl: "https://base.org/explorer",
  rpcUrl: "https://mainnet.base.org",
};

const scroll = {
  chainId: 534352,
  name: "Scroll",
  currency: "ETH",
  explorerUrl: "https://scroll.io/explorer",
  rpcUrl: "https://scroll.io/rpc",
};

const metadata = {
  name: "ETHGlobal Brussels 2024 Hackaton",
  description: "AppKit Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const ethersConfig = defaultConfig({
  metadata,
});

createWeb3Modal({
  ethersConfig,
  chains: [sepolia, base, scroll],
  projectId,
  enableAnalytics: true,
});

import "./App.css";
import FAQ from "./components/Faq";
import SwapForm from "./components/SwapForm";

function App() {
  return (
    <section className="max-w-screen-lg h-[100vh] mx-auto  rounded-lg px-4 flex justify-between items-center ">
      <SwapForm />
      <FAQ />
    </section>
  );
}

export default App;
