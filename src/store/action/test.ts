import {
    GET_TEST, GET_VETERINARIAN, GET_OWNER, GET_PUPPY, REGISTER_VETERINARIAN, GENERAL_REQUEST
} from '../type/test'
import TestState from '../../interface/common/TestState'
import { TestApi } from '../api/TestApi'

export function GeneralRequest() {
    return { type: GENERAL_REQUEST }
}

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

        console.log('----- Config ------', config)
        console.log('----- Get Veterinarian Data ------', vetAddress)
        let response = "";

        config.contract?.methods.getVeterinarianData(vetAddress).call()
            .then((res: any) => {
                console.log("[++++++++++ Get Veterinarian Data ++++++++++++] ", res)
                dispatch(getVeterinarianData(res))
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

        console.log('----- Config ------', config)
        console.log('----- Get Owner Data ------', ownerAddress)
        let response = "";

        config.contract?.methods.getOwnerData(ownerAddress).call()
            .then((res: any) => {
                console.log("[++++++++++ Get Owner Data ++++++++++++] ", res)
                //response = res
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

        console.log('----- Config ------', config)
        console.log('----- Get Puppy ------', puppyAddress)
        let response: any = null;

        config.contract?.methods.getPuppyData(puppyAddress).call()
            .then((res: any) => {
                console.log("[++++++++++ Get Puppies ++++++++++++] ", res)
                response = res
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

export const registerVeterinarian = async (config: any, data: any) => {

    return (dispatch: any) => {

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
                console.log('----- Response Register Veterinarian ----- ', res);
                dispatch(registerVeterinarianData(res))
            })
            .catch((err: any) => {

                console.log('----- Register Owner Error ----- ', err);
            })

    }

}


export function registerPuppyData(data: any) {
    console.log("[++++++++++ Dispatch Action - Register Veterinarian Data ++++++++++++] ", data)
    return { type: REGISTER_VETERINARIAN, data }
}

export const registerPuppy = (config: any, data: any) => {

    return (dispatch: any) => {

        dispatch(GeneralRequest())
        console.log('----- Config ------', config)
        console.log('----- Register Puppy with value ----- ', data)
    
        config.contract?.methods.registerPuppy(
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
                dispatch(registerPuppyData(res))
            })
            .catch((err: any) => {
                console.log('----- Register Puppy Error ----- ', err);
            })

    }

}