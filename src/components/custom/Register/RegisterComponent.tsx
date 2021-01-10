
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import React, { useState } from 'react';
import FormComponent from '../../common/FormComponent';
import '../Login/LoginComponent.scss';

const RegisterComponent = (props: any) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const changeActiveIndex = (index:any) => {
        setActiveIndex(index);
        props.changeIndex(index)
    }

    return (
        <div id='Login' className="background-primary">


            <TabView activeIndex={activeIndex} onTabChange={(e:any) => changeActiveIndex(e.index)}>
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
                                        <div className='col-sm-12 mb-4'>
                                            <div className="p-field">
                                                <h1>Registrati come Proprietario</h1>
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
                                        <div className='col-sm-12 mb-4'>
                                            <div className="p-field">
                                                <h1>Registra il tuo Animale</h1>
                                            </div>
                                        </div>

                                        <FormComponent
                                            json={props.PuppyJSON}
                                            onChange={props.onChange}
                                            data={props.data}
                                        />

                                        <div className='col-sm-12 mb-3'>
                                            <Button label='Register Puppy' onClick={() => props.onSubmitPuppy()} disabled={!props.submitEnabled} />
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