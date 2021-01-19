import { useEffect, useState } from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RegisterComponent from "../components/custom/Register/RegisterComponent";
import { FormUtil } from "../utils/FormUtil";
import OwnerJSON from '../assets/resources/OwnerForm.json'
import PuppyJSON from '../assets/resources/PuppyForm.json'
import VeterinarianJSON from '../assets/resources/VeterinarianForm.json'
import { initBlockchain } from "../utils/ContractUtil";
import { registerOwner, registerPuppy, registerVeterinarian } from "../store/action/test";
import _ from "lodash";


const RegisterContainer = (props: any) => {


    let web3;

    const [config, setConfig] = useState({})

    const [contract, setContract] = useState();
    const [account, setAccount] = useState();

    const [formData, setFormData] = useState<any>({});
    const [submitEnabled, setSubmitEnabled] = useState(false)

    const [dataGet, setDataGet] = useState()
    const [showData, setShowData] = useState(false)

    useEffect(() => {

        setFormData(FormUtil.initFormData(VeterinarianJSON));
        console.log("[Init] - formData: ", formData)

        initBlockchain().then(res => {

            console.log("[++++++++++ Blockchain Initialized +++++++++] - ", res)

            //config = res;
            web3 = res.web3;
            setConfig(res)
            setContract(res.contract)
            setAccount(res.accounts[0])

            console.log("[++++++++++ Homepage - Config +++++++++] - ", config)
            console.log("[++++++++++ Homepage - Web3 +++++++++] - ", web3)
            console.log("[++++++++++ Homepage - Contract +++++++++] - ", contract)
            console.log("[++++++++++ Homepage - Account +++++++++] - ", account)

        })

    }, [account])

    const changeIndex = (index: any) => {
        console.log("[+++ Change Index +++] ", index)

        switch (index) {
            case 0:
                setFormData(FormUtil.initFormData(VeterinarianJSON));
                break;
            case 1:
                setFormData(FormUtil.initFormData(OwnerJSON));
                break;
            case 2:
                setFormData(FormUtil.initFormData(PuppyJSON));
                break;
            default:
                break;
        }
    }

    const onChange = (event: any) => {
        console.log("[onChange] - event: ", event)
        console.log("[onChange] - formData: ", formData)
        setFormData(FormUtil.onChange(event, formData));
        setSubmitEnabled(FormUtil.isSubmitEnabled(formData));
      }

    return (
        <RegisterComponent
            changeIndex={(e: any) => changeIndex(e)}
            onChange={onChange}
            data={formData}
            submitEnabled={submitEnabled}
            OwnerJSON={OwnerJSON}
            VeterinarianJSON={VeterinarianJSON}
            PuppyJSON={PuppyJSON}
            onSubmitVeterinarian={() => props.registerVeterinarian(config, _.mapValues(formData, (o) => { return o.value; }))}
            onSubmitPuppy={(puppyType: number, puppySex: number) => props.registerPuppy(config, puppyType, puppySex, _.mapValues(formData, (o) => { return o.value; }))}
            onSubmitOwner={(ownerType: number) => props.registerOwner(config, ownerType,  _.mapValues(formData, (o) => { return o.value; }))}
        />
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    //getVeterinarian: (config: any, data: string) => dispatch(getVeterinarian(config, data))
    registerVeterinarian: (config: any, data: string) => dispatch(registerVeterinarian(config, data)),
    registerPuppy: (config: any, puppyType: number, puppySex: number, data: string) => dispatch(registerPuppy(config, puppyType, puppySex, data)),
    registerOwner: (config: any, ownerType: number, data: string) => dispatch(registerOwner(config, ownerType, data)),
});


const mapStateToProps = (state: any) => ({
    loading: state.testReducer.loading,
    veterinarian: state.testReducer.veterinarian,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(injectIntl(RegisterContainer)));