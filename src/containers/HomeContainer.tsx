import React, { useEffect, useState } from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import HomeComponent from "../components/custom/home/HomeComponent";

const HomeContainer = (props: any) => {
  return <HomeComponent />;
};

const mapDispatchToProps = (dispatch: any) => ({});

export default withRouter(
  connect(null, mapDispatchToProps)(injectIntl(HomeContainer))
);
