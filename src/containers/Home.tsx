import React, { Fragment, useRef, useState } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Link, withRouter } from "react-router-dom";
import log from "../configurations/LogLevel";
import { Steps } from "primereact/steps";
import { Toast } from "primereact/toast";
import { connect } from "react-redux";
import { Button } from "primereact/button";
import { startGetPosts } from "../store/action/contract";
import { logOut, startLogout } from "../store/action/auth";

const Home = (props: any) => {
  const { intl, history } = props;

  const logout = () => {
    props.logout();
  };
  return (
    <Fragment>
      <p>HOME</p>
      <Button onClick={() => logout()}>Logout</Button>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(startLogout()),
});

export default withRouter(connect(null, mapDispatchToProps)(injectIntl(Home)));
