import { ethers } from "ethers";
import { useState } from "react";

import contractAddress from "../chain-info/deployments/map.json";
import contractABI from "../chain-info/contracts/MoralisGovernor.json"

export function useGetProposals() {

    const [proposalCount, setProposalCount] = useState();

    async function getProposalCount() {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = contractAddress["5"]["MoralisGovernor"][0];
            const abi = contractABI.abi;
            const GovernanceContract = new ethers.Contract(contract, abi, provider);
            const value = await GovernanceContract.getNumberOfProposals();
            setProposalCount(value.toString());
        } catch (err) {
            console.log(err);
        }
    }

    return { proposalCount, getProposalCount };

}