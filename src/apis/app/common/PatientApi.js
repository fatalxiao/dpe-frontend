import config from 'src/config';
import Api from 'apis/Api';

export default {

    getPatients(options) {
        Api.get({
            ...options,
            url: `${config.appBaseUrl}/patient/getPatients`,
            cancelable: false
        });
    },

    updatePatientInfo(options) {

        const name = `updatePatientInfo/${options.id}`;
        RequestManagement.cancelByName(name);

        Api.post({
            ...options,
            name,
            url: `${config.appBaseUrl}/patient/updatePatient`
        });

    },

    enablePatient(options) {
        Api.post({
            ...options,
            url: `${config.appBaseUrl}/patient/enable/${options.params.id}`,
            cancelable: false
        });
    },

    disablePatient(options) {
        Api.post({
            ...options,
            url: `${config.appBaseUrl}/patient/disable/${options.params.id}`,
            cancelable: false
        });
    }

};