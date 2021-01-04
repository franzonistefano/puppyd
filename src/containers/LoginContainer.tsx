import React, { Fragment, useEffect, useState } from "react";
import { injectIntl } from "react-intl";
import LoginForm from "../components/custom/Login/LoginComponent";
import LoginJSON from "../assets/resources/LoginForm.json"
import { startLogin } from "../store/action/auth";
import { connect } from "react-redux";
import { FormState } from "../interface/common/FormState";
import { DROPDOWN_FIELD } from "../assets/resources/FormField";
import _ from "lodash";
import log from "../configurations/LogLevel";
import { FormUtil } from "../utils/FormUtil";
import { withRouter } from "react-router-dom";


const LoginContainer = (props: any) => {
  const { history } = props;
  const [formData, setFormData] = useState<any>({});
  const [submitEnabled, setSubmitEnabled] = useState(false)

  const cities = [
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Paris', value: 'PRS' }
  ];

  useEffect(() => {

    //TODO For Test Purpose
    //Set Dropdown Options Dinamically
    _.filter(LoginJSON, ['type', DROPDOWN_FIELD]).map((field: FormState) => {
      field.options = cities;
      log.debug("[Field Options] - ", field.options)
    })

    setFormData(FormUtil.initFormData(LoginJSON));

  }, []);

  const onSubmit = () => {
    const onSuccess = () => {
      history.push({ pathname: '/home' })
    }

    console.log("-- Form Data -- ", formData)
    props.login(formData.username.value, formData.password.value, onSuccess)
  };

  const onChange = (event: any) => {
    log.debug("[onChange] - event: ", event)
    setFormData(FormUtil.onChange(event, formData));
    setSubmitEnabled(FormUtil.isSubmitEnabled(formData));
  }


  const onChangeDropdown = (event: any) => {
    setFormData(FormUtil.onChangeDropdown(event, formData));
    setSubmitEnabled(FormUtil.isSubmitEnabled(formData));
  }


  return (
    
    <LoginForm
      onChange={onChange}
      onChangeDropdown={onChangeDropdown}
      onSubmit={onSubmit}
      data={formData}
      json={LoginJSON}
      submitEnabled={submitEnabled}
    />

  );

}

const mapDispatchToProps = (dispatch: any) => ({
  login: (email: string, password: string, onSubmit: any, onFailure: any) => dispatch(startLogin(email, password, onSubmit))
})

export default withRouter(connect(null, mapDispatchToProps)(injectIntl(LoginContainer)));