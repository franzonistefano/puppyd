import React, { useEffect, useState } from "react";
import { injectIntl } from "react-intl";
import ResetJSON from "../assets/resources/ResetForm.json"
import { connect } from "react-redux";
import _ from "lodash";
import log from "../configurations/LogLevel";
import { FormUtil } from "../utils/FormUtil";
import ResetForm from "../components/custom/Reset/ResetComponent";


const ResetContainer = (props: any) => {
  const [formData, setFormData] = useState<any>({});
  const [submitEnabled, setSubmitEnabled] = useState(false)

  useEffect(() => {
      
    setFormData(FormUtil.initFormData(ResetJSON));
    log.debug("[Init] - formData: ", formData)

  }, []);

  const onSubmit = () => {
    props.reset(formData.password.value, formData.passwordConfirm.value)
  };

  const onChange = (event: any) => {
    log.debug("[onChange] - event: ", event)
    log.debug("[onChange] - formData: ", formData)
    setFormData(FormUtil.onChange(event, formData));
    setSubmitEnabled((formData.password.value === formData.passwordConfirm.value) && FormUtil.isSubmitEnabled(formData));
  }


  return (
    <ResetForm
      onChange={onChange}
      onSubmit={onSubmit}
      data={formData}
      json={ResetJSON}
      submitEnabled={submitEnabled}
    />

  );

}

const mapDispatchToProps = (dispatch: any) => ({
    //TODO
    //reset: (password: string, passwordConfirm: string) => dispatch(resetRequest(password, passwordConfirm))
})

export default connect(null, mapDispatchToProps)(injectIntl(ResetContainer));