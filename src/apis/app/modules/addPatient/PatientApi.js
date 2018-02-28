import config from 'src/config';
import Api from 'apis/Api';

export default {

    createPatient(options) {
        Api.post({
            ...options,
            url: `${config.appBaseUrl}/patient/createPatient`,
            cancelable: false
        });
    },

    updatePatient(options) {
        Api.post({
            ...options,
            url: `${config.appBaseUrl}/patient/updatePatient`,
            cancelable: false
        });
    }

};
