import log from 'loglevel';
import { Toast } from 'primereact/toast';
import React, { useEffect, useState } from 'react';

const ToastComponent = (props: any) => {
    const [myToast, setMyToast] = useState<Toast | null>();

    useEffect(() => {
        log.debug('dentro TOASTCOMPONENT useEffect', props.toasts)

            myToast?.show({
                severity: props.toasts.severity,
                summary: props.toasts.title, detail: props.toasts.content
            });
    }, [props.toasts])

    return (
        <Toast ref={(el) => setMyToast(el)} />
    );
}

export default ToastComponent