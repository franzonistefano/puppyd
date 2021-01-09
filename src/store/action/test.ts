import {
    GET_TEST, GET_VETERINARIAN
} from '../type/test'
import TestState from '../../interface/common/TestState'
import { TestApi } from '../api/TestApi'

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
                //response = res
                dispatch(getVeterinarianData(res))
            })
            .catch((err: any) => {
                console.log(err)
            })
    }

}

export function getOwnerData(data: any) {
    console.log("[++++++++++ Dispatch Action - Get Owner Data ++++++++++++] ", data)
    return { type: GET_OWNER, data }
}

export const getOwner = async (config: any, ownerAddress: any) => {

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