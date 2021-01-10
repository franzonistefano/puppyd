import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import React, { useState } from 'react';
import ProfileComponent from '../../common/ProfileComponent';
import { VETERINARIAN } from '../../../assets/resources/UserType';

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


                            {(props.loading == true) ? (
                                <div className='col-sm-12 mb-3'>
                                    <ProfileComponent
                                        type={VETERINARIAN}
                                        data={props.veterinarian}
                                    />
                                    <p>{props.veterinarian.data}</p>
                                </div>
                            ) : null}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GetterComponent;