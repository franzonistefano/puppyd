import { useEffect, useState } from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import GetterComponent from "../components/custom/Getter/GetterComponent";
import { getVeterinarian } from "../store/action/test";
import { initBlockchain } from "../utils/ContractUtil";
import { FormUtil } from "../utils/FormUtil";

const GetterContainer = (props: any) => {


    let web3;

    const [config, setConfig] = useState({})

    const [contract, setContract] = useState();
    const [account, setAccount] = useState();


    useEffect(() => {
    
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
    

    return (
        <GetterComponent
            account={account}
            // getPuppyData={(data: any) => getPuppyData(data)}
            // getOwnerData={(data: any) => getOwnerData(data)}
            getVeterinarian={(data: any) => props.getVeterinarian(config, data)}
            loading={props.loading}
            veterinarian={props.veterinarian}
        />
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    getVeterinarian: (config: any, data: string) => dispatch(getVeterinarian(config, data))
});


const mapStateToProps = (state: any) => ({
    loading: state.testReducer.loading,
    veterinarian: state.testReducer.veterinarian,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(injectIntl(GetterContainer)));