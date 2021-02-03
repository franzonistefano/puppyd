import ToastState from "../../interface/common/ToastState";
import { HIDE_TOAST, SHOW_TOAST } from "../type/toast";

const defaultState: ToastState = {
    loading: false,
    message: "",
    summary: "",
    severity: ""
}

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case SHOW_TOAST:
            return {
                loading: true,
                message: action.message,
                summary: action.summary,
                severity: action.severity
            }
        case HIDE_TOAST:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}
