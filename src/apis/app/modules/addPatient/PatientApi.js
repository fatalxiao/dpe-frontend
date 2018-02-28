import config from 'src/config';
import Api from 'apis/Api';

export default {

    createOrUpdatePatient(options) {
        Api.post({
            ...options,
            url: `${config.appBaseUrl}/patient/createOrUpdatePatient`,
            cancelable: false
        });
    }

};
