import { CHECKBOX_FIELD, DROPDOWN_FIELD, PASSWORD_FIELD, TEXT_FIELD } from "../assets/resources/FormField";
import log from "../configurations/LogLevel";
import { FormFieldState, FormState } from "../interface/common/FormState";
import _ from "lodash";

export class FormUtil {

    //Initialize FormData
    static initFormData = (FormJSON: any) => {
        log.debug("[initFormData]")
        let data: any = {};
        FormJSON.map((field: FormState) => {
            let valueField = (field.type === CHECKBOX_FIELD) ? false : "";
            let newField: FormFieldState = {
                value: valueField,
                valid: !field.required,
                required: field.required
            };
            if(field.hasOwnProperty('regex'))
                newField.regex = field.regex;
            if (field.type === DROPDOWN_FIELD) {
                newField.options = field.options;
                log.debug("[Field Options] - in Form Data", field.options)
            }

            data[field.id] = newField
        })

        log.debug("[initFormData] - FormData", data)
        return data;
    }

    //Submit FormData
    static onSubmit = (formData: any) => {
        log.debug("[onSubmit] - Form Data: ", formData)
        let data = _.mapValues(formData, (o) => { return o.value; }); //_.values(formData)
        log.debug("[Form Data Array] - ", data)
    };

    //Check Field Validation
    static isValid = (value: string, regex?: string) => {
        let re = (regex == null) ? new RegExp(".*") : new RegExp(regex);
        if(value != '' && re.test(value))
            return true;
        
        return false;
    }

    //Change FormData
    static onChange = (event: any, formData: any) => {
        log.debug("[OnChange] - Event ", event.target.type, ": ", event)
        console.log("[OnChange - FormData] - Event ", event.target.type, ": ", event)
        let newData: any = { ...formData };

        switch (event.target.type) {
            case CHECKBOX_FIELD:
                newData[event.target.id].value = event.checked;
                newData[event.target.id].valid = newData[event.target.id].required ? event.checked : true;
                break;
            case TEXT_FIELD:
                console.log("[OnChange - TEXT_FIELD] - value ", event.target.value)
                newData[event.target.id].value = event.target.value;
                //newData[event.target.id].valid = FormUtil.isValid(event.target.value, newData[event.target.id].regex);// (event.target.value !== '') ? true : false;
                break;
            case PASSWORD_FIELD:
                newData[event.target.id].value = event.target.value;
                newData[event.target.id].valid = FormUtil.isValid(event.target.value, newData[event.target.id].regex);//(event.target.value !== '') ? true : false;
                break;
            default:
                break;
        }

        return newData;
    }

    //Change FormData Dropdown Field
    static onChangeDropdown = (event: any, formData: any) => {
        log.debug("[onChangeDropdown] - Event ", event.target.type, ": ", event)
        let newData: any = { ...formData };
        newData[event.target.id].value = event.value;
        newData[event.target.id].valid = (event.target.value !== '') ? true : false;

        return newData;
    }

    //Check if all required fields are filled in
    static isSubmitEnabled = (formData: any) => {
        let enabled = !_.some(_.filter(formData, ['required', true]), ['valid', false]);
        log.debug("[CheckSubmitEnabled] - Enabled: ", enabled);
        return enabled;
    }

}