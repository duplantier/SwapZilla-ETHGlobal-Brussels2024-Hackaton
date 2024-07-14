import React, { useEffect } from "react";
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
import {
  useWeb3ModalAccount,
  useWeb3ModalState,
} from "@web3modal/ethers5/react";

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
  //---FORM DATA---
  const [originChain, setOriginChain] = useState("");
  const [targetChain, setTargetChain] = useState("");
  const [deadline, setDeadline] = useState("");
  const [amount, setAmount] = useState(0);
  const { selectedNetworkId } = useWeb3ModalState();
  //---FORM DATA---

  const { address, isConnecting, isDisconnected, isConnected } =
    useWeb3ModalAccount();

  function isInteger(value) {
    return Number.isInteger(value);
  }

  // Form submit
  function handleSubmit() {
    console.log();
  }

  useEffect(() => {
    setOriginChain(selectedNetworkId);
  }, [selectedNetworkId]);
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
          <div className="rounded-lg border px-4 py-2 bg-textColor">
            <w3m-network-button />
          </div>
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="originChain">🎯 Target Chain</Label>
          <Select onValueChange={setTargetChain}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Target Chain" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={11155111}>Sepolia</SelectItem>
              <SelectItem value={8453}>Base</SelectItem>
              <SelectItem value={534352}>Scroll</SelectItem>
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
              <SelectItem value={300}>5 Min.</SelectItem>
              <SelectItem value={600}>10 Min.</SelectItem>
              <SelectItem value={900}>15 Min.</SelectItem>
            </SelectContent>
          </Select>
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="originChain">🟡 ETH Amount</Label>
          <input
            type="number"
            defaultValue={1}
            onChange={(e) => setAmount(+e.target.value)}
            className="rounded-lg active:border-brand-500 border-2 w-full h-10 text-xl px-4 border-brand-400 focus:border-brand-primary focus:ring-brand-primary"
          />

          <span className="text-sm font-thin">
            {!amount > 0 && isInteger(amount)
              ? "ETH Amount must be postive float."
              : null}
          </span>
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn hover:border-primary bg-gray-50 block w-full text-textColor shadow-input rounded-md h-10 font-medium border-secondary border"
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
