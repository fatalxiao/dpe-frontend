import config from 'src/config';
import Api from 'apis/Api';
import RequestManagement from 'apis/RequestManagement';

export default {

    getPatients(options) {

        const name = 'patient/getPatients';
        RequestManagement.cancelByName(name);

        Api.get({
            ...options,
            name,
            url: `${config.appBaseUrl}/patient/getPatients`
        });

    }
};
