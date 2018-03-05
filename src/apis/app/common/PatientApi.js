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