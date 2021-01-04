import React, { useEffect, useState } from "react";
import { injectIntl } from "react-intl";
import ForgotJSON from "../assets/resources/ForgotForm.json"
import { connect } from "react-redux";
import _ from "lodash";
import log from "../configurations/LogLevel";
import { FormUtil } from "../utils/FormUtil";
import ForgotForm from "../components/custom/Forgot/ForgotComponent";


const ForgotContainer = (props: any) => {
  const [formData, setFormData] = useState<any>({});
  const [submitEnabled, setSubmitEnabled] = useState(false)

  useEffect(() => {
      
    setFormData(FormUtil.initFormData(ForgotJSON));
    log.debug("[Init] - formData: ", formData)

  }, []);

  const onSubmit = () => {
    props.forgot(formData.username.value)
  };

  const onChange = (event: any) => {
    log.debug("[onChange] - event: ", event)
    log.debug("[onChange] - formData: ", formData)
    setFormData(FormUtil.onChange(event, formData));
    setSubmitEnabled(FormUtil.isSubmitEnabled(formData));
  }


  return (
    <ForgotForm
      onChange={onChange}
      onSubmit={onSubmit}
      data={formData}
      json={ForgotJSON}
      submitEnabled={submitEnabled}
    />

  );

}

const mapDispatchToProps = (dispatch: any) => ({
    //TODO
    //forgot: (email: string) => dispatch(forgotRequest(email))
})

export default connect(null, mapDispatchToProps)(injectIntl(ForgotContainer));