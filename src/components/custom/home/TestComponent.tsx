import '../Login/LoginComponent.scss';
import '../../../assets/theme/custom-theme.scss'
import { Timeline } from 'primereact/timeline';
import { ProgressBar } from 'primereact/progressbar';
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { FormattedMessage } from 'react-intl';
import { Steps } from 'primereact/steps'
import { Can } from '../../../abilities/Can';
import { InputText } from 'primereact/inputtext';
import FormComponent from '../../common/FormComponent';
import ProfileComponent from '../../common/ProfileComponent';
import { VETERINARIAN } from '../../../assets/resources/UserType';

const TestComponent = (props: any) => {


    const [puppyAddress, setPuppyAddress] = useState("")
    const [ownerAddress, setOwnerAddress] = useState("")
    const [vetAddress, setVetAddress] = useState("")

    const getPuppyData = () => {
        props.getPuppyData(puppyAddress)
    }

    const getOwnerData = () => {
        props.getOwnerData(ownerAddress)
    }

    const getVeterinarianData = async () => {
        await props.getVeterinarianData(vetAddress)
    }

    return (
        <div id='Login' className="background-yellow">
            <div className="container custom-container">
                <div className='row full-height justify-content-center align-items-center'>

                    <div className='col-lg-6 col-md-12 justify-content-center text-center'>
                        <div className="card p-5">
                            <div className='col-sm-12 mb-4'>
                                <div className="p-field">
                                    <h1>Registra Utente</h1>
                                    <h6>Inserisci tutti i campi</h6>
                                </div>
                            </div>

                            <FormComponent
                                json={props.OwnerJSON}
                                onChange={props.onChange}
                                data={props.data}
                            />

                            <div className='col-sm-12 mb-3'>
                                <Button label='Register Owner' onClick={() => props.onSubmitOwner()} disabled={!props.submitEnabled} />
                            </div>

                            {/* <div className='col-sm-12 mb-3'>
                                <Button label='Register Puppy' onClick={() => props.onSubmitPuppy()} disabled={!props.submitEnabled} />
                            </div> */}

                            {/* <div className='col-sm-12 mb-3'>
                                <Button label='Register Veterinarian' onClick={() => props.onSubmitVeterinarian()} disabled={!props.submitEnabled} />
                            </div> */}
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-12 justify-content-center text-center'>
                        <div className="card p-5">
                            <div className='col-sm-12 mb-4'>
                                <div className="p-field">
                                    <h1>Welcome </h1>
                                    <h6>Ottieni dati {props.account}</h6>
                                </div>
                            </div>




                            <div className='col-sm-12 mb-3'>
                                <InputText value={puppyAddress} onChange={(e: any) => setPuppyAddress(e.target.value)} />
                            </div>
                            <div className='col-sm-12 mb-3'>
                                <Button onClick={getPuppyData}>Get Puppy Data</Button>
                            </div>
                            <div className='col-sm-12 mb-3'>
                                <InputText value={ownerAddress} onChange={(e: any) => setOwnerAddress(e.target.value)} />
                            </div>
                            <div className='col-sm-12 mb-3'>
                                <Button onClick={getOwnerData}>Get Owner Data</Button>
                            </div>

                            <div className='col-sm-12 mb-3'>
                                <InputText value={vetAddress} onChange={(e: any) => setVetAddress(e.target.value)} />
                            </div>
                            <div className='col-sm-12 mb-3'>
                                <Button onClick={getVeterinarianData}>Get Veterinarian Data</Button>
                            </div>

                            {(props.showData == true) ? (
                                <div className='col-sm-12 mb-3'>
                                    <p>{props.dataGet}</p>
                                </div>
                            ) : null}

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
};

export default TestComponent;