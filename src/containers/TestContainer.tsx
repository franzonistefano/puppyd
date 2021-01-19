import React, { useEffect, useState } from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import HomeComponent from "../components/custom/home/TestComponent";
import { initBlockchain, getPuppy, getOwner, registerOwner, registerVeterinarian, registerPuppy } from "../utils/ContractUtil";
import OwnerJSON from '../assets/resources/OwnerForm.json'
import PuppyJSON from '../assets/resources/PuppyForm.json'
import VeterinarianJSON from '../assets/resources/VeterinarianForm.json'
import { FormUtil } from "../utils/FormUtil";
import { Owner, Veterinarian } from "../interface/common/ContractState";
import _ from "lodash";
import TestComponent from "../components/custom/home/TestComponent";
import { getVeterinarian, getVeterinarianData } from "../store/action/test";

const TestContainer = (props: any) => {

  //let config:any = {};
  let web3;
  //let contract; 
  const [config, setConfig] = useState({})
  //const [web3, setWeb3] = useState(undefined)
  const [contract, setContract] = useState();
  const [account, setAccount] = useState();

  const [formData, setFormData] = useState<any>({});
  const [submitEnabled, setSubmitEnabled] = useState(false)

  const [dataGet, setDataGet] = useState()
  const [showData, setShowData] = useState(false)

  useEffect(() => {

    //setFormData(FormUtil.initFormData(PuppyJSON));
    setFormData(FormUtil.initFormData(OwnerJSON));
    //setFormData(FormUtil.initFormData(VeterinarianJSON));
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

  const onSubmitOwner = () => {
    console.log("------ On Submit ------ ", formData)
    let data: any = _.mapValues(formData, 'value');
    registerOwner(config, data)
  };

  const onSubmitVeterinarian = () => {
    console.log("------ On Submit ------ ", formData)
    let data: any = _.mapValues(formData, 'value');
    console.log("----- Data ----- ", data)
    let vet:Veterinarian = {
      name: data.name,
      surname: data.surname,
      //birthDate: data.birthDate,
      //homeAddress: data.homeAddress,
      phone: data.phone,
      //town: data.town,
      //zipCode: data.zipCode,
      //country: data.country,
      fiscalCode: data.fiscalCode,
      number: data.number,
      provincia: data.provincia
    };
    console.log("----- Vet Data ----- ", vet)
      // vet.name = data.name
      // vet.surname = data.surname
      // vet.birthDate = data.birthDate
      // vet.homeAddress = data.homeAddress
      // vet.phone = data.phone
      // vet.town = data.town
      // vet.zipCode = data.zipCode
      // vet.country = data.country
      // vet.fiscalCode = data.fiscalCode
      // vet.number = data.number
      // vet.provincia = data.provincia

    registerVeterinarian(config, vet   
      // data.name,
      // data.surname,
      // data.birthDate,
      // data.homeAddress,
      // data.phone,
      // data.town,
      // data.zipCode,
      // data.country,
      // data.fiscalCode,
      // data.number,
      // data.provincia
      )
  };

  const onSubmitPuppy = () => {
    console.log("------ On Submit ------ ", formData)
    let data: any = _.mapValues(formData, 'value');
    registerPuppy(config, data)
  };

  const onChange = (event: any) => {
    console.log("[onChange] - event: ", event)
    console.log("[onChange] - formData: ", formData)
    setFormData(FormUtil.onChange(event, formData));
    setSubmitEnabled(FormUtil.isSubmitEnabled(formData));
  }

  const getPuppyData = async (puppyAddress: any) => {
    console.log("[++++++++++ PuppyAddress - Config +++++++++] - ", config, puppyAddress)
    getPuppy(config, puppyAddress).then((res: any) => {
      console.log("----- Getter -  getPuppyData ----- ", res)
      setDataGet(res)
      setShowData(true)
      console.log("----- showData Flag ----- ", showData)
    })
  }

  const getOwnerData = (ownerAddress: any) => {
    console.log("[++++++++++ ownerAddress - Config +++++++++] - ", config, ownerAddress)
    getOwner(config, ownerAddress).then((res: any) => {
      console.log("----- Getter -  getOwnerData ----- ", res)
      setDataGet(res)
      setShowData(true)
      console.log("----- showData Flag ----- ", showData)
    })
  }

  // const getVeterinarianData = async (vetAddress: any) => {
  //   console.log("[++++++++++ Veterinarian Data - Config +++++++++] - ", config, vetAddress)
  //   let res:any = await getVeterinarian(config, vetAddress)
  //   console.log("----- Getter -  getVeterinarianData ----- ", res)
  //   setDataGet(res)
  //   setShowData(true)
  //   console.log("----- showData Flag ----- ", showData, dataGet)
    
  //   // .then((res: any) => {
  //   //   console.log("----- Getter -  getVeterinarianData ----- ", res)
  //   //   setDataGet(res)
  //   //   setShowData(true)
  //   //   console.log("----- showData Flag ----- ", showData, dataGet)
  //   // })
  // }

  return (
    <TestComponent
      account={account}
      getPuppyData={(data: any) => getPuppyData(data)}
      getOwnerData={(data: any) => getOwnerData(data)}
      getVeterinarianData={(data: any) => props.getVeterinarian(config, data)}
      OwnerJSON={OwnerJSON}
      VeterinarianJSON={VeterinarianJSON}
      PuppyJSON={PuppyJSON}
      onChange={onChange}
      onSubmitOwner={onSubmitOwner}
      onSubmitVeterinarian={onSubmitVeterinarian}
      onSubmitPuppy={onSubmitPuppy}
      data={formData}
      submitEnabled={submitEnabled}
      dataGet={dataGet}
      showData={showData}
      loading={props.loading}
      veterinarian={props.veterinarian}
    />

  );

}

const mapDispatchToProps = (dispatch: any) => ({
  getVeterinarian: (config: any, data: string) => dispatch(getVeterinarian(config, data))
});


const mapStateToProps = (state: any) => ({
  loading: state.testReducer.loading,
  veterinarian: state.testReducer.veterinarian,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(injectIntl(TestContainer)));