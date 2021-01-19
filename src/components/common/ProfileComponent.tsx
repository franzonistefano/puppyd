import _ from "lodash";
import { Fragment, useEffect } from "react";
import { ANIMAL, OWNER, VETERINARIAN } from "../../assets/resources/UserType";
import VetProfile from '../../assets/img/vet.png'
import OwnerProfile from '../../assets/img/owner.png'
import PuppyProfile from '../../assets/img/animal.png'

const ProfileComponent = (props: any) => {


    console.log("Data Profile Received: ", props.data)

    const getPuppyProfileInfo = () => {

        return (
            <Fragment>
                <div className="row justify-content-center">
                    <div className="col-12 profile-item">
                        <h4 className="bold">Address: </h4> <p className="ml-4">{props.data.petAddress}</p>
                    </div>
                    <div className="col-12 profile-item">
                        <h4 className="bold">Puppy Type: </h4> <p className="ml-4">{props.data.puppyType}</p>
                    </div>
                    <div className="col-12 profile-item">
                        <h4 className="bold">Sex: </h4> <p className="ml-4">{props.data.sex}</p>
                    </div>
                    <div className="col-12 profile-item">
                        <h4 className="bold">Name: </h4> <p className="ml-4">{props.data.name}</p>
                    </div>
                    <div className="col-12 profile-item">
                        <h4 className="bold">Breed: </h4> <p className="ml-4">{props.data.breed}</p>
                    </div>
                    <div className="col-12 profile-item">
                        <h4 className="bold">Birthday: </h4> <p className="ml-4">{props.data.birthDate}</p>
                    </div>
                    <div className="col-12 profile-item">
                        <h4 className="bold">Distinguishing Marks: </h4> <p className="ml-4">{props.data.distinguishingMarks}</p>
                    </div>
                    <div className="col-12 profile-item">
                        <h4 className="bold">Microchip: </h4> <p className="ml-4">{props.data.microchipId}</p>
                    </div>
                    <div className="col-12 profile-item">
                        <h4 className="bold">Dad: </h4> <p className="ml-4">{props.data.dad}</p>
                    </div>
                    <div className="col-12 profile-item">
                        <h4 className="bold">Mom: </h4> <p className="ml-4">{props.data.mom}</p>
                    </div>
                    <div className="col-12 profile-item">
                        <h4 className="bold">Owner Address: </h4> <p className="ml-4">{props.data.ownerAddress}</p>
                    </div>
                    <div className="col-12 profile-item">
                        <h4 className="bold">Childred: </h4> <p className="ml-4">{props.data.children}</p>
                    </div>
                    <div className="col-12 profile-item">
                        <h4 className="bold">Vaccines: </h4> <p className="ml-4">{props.data.vaccines}</p>
                    </div>
                </div>
            </Fragment>
        )
    }

    
    const getOwnerProfileInfo = () => {
        return (
            <Fragment>
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
                        <h4 className="bold">Puppies: </h4> <p className="ml-4">{props.data.puppies}</p>
                    </div>
                </div>
            </Fragment>
        )
    }

    const getVetProfileInfo = () => {

        return (
            <Fragment>
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
            </Fragment>
        )
    }


    const getProfile = (profile: string) => {

        console.log("[++++ Profile Address ++++] ", props.data.vetAddress)
        let getToCall: any = null;

        let address = '';
        let img = '';
        if (profile === VETERINARIAN) {
            img = VetProfile
            address = props.data.vetAddress
            getToCall = getVetProfileInfo();
        }
        else if (profile === OWNER) {
            img = OwnerProfile
            address = props.data.ownerAddress
            getToCall = getOwnerProfileInfo();
        }
        else {
            img = PuppyProfile
            address = props.data.puppyAddress
            getToCall = getPuppyProfileInfo();
        }


        return (
            <Fragment>
                <div className='row justify-content-center'>
                    <div className='col-sm-12 mb-3'>
                        <img alt="profile" src={img} className="m-2 img-circled" />
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-sm-12 mb-3'>
                        <h1>{profile}</h1>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-sm-12 mb-3'>
                        <h2>{address}</h2>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-sm-5 mb-3'>
                        {/* {
                            props.data.map((field: any) => {
                                console.log("Profile Field: ", field)
                                return (
                                    <div className="row justify-content-between">
                                        <h4>{field}</h4>
                                    </div>
                                )
                            })
                        } */}
                        {   
                          (() => { return getToCall })()
                        }
                    </div>
                </div>
            </Fragment>
        )
    }

    return (
        <div id='Login' className="background-primary profile">
            <div className='row justify-content-center align-items-center'>
                <div className='col-sm-12 mb-3'>

                    {
                        (() => {
                            return getProfile(props.type)
                        })()

                    }

                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;