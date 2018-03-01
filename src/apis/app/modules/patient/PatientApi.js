import config from 'src/config';
import Api from 'apis/Api';

export default {

    getPatientById(options) {
        Api.get({
            ...options,
            url: `${config.appBaseUrl}/patient/getPatientById/${options.params.id}`
        });
    },

    createOrUpdatePatient(options) {
        Api.post({
            ...options,
            url: `${config.appBaseUrl}/patient/createOrUpdatePatient`,
            cancelable: false
        });
    }

};
