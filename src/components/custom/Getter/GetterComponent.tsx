import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import TreeNode from 'primereact/components/treenode/TreeNode';
import { Tree } from 'primereact/tree';
import React, { Fragment, useState } from 'react';
import ProfileComponent from '../../common/ProfileComponent';
import { ANIMAL, OWNER, VETERINARIAN } from '../../../assets/resources/UserType';
import FormComponent from '../../common/FormComponent';
import ModalFormComponent from '../../common/Modal/ModalFormComponent';
import { FormUtil } from '../../../utils/FormUtil';

const GetterComponent = (props: any) => {

    const [address, setAddress] = useState("")
    const [modal, setModal] = useState<any>({
        title: '',
        content: props.VaccineJSON,
        visible: false
    })

    const [transferModal, setTransferModal] = useState<any>({
        title: '',
        content: props.TransferOwnershipJSON,
        visible: false
    })

    const [formData, setFormData] = useState<any>({});
    const [transferFormData, setTransferFormData] = useState<any>({});

    const [submitEnabled, setSubmitEnabled] = useState(false)

    const getPuppyData = () => {
        props.getPuppy(address)
    }

    const getOwnerData = () => {
        props.getOwner(address)
    }

    const getVeterinarianData = () => {
        props.getVeterinarian(address)
        console.log("Veterinarian in Getter: ", props.veterinarian)
    }

    const handleChange = (e: any) => {
        setFormData(FormUtil.onChange(e, formData));
        setSubmitEnabled(FormUtil.isSubmitEnabled(formData));
    }
    const handleSubmit = (e: any) => {
        // log.debug(formData)
        console.log(formData)
    }

    const onClick = () => {
        setModal({
            ...modal,
            visible: true,
            title: 'Add Vaccine',
            buttonAccept: {
                label: "accept",
                icon: "pi pi-check",
                autofocus: true
            },
            buttonReject: {
                label: "reject",
                icon: "pi pi-times",
                autofocus: false
            }
        })
        setFormData(FormUtil.initFormData(modal.content));
    }

    const onHide = () => {
        setModal({
            ...modal,
            visible: false,
            title: '',
        })
    }

    const onTransferClick = () => {
        setTransferModal({
            ...transferModal,
            visible: true,
            title: 'Transfer Puppy Ownership',
            buttonAccept: {
                label: "Submit",
                icon: "pi pi-check",
                autofocus: true
            },
            buttonReject: {
                label: "Cancel",
                icon: "pi pi-times",
                autofocus: false
            }
        })
        setTransferFormData(FormUtil.initFormData(transferModal.content));
    }

    const onTransferHide = () => {
        setTransferModal({
            ...transferModal,
            visible: false,
            title: '',
        })
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

                        <ModalFormComponent {...modal}
                            onHide={onHide}
                            handleChange={props.onChange}
                            handleSubmit={props.onSubmitVaccine}
                            formData={props.data} />
                        <Button className='btn-third' label='Register Vaccine' onClick={() => onClick()} />

                    </div>
                </div>
            </Fragment>
        )
    }

    const getOwnerProfile = () => {
        return (
            <Fragment>
                <ProfileComponent
                    type={OWNER}
                    data={props.owner}
                />

                <div className="row justify-content-center">
                    <div className='col-lg-8 col-md-12 justify-content-center text-center'>

                        <ModalFormComponent 
                            {...transferModal}
                            onHide={onTransferHide}
                            handleChange={props.onChangeOwnershipForm}
                            handleSubmit={props.transferPuppyOwnership}
                            formData={props.transferOwnershipFormData} />
                        <Button className='btn-third' label='Transfer Puppy Ownership' onClick={() => onTransferClick()} />

                    </div>
                </div>
            </Fragment>
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

                <div className='row full-height justify-content-center align-items-center pt-4 pb-4'>
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