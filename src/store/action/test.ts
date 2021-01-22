import {
    GET_TEST, GET_VETERINARIAN, GET_OWNER, GET_PUPPY, REGISTER_VETERINARIAN, GENERAL_REQUEST, REGISTER_OWNER, ADD_VACCINE
} from '../type/test'
import TestState from '../../interface/common/TestState'
import { TestApi } from '../api/TestApi'
import { Owner, Puppy, Transfer, Vaccine, Veterinarian } from '../../interface/common/ContractState'
import { hideToast, showToast } from './toast'

export function getTest(test: TestState[]) {
    return { type: GET_TEST, test }
}

export function startGetPosts() {
    return (dispatch: any) => {
        TestApi.GetPosts()
            .then((response: any) => {
                if (response.status === 200)
                    return response.json()
            })
            .then((json: any) =>
                dispatch(getTest(json))
            );
    }
}

export function GeneralRequest() {
    return { type: GENERAL_REQUEST }
}

/***********************/
/*       GETTERS       */
/***********************/

// Veterinarian
export function getVeterinarianData(data: any) {
    console.log("[++++++++++ Dispatch Action - Get Veterinarian Data ++++++++++++] ", data)
    return { type: GET_VETERINARIAN, data }
}

export function getVeterinarian(config: any, vetAddress: any) {

    return (dispatch: any) => {

        dispatch(GeneralRequest())
        console.log('----- Config ------', config)
        console.log('----- Get Veterinarian Data ------', vetAddress)

        config.contract?.methods.getVeterinarianData(vetAddress).call()
            .then((res: any) => {
                let response: Veterinarian = res;
                console.log("[++++++++++ Get Veterinarian Data ++++++++++++] ", response)
                if(response.isRegistered)
                    dispatch(getVeterinarianData(response))
            })
            .catch((err: any) => {
                console.log(err)
            })
    }

}

// Owner
export function getOwnerData(data: any) {
    console.log("[++++++++++ Dispatch Action - Get Owner Data ++++++++++++] ", data)
    return { type: GET_OWNER, data }
}

export function getOwner(config: any, ownerAddress: any) {

    return (dispatch: any) => {

        dispatch(GeneralRequest())
        console.log('----- Config ------', config)
        console.log('----- Get Owner Data ------', ownerAddress)

        config.contract?.methods.getOwnerData(ownerAddress).call()
            .then((res: Owner) => {
                console.log("[++++++++++ Get Owner Data ++++++++++++] ", res)
                if(res.isRegistered)
                    dispatch(getOwnerData(res))
            })
            .catch((err: any) => {
                console.log(err)
            })

    }

}

// Puppy
export function getPuppyData(data: any) {
    console.log("[++++++++++ Dispatch Action - Get Puppy Data ++++++++++++] ", data)
    return { type: GET_PUPPY, data }
}

export function getPuppy(config: any, puppyAddress: any) {

    return (dispatch: any) => {

        dispatch(GeneralRequest())
        console.log('----- Config ------', config)
        console.log('----- Get Puppy ------', puppyAddress)

        config.contract?.methods.getPuppyData(puppyAddress).call()
            .then((res: Puppy) => {
                console.log("[++++++++++ Get Puppies ++++++++++++] ", res)
                if(res.isRegistered)
                    dispatch(getPuppyData(res))
            })
            .catch((err: any) => {
                console.log(err)
            })

    }

}

/***********************/
/*     REGISTRATION    */
/***********************/
export function registerVeterinarianData(data: any) {
    console.log("[++++++++++ Dispatch Action - Register Veterinarian Data ++++++++++++] ", data)
    return { type: REGISTER_VETERINARIAN, data }
}

export const registerVeterinarian = (config: any, data: any) => {

    return (dispatch: any) => {

        dispatch(GeneralRequest())
        console.log('----- Config ------', config)
        console.log('----- Register Veterinarian - Data ----- ', data)
        config.contract.methods.registerVeterinarian(
            data.name,
            data.surname,
            //data.birthDate,
            //data.homeAddress,
            data.phone,
            //data.town,
            //data.zipCode,
            //data.country,
            data.fiscalCode,
            data.number,
            data.provincia
        ).send({ from: config.accounts[0] })
            .then((res: any) => {
                console.log('----- Response Register Veterinarian ----- ', res);
                dispatch(registerVeterinarianData(res))
                
                let data: any
                data.message = "Registration Successful"
                data.type = "success"
                dispatch(showToast(data))
            })
            .catch((err: any) => {
                let data: any = {
                    message: "Registration Failed: ERROR " + err,
                    type: "error"
                }
                dispatch(showToast(data))
                console.log('----- Register Owner Error ----- ', err);
            })
            .finally(() => {
                dispatch(hideToast())
            })

    }

}


