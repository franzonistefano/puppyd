import { useState } from "react";
import Web3 from "web3";
import { abiContract, contractAddress } from "../assets/contract/config";
import { Owner, Puppy, Vaccine, Veterinarian } from "../interface/common/ContractState";


export const initBlockchain = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8080')
    const network = await web3.eth.net.getNetworkType();
    console.log("[++++++++++ Network +++++++++] - ", network) // should give you main if you're connected to the main network via metamask...

    //Account
    const accounts: any = await web3.eth.getAccounts()
    console.log("[++++++++++ Accounts +++++++++] - ", accounts)

    web3.eth.defaultAccount = accounts[0]
    console.log("[++++++++++ Default Account +++++++++] - ", web3.eth.defaultAccount)

    //Contract
    let contract: any = await new web3.eth.Contract(abiContract, contractAddress);
    console.log("[++++++++++ Contract +++++++++] - ", contract)
    //web3.eth.contractAddress = contract

    return { web3, accounts, contract }
}

export const registerPuppy = async (config: any, data: Puppy) => {

    console.log('----- Config ------', config)
    console.log('----- Register Puppy with value ----- ', data)

    let response = await config.contract?.methods.registerPuppy(
        1,
        1,
        //data.type,
        //data.sex,
        data.name,
        data.breed,
        data.birthDate,
        data.distinguishingMarks,
        data.microchipId,
        data.dadAddress,
        data.momAddress,
        data.ownerAddress
    ).send({ from: config.accounts[0] }) 
        .then((res: any) => {

            console.log('----- Response Register Puppy ----- ', res);
        })
        .catch((err: any) => {
            console.log('----- Register Puppy Error ----- ', err);
        })

    console.log('Response of contract call: ', response);
}

export const registerOwner = async (config: any, data: Owner) => {

    console.log('----- Config ------', config)
    console.log('----- Register Owner - Data ----- ', data)
    config.contract?.methods.registerOwner(
        //data.ownerType,
        1,
        data.name,
        data.surname,
        data.birthDate,
        data.homeAddress,
        data.phone,
        data.town,
        data.zipCode,
        data.country,
        data.fiscalCode
    ).send({ from: config.accounts[0] })
        .then((res: any) => {

            console.log('----- Response Register Owner ----- ', res);
        })
        .catch((err: any) => {
            console.log('----- Register Owner Error ----- ', err);
        })

}


export const registerVeterinarian = async (config: any, data:any) => {

    console.log('----- Config ------', config)
    console.log('----- Register Veterinarian - Data ----- ', data)
    config.contract.methods.registerVeterinarian(
        data.name,
        data.surname,
        data.birthDate,
        data.homeAddress,
        data.phone,
        data.town,
        data.zipCode,
        data.country,
        data.fiscalCode,
        data.number,
        data.provincia
    ).send({ from: config.accounts[0] }) 
        .then((res: any) => {

            console.log('----- Response Register Owner ----- ', res);
        })
        .catch((err: any) => {
            console.log('----- Register Owner Error ----- ', err);
        })

}


/****************************/
/*          GETTERS         */
/****************************/

export const getPuppy = async (config: any, puppyAddress: any) => {
    console.log('----- Config ------', config)
    console.log('----- Get Puppy ------', puppyAddress)
    let response: any = null;

    await config.contract?.methods.getPuppyData(puppyAddress).call()
        .then((res: any) => {
            console.log("[++++++++++ Get Puppies ++++++++++++] ", res)
            response = res
            //return res
        })
        .catch((err: any) => {
            console.log(err)
        })

    console.log("[++++++++++ Return Puppy ++++++++++++] ", response)
    return response;
}

export const getOwner = async (config: any, ownerAddress: any) => {
    console.log('----- Config ------', config)
    console.log('----- Get Owner Data ------', ownerAddress)
    let response = "";

    config.contract?.methods.getOwnerData(ownerAddress).call()
        .then((res: any) => {
            console.log("[++++++++++ Get Owner Data ++++++++++++] ", res)
            response = res
        })
        .catch((err: any) => {
            console.log(err)
        })

    return response;
}

export const getVeterinarian = async (config: any, vetAddress: any) => {
    console.log('----- Config ------', config)
    console.log('----- Get Veterinarian Data ------', vetAddress)
    let response = "";

    await config.contract?.methods.getVeterinarianData(vetAddress).call()
        .then((res: any) => {
            console.log("[++++++++++ Get Veterinarian Data ++++++++++++] ", res)
            response = res
            return response;
        })
        .catch((err: any) => {
            console.log(err)
        })

}


/****************************/
/*          SETTERS         */
/****************************/

export const addVaccine = (config:any, data:Vaccine) => {

    console.log('----- Config ------', config)
    console.log('----- addVaccine - Data ----- ', data)
    config.contract.methods.registerVeterinarian(
        data.puppyAddress,
        data.vaccineBatch,
        data.date,
        data.vaccineType

    ).send({ from: config.accounts[0] }) 
        .then((res: any) => {

            console.log('----- Response Register Owner ----- ', res);
        })
        .catch((err: any) => {
            console.log('----- Register Owner Error ----- ', err);
        })

}