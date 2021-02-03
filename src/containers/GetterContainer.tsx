import { useEffect, useState } from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import GetterComponent from "../components/custom/Getter/GetterComponent";
import { addVaccine, getOwner, getPuppy, getVeterinarian, transferPuppyOwnership } from "../store/action/test";
import { initBlockchain } from "../utils/ContractUtil";
import { FormUtil } from "../utils/FormUtil";
import VaccineJSON from '../assets/resources/VaccineForm.json'
import TransferOwnershipJSON from '../assets/resources/TransferOwnershipForm.json'
import _ from "lodash";
import Web3 from "web3";

const GetterContainer = (props: any) => {


  let web3: Web3;

  const [config, setConfig] = useState({})

  const [contract, setContract] = useState();
  const [account, setAccount] = useState();

  const [formData, setFormData] = useState<any>({});
  const [submitEnabled, setSubmitEnabled] = useState(false)

  const [transferOwnershipFormData, setTransferOwnershipFormData] = useState<any>({});


  useEffect(() => {

    setFormData(FormUtil.initFormData(VaccineJSON));
    console.log("[Init] - formData: ", formData)

    setTransferOwnershipFormData(FormUtil.initFormData(TransferOwnershipJSON));
    console.log("[++++ Init +++++] - transferOwnershipFormData: ", transferOwnershipFormData)

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

    //web3.currentProvider?.publicConfigStore.on('update', () => {window.location.reload();});

  }, [account])

  const onChange = (form: any, event: any) => {
    console.log("[onChange] - event: ", event)
    console.log("[onChange] - formData: ", form)
    setFormData(FormUtil.onChange(event, form));
    setSubmitEnabled(FormUtil.isSubmitEnabled(form));
  }


  return (
    <GetterComponent
      toast={props.toast}
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
      onChange={(e: any) => onChange(formData, e)}
      transferOwnershipFormData={transferOwnershipFormData}
      onChangeOwnershipForm={(e: any) => onChange(transferOwnershipFormData, e)}
      TransferOwnershipJSON={TransferOwnershipJSON}
      onSubmitVaccine={() => props.addVaccine(config, _.mapValues(formData, (o) => { return o.value; }))}
      transferPuppyOwnership={() => props.transferPuppyOwnership(config, _.mapValues(transferOwnershipFormData, (o) => { return o.value; }))}
    />
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  getVeterinarian: (config: any, data: string) => dispatch(getVeterinarian(config, data)),
  getOwner: (config: any, data: string) => dispatch(getOwner(config, data)),
  getPuppy: (config: any, data: string) => dispatch(getPuppy(config, data)),
  addVaccine: (config: any, data: any) => dispatch(addVaccine(config, data)),
  transferPuppyOwnership: (config: any, data: any) => dispatch(transferPuppyOwnership(config, data))
});


const mapStateToProps = (state: any) => ({
  loading: state.testReducer.loading,
  veterinarian: state.testReducer.veterinarian,
  owner: state.testReducer.owner,
  puppy: state.testReducer.puppy,
  getter: state.testReducer.getter,
  toast: state.toastReducer
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(injectIntl(GetterContainer)));