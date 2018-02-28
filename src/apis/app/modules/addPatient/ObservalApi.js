import config from 'src/config';
import Api from 'apis/Api';

export default {

    createOrUpdateObservalData(options) {
        Api.post({
            ...options,
            url: `${config.appBaseUrl}/observal/createOrUpdateObservalData`,
            cancelable: false
        });
    }

};
