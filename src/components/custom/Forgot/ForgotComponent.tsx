import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';
import FormComponent from '../../common/FormComponent';
import '../Login/LoginComponent.scss';


const ForgotForm = (props: any) => {

    return (
        <div id='Login' className="background-primary">
            <div className="container custom-container">
                <div className='row full-height justify-content-center align-items-center'>

                    <div className='col-lg-6 col-md-12 justify-content-center text-center'>
                        <div className="card p-5">

                            <div className='col-sm-12 mb-4'>
                                <div className="p-field">
                                    <h1>Inserisci la tua Mail</h1>
                                    <h6>Riceverai una mail con il reset della password</h6>
                                </div>
                            </div>

                            <FormComponent
                                json={props.json}
                                onChange={props.onChange}
                                data={props.data}
                            />

                            <div className='col-sm-12 mb-3'>
                                <Button label='Continua' onClick={() => props.onSubmit()} disabled={!props.submitEnabled} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotForm;
