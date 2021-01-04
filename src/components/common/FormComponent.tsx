import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import React, { Fragment } from "react";
import log from "../../configurations/LogLevel";
import { FormState } from "../../interface/common/FormState";
import { TEXT_FIELD, CHECKBOX_FIELD, DROPDOWN_FIELD, PASSWORD_FIELD } from "../../assets/resources/FormField";
import _ from "lodash";
import { Dropdown } from "primereact/dropdown";
import { Password } from "primereact/password";

const FormComponent = (props: any) => {


    log.debug(props.json);

    const getInputComponent = (field: FormState) => {
        return (
            <div key={field.id} className={`${field.col} mb-3`}>
                <div className="p-field">
                    {
                        (field.label) &&
                        <h6 className="p-d-block">{field.label}</h6>
                    }
                    <InputText id={field.id} className="p-d-block" onChange={e => props.onChange(e)} placeholder={field.placeholder} />
                </div>
            </div>
        )
    }

    const getPasswordComponent = (field: FormState) => {
        log.debug("[getPasswordComponent] - field: ", field)
        let label = field.label || "";
        return (
            <div key={field.id} className={`${field.col} mb-3`}>
                <div className="p-field">
                    {
                        (field.label) &&
                        <h6 className="p-d-block">{field.label}</h6>
                    }
                    <Password id={field.id} onChange={(e) => props.onChange(e)} placeholder={field.placeholder} feedback={field.feedback}/>
                </div>
            </div>
        )
    }


    const getCheckBoxComponent = (field: FormState) => {
        let label = field.label || "";
        return (
            <div key={field.id} className={`${field.col} mb-3`}>
                <div className="p-field-checkbox">
                    <Checkbox inputId={field.id} id={field.id} value={field.label} onChange={e => props.onChange(e)} checked={props.data[field.id].value} />
                    <label htmlFor={field.id} className="p-checkbox-label"> <div dangerouslySetInnerHTML={{ __html: label }} /> </label>
                </div>
            </div>
        )
    }

    const getDropdownComponent = (field: FormState) => {
        // log.debug("[Dropdown] - FieldData Value: ", props.data[field.id].value)
        // log.debug("[Dropdown] - FieldData Options: ", props.data[field.id].options)
        let label = field.label || "";
        return (
            <div key={field.id} className={`${field.col} mb-3`}>
                <div className="p-field">
                    <Dropdown id={field.id} optionLabel="label" value={props.data[field.id].value} options={props.data[field.id].options} onChange={(e) => props.onChangeDropdown(e)} placeholder={field.placeholder} />
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            {
                !_.isEmpty(props.data) &&
                props.json.map((field: FormState) => {

                    switch (field.type) {
                        case TEXT_FIELD:
                            return getInputComponent(field);
                            break;
                        case CHECKBOX_FIELD:
                            return getCheckBoxComponent(field);
                            break;
                        case DROPDOWN_FIELD:
                            return getDropdownComponent(field);
                            break;
                        case PASSWORD_FIELD:
                            return getPasswordComponent(field);
                            break;
                        default:
                            break;
                    }

                })
            }
        </Fragment>
    )


}

export default FormComponent;