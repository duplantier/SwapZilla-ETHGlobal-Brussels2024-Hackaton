import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

// 1. Your WalletConnect Cloud project ID
const projectId = "61658dfc0addfa0de74535259e960678";

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

// 3. Create a metadata object
const metadata = {
  name: "ETHGlobal Brussels 2024 Hackaton",
  description: "AppKit Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

import "./App.css";
import FAQ from "./components/Faq";
import SwapForm from "./components/SwapForm";

function App() {

  return (
    <section className="max-w-screen-lg mx-auto mt-4 rounded-lg px-4 mb-12 flex justify-between items-center ">
      <SwapForm />
      <FAQ />
    </section>
  );
}

export default App;
