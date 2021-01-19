
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { TabView, TabPanel } from 'primereact/tabview';
import React, { useState } from 'react';
import FormComponent from '../../common/FormComponent';
import '../Login/LoginComponent.scss';


export const PRIVATE_USER: number = 0;
export const ASSOCIATION_USER: number = 1;

export const MALE: number = 0;
export const FEMALE: number = 1;

export const DOG: number = 0;
export const CAT: number = 1;
export const RABBIT: number = 2;


const RegisterComponent = (props: any) => {

    const [activeIndex, setActiveIndex] = useState(0);
    //Owner Registration
    const [ownerType, setOwnerType] = useState<number>();

    //Puppy Registration
    const [puppyType, setPuppyType] = useState<number>();
    const [puppySex, setPuppySex] = useState<number>();

    const changeActiveIndex = (index: any) => {
        setActiveIndex(index);
        props.changeIndex(index)
    }

    const submitOwnerRegistration = () => {
        props.onSubmitOwner(ownerType)
    }

    const submitPuppyRegistration = () => {
        props.onSubmitPuppy(puppyType, puppySex)
    }

    return (
        <div id='Login' className="background-primary">


            <TabView activeIndex={activeIndex} onTabChange={(e: any) => changeActiveIndex(e.index)}>
                <TabPanel header="Veterinario">

                    <div className="background-primary">
                        <div className="container custom-container">
                            <div className='row full-height justify-content-center align-items-center'>
                                <div className='col-lg-8 col-md-12 justify-content-center text-center'>

                                    <div className="card p-5">
                                        <div className='col-sm-12 mb-4'>
                                            <div className="p-field">
                                                <h1>Registrati come Veteriario</h1>
                                            </div>
                                        </div>

                                        <FormComponent
                                            json={props.VeterinarianJSON}
                                            onChange={props.onChange}
                                            data={props.data}
                                        />

                                        <div className='col-sm-12 mb-3'>
                                            <Button label='Register Veterinarian' onClick={() => props.onSubmitVeterinarian()} disabled={!props.submitEnabled} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel header="Proprietario">

                    <div className="background-primary">
                        <div className="container custom-container">
                            <div className='row full-height justify-content-center align-items-center'>
                                <div className='col-lg-8 col-md-12 justify-content-center text-center'>

                                    <div className="card p-5">
                                        <div className="row">
                                            <div className='col-sm-12 mb-4'>
                                                <div className="p-field">
                                                    <h1>Registrati come Proprietario</h1>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 mb-3 text-right">
                                                <div className="p-field-checkbox">
                                                    <Checkbox inputId="private" id="private" value={PRIVATE_USER} onChange={() => setOwnerType(PRIVATE_USER)} checked={ownerType === PRIVATE_USER ? true : false} />
                                                    <label htmlFor="private" className="p-checkbox-label"> Private </label>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 mb-3 text-left">
                                                <div className="p-field-checkbox">
                                                    <Checkbox inputId="association" id="association" value={ASSOCIATION_USER} onChange={() => setOwnerType(ASSOCIATION_USER)} checked={ownerType === ASSOCIATION_USER ? true : false} />
                                                    <label htmlFor="association" className="p-checkbox-label"> Association </label>
                                                </div>
                                            </div>
                                            <FormComponent
                                                json={props.OwnerJSON}
                                                onChange={props.onChange}
                                                data={props.data}
                                            />

                                            <div className='col-sm-12 mb-3'>
                                                <Button label='Register Owner' onClick={() => submitOwnerRegistration()} disabled={!props.submitEnabled} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel header="Animale">

                    <div className="background-primary">
                        <div className="container custom-container">
                            <div className='row full-height justify-content-center align-items-center'>
                                <div className='col-lg-8 col-md-12 justify-content-center text-center'>

                                    <div className="card p-5">
                                        <div className="row">
                                            <div className='col-sm-12 mb-4'>
                                                <div className="p-field">
                                                    <h1>Registra il tuo Animale</h1>
                                                </div>
                                            </div>

                                            {/* Set Puppy Type */}
                                            <div className="col-sm-4 mb-3 text-right">
                                                <div className="p-field-checkbox">
                                                    <Checkbox inputId="dog" id="dog" value={DOG} onChange={() => setPuppyType(DOG)} checked={puppyType === DOG ? true : false} />
                                                    <label htmlFor="dog" className="p-checkbox-label"> Dog </label>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 mb-3 text-center">
                                                <div className="p-field-checkbox">
                                                    <Checkbox inputId="cat" id="cat" value={CAT} onChange={() => setPuppyType(CAT)} checked={puppyType === CAT ? true : false} />
                                                    <label htmlFor="cat" className="p-checkbox-label"> Cat </label>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 mb-3 text-left">
                                                <div className="p-field-checkbox">
                                                    <Checkbox inputId="rabbit" id="rabbit" value={RABBIT} onChange={() => setPuppyType(RABBIT)} checked={puppyType === RABBIT ? true : false} />
                                                    <label htmlFor="rabbit" className="p-checkbox-label"> Rabbit </label>
                                                </div>
                                            </div>

                                            {/* Set Sex Type */}
                                            <div className="col-sm-6 mb-3 text-right">
                                                <div className="p-field-checkbox">
                                                    <Checkbox inputId="male" id="male" value={MALE} onChange={() => setPuppySex(MALE)} checked={puppySex === MALE ? true : false} />
                                                    <label htmlFor="male" className="p-checkbox-label"> Male </label>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 mb-3 text-left">
                                                <div className="p-field-checkbox">
                                                    <Checkbox inputId="female" id="female" value={FEMALE} onChange={() => setPuppySex(FEMALE)} checked={puppySex === FEMALE ? true : false} />
                                                    <label htmlFor="female" className="p-checkbox-label"> Female </label>
                                                </div>
                                            </div>

                                            <FormComponent
                                                json={props.PuppyJSON}
                                                onChange={props.onChange}
                                                data={props.data}
                                            />

                                            <div className='col-sm-12 mb-3'>
                                                <Button label='Register Puppy' onClick={() =>submitPuppyRegistration()} disabled={!props.submitEnabled} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </TabPanel>
            </TabView>


        </div>




    )
}

export default RegisterComponent;