import _ from "lodash";
import { Fragment, useEffect } from "react";
import { ANIMAL, OWNER, VETERINARIAN } from "../../assets/resources/UserType";
import VetProfile from '../../assets/img/vet.png'
import OwnerProfile from '../../assets/img/owner.png'
import PuppyProfile from '../../assets/img/animal.png'

const ProfileComponent = (props: any) => {

    const getProfile = (profile: string) => {

        console.log("[++++ Profile Address ++++] ", props.data.vetAddress)

        let address = '';
        let img = '';
        if(profile === VETERINARIAN){
            img = VetProfile
            address = props.data.vetAddress
        }
        else if (profile === OWNER){
            img = OwnerProfile
            address = props.data.ownerAddress
        }
        else{
            img = PuppyProfile
            address = props.data.puppyAddress
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
                        <h4>{address}</h4>
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

    return (
        <div id='Login' className="background-primary profile">
            <div className="container custom-container">
                <div className='row full-height justify-content-center align-items-center'>
                    <div className='col-sm-12 mb-3'>

                        {
                            (() => {
                                return getProfile(props.type)
                            })()

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;