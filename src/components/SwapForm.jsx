import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-20 bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const SwapForm = ({ isWalletConnected, walletAddress }) => {
  const [originChain, setOriginChain] = useState("");
  const [targetChain, setTargetChain] = useState("");
  const [deadline, setDeadline] = useState("");
  const [purchasedTokenNumber, setPurchasedTokenNumber] = useState(0);
  const {
    address: userWalletAddress,
    isConnecting,
    isDisconnected,
    isConnected,
  } = useWeb3ModalAccount();
  function isInteger(value) {
    return Number.isInteger(value);
  }

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <div className="  rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white ">
      <h2 className="font-bold text-xl text-neutral-800">Get Started</h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 mb-6">
        Start swapping cross-chain in a few simple steps.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Otomatik olarak aktif chain'den gelecek. */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="originChain">📍 Origin Chain</Label>
          <Select onValueChange={setOriginChain}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Origin Chain" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Sepolia">Sepolia</SelectItem>
              <SelectItem value="Base">Base</SelectItem>
              <SelectItem value="Scroll">Scroll</SelectItem>
            </SelectContent>
          </Select>
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="originChain">🎯 Target Chain</Label>
          <Select onValueChange={setTargetChain}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Target Chain" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Sepolia">Sepolia</SelectItem>
              <SelectItem value="Base">Base</SelectItem>
              <SelectItem value="Scroll">Scroll</SelectItem>
            </SelectContent>
          </Select>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="originChain">⏰ Deadline</Label>
          <Select onValueChange={setDeadline}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Deadline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5min">5 Min.</SelectItem>
              <SelectItem value="10min">10 Min.</SelectItem>
              <SelectItem value="15min">15 Min.</SelectItem>
            </SelectContent>
          </Select>
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="originChain">🟡 ETH Amount</Label>
          <input
            name="tokenNumber"
            type="number"
            defaultValue={1}
            onChange={(e) => setPurchasedTokenNumber(+e.target.value)}
            className="rounded-lg active:border-brand-500 border-2 w-full h-10 text-xl px-4 border-brand-400 focus:border-brand-primary focus:ring-brand-primary"
          />

          <span className="text-sm font-thin">
            {!purchasedTokenNumber > 0 && isInteger(purchasedTokenNumber)
              ? "ETH Amount must be postive float."
              : null}
          </span>
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn   bg-gray-50 block w-full text-textColor shadow-input rounded-md h-10 font-medium ]"
          type="submit"
          disabled={!isConnected}
        >
          Send
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

export default SwapForm;
