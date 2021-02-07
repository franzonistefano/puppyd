import React, { Fragment } from "react";
import { injectIntl } from "react-intl";
import OwnerProfile from '../../../assets/img/owner.png'

const UserProfileComponent = (props: any) => {

    return (
        <Fragment>

            <div id='Login' className="background-primary profile">
                <div className='row justify-content-center align-items-center'>
                    <div className='col-sm-12 mb-3'>

                        <div className='row justify-content-center'>
                            <div className='col-sm-12 mb-3'>
                                <img alt="profile" src={OwnerProfile} className="m-2 img-circled" />
                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            <div className='col-sm-12 mb-3'>
                                <h1>Owner</h1>
                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            <div className='col-sm-12 mb-3'>
                                <h2>{props.address}</h2>
                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            <div className='col-sm-5 mb-3'>

                                <div className="row justify-content-center">
                                    <div className="col-12 profile-item">
                                        <h4 className="bold">Address: </h4> <p className="ml-4">{props.data.ownerAddress}</p>
                                    </div>
                                    <div className="col-12 profile-item">
                                        <h4 className="bold">Owner Type: </h4> <p className="ml-4">{props.data.ownerType}</p>
                                    </div>
                                    <div className="col-12 profile-item">
                                        <h4 className="bold">Name: </h4> <p className="ml-4">{props.data.name}</p>
                                    </div>
                                    <div className="col-12 profile-item">
                                        <h4 className="bold">Phone: </h4> <p className="ml-4">{props.data.phone}</p>
                                    </div>
                                    <div className="col-12 profile-item">
                                        <h4 className="bold">Town: </h4> <p className="ml-4">{props.data.town}</p>
                                    </div>
                                    <div className="col-12 profile-item">
                                        <h4 className="bold">Fiscal Code: </h4> <p className="ml-4">{props.data.fiscalCode}</p>
                                    </div>
                                    <div className="col-12 profile-item">
                                        <h4 className="bold">Puppies: </h4>
                                        <ul>
                                            {props.data.puppies.map((puppy: string) => {
                                                return (<li>{puppy}</li>)
                                            })
                                            }
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default injectIntl(UserProfileComponent);