import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import React from "react";
import ProfileComponent from "../components/common/ProfileComponent";


const ProfileContainer = (props: any) => {


    return (
        <ProfileComponent
        />
    )
}

export default withRouter(connect(null, null)(injectIntl(ProfileContainer)));