import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import React, { Fragment, useState } from 'react';
import ProfileComponent from '../../common/ProfileComponent';
import { ANIMAL, OWNER, VETERINARIAN } from '../../../assets/resources/UserType';
import FormComponent from '../../common/FormComponent';

const GetterComponent = (props: any) => {

    const [address, setAddress] = useState("")

    const getPuppyData = () => {
        props.getPuppy(address)
    }

    const getOwnerData = () => {
        props.getOwner(address)
    }

    const getVeterinarianData = () => {
        props.getVeterinarian(address)
    }

    const getVeterinarianProfile = () => {
        return (
            <Fragment>
                <ProfileComponent
                    type={VETERINARIAN}
                    data={props.veterinarian}
                />
                <div className="row justify-content-center">
                    <div className='col-lg-8 col-md-12 justify-content-center text-center'>

                        <div className="card p-5">
                            <div className='col-sm-12 mb-4'>
                                <div className="p-field">
                                    <h1>Aggiungi Vaccino</h1>
                                </div>
                            </div>

                            <FormComponent
                                json={props.VaccineJSON}
                                onChange={props.onChange}
                                data={props.data}
                            />

                            <div className='col-sm-12 mb-3'>
                                <Button label='Add Vaccine' onClick={() => props.onSubmitVaccine()} />
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    const getOwnerProfile = () => {
        return (
            <ProfileComponent
                type={OWNER}
                data={props.owner}
            />
        )
    }

    const getPuppyProfile = () => {
        return (
            <ProfileComponent
                type={ANIMAL}
                data={props.puppy}
            />
        )
    }

    const getData = () => {
        if (props.loading == false) {

            switch (props.getter) {
                case VETERINARIAN:
                    return getVeterinarianProfile();
                    break;
                case OWNER:
                    return getOwnerProfile();
                    break;
                case ANIMAL:
                    return getPuppyProfile();
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <div id='Login' className="background-primary">
            <div className="container custom-container">
                <div className='row full-height justify-content-center align-items-center'>


                    <div className='col-lg-10 col-md-12 justify-content-center text-center'>
                        <div className="card p-5">

                            <div className='col-sm-12 mb-4'>
                                <div className="p-field">
                                    <h1>Ottieni dati</h1>
                                </div>
                            </div>

                            <div className='col-sm-12 mb-4'>
                                <div className="p-field">
                                    <h4>{props.account}</h4>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className='col-sm-12 mb-3'>
                                    <InputText value={address} onChange={(e: any) => setAddress(e.target.value)} />
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className='col-lg-4 col-sm-12 mb-3'>
                                    <Button onClick={getPuppyData}>Get Puppy Data</Button>
                                </div>
                                <div className='col-lg-4 col-sm-12 mb-3'>
                                    <Button onClick={getOwnerData}>Get Owner Data</Button>
                                </div>
                                <div className='col-lg-4 col-sm-12 mb-3'>
                                    <Button onClick={getVeterinarianData}>Get Veterinarian Data</Button>
                                </div>
                            </div>


                            { }

                        </div>
                    </div>

                </div>

                <div className='row full-height justify-content-center align-items-center m-4'>
                    <div className="col-12 justify-content-center text-center">

                        {(props.loading == false) ?
                            <div className='col-sm-12 mb-3'>
                                {(() => { return getData() })()}
                            </div>
                            :
                            null
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GetterComponent;