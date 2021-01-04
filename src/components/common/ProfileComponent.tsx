import _ from "lodash";
import { Fragment, useEffect } from "react";
import { ANIMAL, OWNER, VETERINARIAN } from "../../assets/resources/UserType";
import VetProfile from '../../assets/img/vet.png'

const ProfileComponent = (props: any) => {

    const getVeterinarianComponent = () => {

console.log("[++++ Profile Address ++++] ", props.data.address)

        return (
            <Fragment>
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
                        <h4>{props.data[0]}</h4>
                    </div>
                </div>

                <div className='row justify-content-start'>
                    <div className='col-sm-12 mb-3'>
                        <ul>
                            {
                                props.data.map((field: any) => {
                                    return (
                                        <li>
                                            {field}
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>


            </Fragment>
        )
    }

    const getAnimalComponent = () => {
        return (
            <Fragment>
                Animal
            </Fragment>
        )
    }

    const getOwnerComponent = () => {
        return (
            <Fragment>
                Owner
            </Fragment>
        )
    }

    const getProfile = () => {
        switch (props.type) {
            case VETERINARIAN:
                return getVeterinarianComponent();
                break;
            case ANIMAL:
                return getAnimalComponent();
                break;
            case OWNER:
                return getOwnerComponent();
                break;
            default:
                break;
        }

    }



    return (
        <div id='Login' className="background-primary profile">
            <div className="container custom-container">
                <div className='row full-height justify-content-center align-items-center'>
                    <div className='col-sm-12 mb-3'>

                        {
                            (() => {
                                return getProfile()
                            })()

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;