import config from 'src/config';
import Api from 'apis/Api';

export default {

    createOrUpdateAnalgesiaData(options) {
        Api.post({
            ...options,
            url: `${config.appBaseUrl}/analgesia/createOrUpdateAnalgesiaData`,
            cancelable: false
        });
    }

};
