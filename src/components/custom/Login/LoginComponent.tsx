import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';
import FormComponent from '../../common/FormComponent';
import './LoginComponent.scss';

const LoginForm = (props: any) => {

    return (
        <div id='Login' className="background-primary">
            <div className="container custom-container">
                <div className='row full-height justify-content-center align-items-center'>

                    <div className='col-lg-6 col-md-12 justify-content-center text-center'>
                        <div className="card p-5">

                            <div className='col-sm-12 mb-4'>
                                <div className="p-field">
                                    <h1>Accedi al tuo Account</h1>
                                </div>
                            </div>

                            <FormComponent
                                json={props.json}
                                onChange={props.onChange}
                                onChangeDropdown={props.onChangeDropdown}
                                data={props.data}
                            />

                            <div className='col-sm-12 mb-3'>
                                <Button label='Continua' onClick={() => props.onSubmit()} disabled={!props.submitEnabled} />
                            </div>

                            <div className="line mt-3 mb-3" />

                            <div className='col-sm-12 mb-2'>
                                <Link to="/forgot">Password Dimenticata?</Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginForm;
