import React, { Fragment } from "react";
import { injectIntl } from "react-intl";
import VetProfile from '../../../assets/img/vet.png'

const VetProfileComponent = (props: any) => {

    return (
        <Fragment>

            <div id='Login' className="background-primary profile">
                <div className='row justify-content-center align-items-center'>
                    <div className='col-sm-12 mb-3'>

                        <div className='row justify-content-center'>
                            <div className='col-sm-12 mb-3'>
                                <img alt="profile" src={VetProfile} className="m-2 img-circled" />
                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            <div className='col-sm-12 mb-3'>
                                <h1>Veterinarian</h1>
                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            <div className='col-sm-12 mb-3'>
                                <h2>{props.address}</h2>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-12 profile-item">
                                <h4 className="bold">Address: </h4> <p className="ml-4">{props.data.vetAddress}</p>
                            </div>
                            <div className="col-12 profile-item">
                                <h4 className="bold">Name: </h4> <p className="ml-4">{props.data.name}</p>
                            </div>
                            <div className="col-12 profile-item">
                                <h4 className="bold">Surname: </h4> <p className="ml-4">{props.data.surname}</p>
                            </div>
                            <div className="col-12 profile-item">
                                <h4 className="bold">Birthday: </h4> <p className="ml-4">{props.data.birthDate}</p>
                            </div>
                            <div className="col-12 profile-item">
                                <h4 className="bold">Phone: </h4> <p className="ml-4">{props.data.phone}</p>
                            </div>
                            <div className="col-12 profile-item">
                                <h4 className="bold">Fiscal Code: </h4> <p className="ml-4">{props.data.fiscalCode}</p>
                            </div>
                            <div className="col-12 profile-item">
                                <h4 className="bold">Number: </h4> <p className="ml-4">{props.data.number}</p>
                            </div>
                            <div className="col-12 profile-item">
                                <h4 className="bold">Provincia: </h4> <p className="ml-4">{props.data.provincia}</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default injectIntl(VetProfileComponent);