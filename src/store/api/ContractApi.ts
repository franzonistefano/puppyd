import { Api } from '../Api'

export class ContractApi {
    static BASE_ENDP: string = '/user'

    static GetPosts = () => {
        return Api.Get(ContractApi.BASE_ENDP)
    }

    
}
