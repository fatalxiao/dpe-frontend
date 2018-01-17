import config from 'src/config';
import Api from 'apis/Api';

export default {
    addPatient(options) {
        Api.post({
            ...options,
            url: `${config.appBaseUrl}/patient/addPatient`,
            cancelable: false
        });
    }
};