export function registerPuppyData(data: any) {
    console.log("[++++++++++ Dispatch Action - Register Veterinarian Data ++++++++++++] ", data)
    return { type: REGISTER_VETERINARIAN, data }
}

export const registerPuppy = (config: any, puppyType: number, puppySex: number, data: any) => {

    return (dispatch: any) => {

        dispatch(GeneralRequest())
        console.log('----- Config ------', config)
        console.log('----- Register Puppy with value ----- ', data)

        config.contract?.methods.registerPuppy(
            puppyType,
            puppySex,
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
                dispatch(registerPuppyData(res))
            })
            .catch((err: any) => {
                console.log('----- Register Puppy Error ----- ', err);
            })

    }

}

export function registerOwnerData(data: any) {
    console.log("[++++++++++ Dispatch Action - Register Owner Data ++++++++++++] ", data)
    return { type: REGISTER_OWNER, data }
}

export const registerOwner = (config: any, ownerType: number, data: any) => {

    return async (dispatch: any) => {

        let gasLimit = 7000000;
        let block = await config.web3.eth.getBlock("latest").then((block:any) => {
            console.log("-- Register Owner BLOCK --", block);
            console.log("Transactions Lenght: ", block.transactions.length)
            //gasLimit =  Math.floor(block.gasLimit/block.transactions.length);
            gasLimit = block.gasLimit;
        })
        
        // let gasLimit = config.contract.eth.getBlock("latest")
        console.log("-- Register Owner GAS LIMIT --", gasLimit);

        // let gasEstimation = await config.contract?.methods.registerOwner(
        //     ownerType,
        //     data.name,
        //     data.phone,
        //     data.town,
        //     data.fiscalCode
        // ).estimateGas().then((gasAmount: any) => {
        //     console.log("Gas estimation: ", gasAmount)
        // })
        // .catch((err:any) => {
        //     console.log("Error gas estimation: ", err)
        // });
        
        // console.log("-- Register Owner GAS ESTIMATION --", gasEstimation);

        dispatch(GeneralRequest())
        console.log('----- Config ------', config)
        console.log('----- Register Owner - Data ----- ', data)
        config.contract?.methods.registerOwner(
            //Number(data.ownerType),
            ownerType,
            data.name,
            data.surname,
            //data.birthDate,
            //data.homeAddress,
            data.phone,
            data.town,
            //data.zipCode,
            //data.country,
            data.fiscalCode
        ).send({ from: config.accounts[0]})//, gas: gasLimit  })
            .then((res: any) => {
                console.log('----- Response Register Owner ----- ', res);
                dispatch(registerOwnerData(res))
            })
            .catch((err: any) => {
                console.log('----- Register Owner Error ----- ', err);
            })

    }

}

/****************************/
/*          SETTERS         */
/****************************/

export function addVaccineData(data: any) {
    console.log("[++++++++++ Dispatch Action - add Vaccine Data ++++++++++++] ", data)
    return { type: ADD_VACCINE, data }
}

export const addVaccine = (config: any, data: Vaccine) => {

    return (dispatch: any) => {

        dispatch(GeneralRequest())
        console.log('----- Config ------', config)
        console.log('----- addVaccine - Data ----- ', data)
        config.contract.methods.addVaccine(
            data.puppyAddress,
            data.vaccineBatch,
            Number(data.date),
            data.vaccineType

        ).send({ from: config.accounts[0] })
            .then((res: any) => {
                console.log('----- Response Register Owner ----- ', res);
                dispatch(addVaccineData(res))
            })
            .catch((err: any) => {
                console.log('----- Register Owner Error ----- ', err);
            })

    }

}

export const transferPuppyOwnership = (config: any, data: Transfer) => {

    return (dispatch: any) => {

        dispatch(GeneralRequest())
        console.log('----- Config ------', config)
        console.log('----- transferPuppyOwnership - Data ----- ', data)
        config.contract.methods.transferOwner(
            data.puppyAddress,
            data.newOwner
        ).send({ from: config.accounts[0] })
            .then((res: any) => {
                console.log('----- Response transferPuppyOwnership ----- ', res);
                dispatch(addVaccineData(res))
            })
            .catch((err: any) => {
                console.log('-----transferPuppyOwnership Error ----- ', err);
            })

    }

}