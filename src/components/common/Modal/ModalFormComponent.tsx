import React from "react"
import { Dialog } from 'primereact/dialog';
import CardComponent from "../CardComponent";
import { Button } from "primereact/button";
import FormComponent from "../FormComponent";

const ModalFormComponent = (props: any) => {
    const renderHeader = () => (
        <div className="text-center">
            {props.title}
        </div>
    )

    const renderFooter = () => {
        if (props.buttonAccept || props.buttonReject)
            return <div className="text-center">
                {props.buttonReject &&
                    <Button label={props.buttonReject.label} icon={props.buttonReject.icon} autoFocus={props.buttonReject.autofocus} onClick={() => props.onHide()} />
                }
                {props.buttonAccept &&
                    <Button label={props.buttonAccept.label} icon={props.buttonAccept.icon} autoFocus={props.buttonAccept.autofocus} onClick={() => props.handleSubmit()} />
                }

            </div>

    }


    return (
        <div>
            <Dialog header={renderHeader()}
                footer={renderFooter()}
                visible={props.visible} onHide={() => props.onHide()}>
                <FormComponent
                    onChange={props.handleChange}
                    data={props.formData}
                    json={props.content}
                    submitEnabled={props.submitEnabled}
                />

            </Dialog>
        </div>

    )
}

export default ModalFormComponent