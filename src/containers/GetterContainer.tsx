import { useEffect, useState } from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import GetterComponent from "../components/custom/Getter/GetterComponent";
import { addVaccine, getOwner, getPuppy, getVeterinarian } from "../store/action/test";
import { initBlockchain } from "../utils/ContractUtil";
import { FormUtil } from "../utils/FormUtil";
import VaccineJSON from '../assets/resources/VaccineForm.json'
import _ from "lodash";

const GetterContainer = (props: any) => {


    let web3;

    const [config, setConfig] = useState({})

    const [contract, setContract] = useState();
    const [account, setAccount] = useState();

    const [formData, setFormData] = useState<any>({});
    const [submitEnabled, setSubmitEnabled] = useState(false)


    useEffect(() => {

        setFormData(FormUtil.initFormData(VaccineJSON));
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

      const onChange = (event: any) => {
        console.log("[onChange] - event: ", event)
        console.log("[onChange] - formData: ", formData)
        setFormData(FormUtil.onChange(event, formData));
        setSubmitEnabled(FormUtil.isSubmitEnabled(formData));
      }
    

    return (
        <GetterComponent
            account={account}
            getPuppy={(data: any) => props.getPuppy(config, data)}
            getOwner={(data: any) => props.getOwner(config, data)}
            getVeterinarian={(data: any) => props.getVeterinarian(config, data)}
            loading={props.loading}
            veterinarian={props.veterinarian}
            owner={props.owner}
            puppy={props.puppy}
            getter={props.getter}
            VaccineJSON={VaccineJSON}
            data={formData}
            onChange={onChange}
            onSubmitVaccine={() => props.addVaccine(config, _.mapValues(formData, (o) => { return o.value; }))}
        />
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    getVeterinarian: (config: any, data: string) => dispatch(getVeterinarian(config, data)),
    getOwner: (config: any, data: string) => dispatch(getOwner(config, data)),
    getPuppy: (config: any, data: string) => dispatch(getPuppy(config, data)),
    addVaccine: (config: any, data: any) => dispatch(addVaccine(config, data))
});


const mapStateToProps = (state: any) => ({
    loading: state.testReducer.loading,
    veterinarian: state.testReducer.veterinarian,
    owner: state.testReducer.owner,
    puppy: state.testReducer.puppy,
    getter: state.testReducer.getter,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(injectIntl(GetterContainer)));