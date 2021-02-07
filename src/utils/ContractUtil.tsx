import { useState } from "react";
import Web3 from "web3";
import { abiContract, contractAddress } from "../assets/contract/config";
import {
  Owner,
  Puppy,
  Vaccine,
  Veterinarian,
} from "../interface/common/ContractState";

const web3 = new Web3(Web3.givenProvider || "http://localhost:8080");

web3.eth.requestAccounts();

export const checkMetamaskInstallation = () => {
  if (typeof web3.eth !== "undefined") {
    console.log("MetaMask is installed!");
  }
};

export const initBlockchain = async () => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8080");
  const network = await web3.eth.net.getNetworkType();
  console.log("[++++++++++ Network +++++++++] - ", network); // should give you main if you're connected to the main network via metamask...

  web3.eth.requestAccounts();
  //Account
  const accounts: any = await web3.eth.getAccounts();
  console.log("[++++++++++ Accounts +++++++++] - ", accounts);

  web3.eth.defaultAccount = accounts[0];
  console.log(
    "[++++++++++ Default Account +++++++++] - ",
    web3.eth.defaultAccount
  );

  //Contract
  let contract: any = await new web3.eth.Contract(abiContract, contractAddress); //, {gas: 10000000});
  console.log("[++++++++++ Contract +++++++++] - ", contract);
  //web3.eth.contractAddress = contract

  return { web3, accounts, contract };
};
