import * as actionTypes from 'reduxes/actionTypes/index';
import {routerPush} from 'reduxes/actions/common/RouterAction';
import AnalgesiaApi from 'apis/app/modules/addPatient/AnalgesiaApi';

function sensoryBlockHandler(keys, item, result) {
    for (let key of keys) {
        if (item[key]) {
            result[`${key}Value`] = item[key].sensoryBlockValue;
        }
    }
}

function AnalgesiaDataHandler(data) {

    return data.map(item => {

        const result = {
            timePoint: item.timePoint,
            hasContraction: item.hasContraction,
            vasScore: item.vasScore,
            bromageScore: item.bromageScore,
            systolicBloodPressure: item.systolicBloodPressure,
            diastolicBloodPressure: item.diastolicBloodPressure,
            heartRate: item.heartRate,
            pulseOxygenSaturation: item.pulseOxygenSaturation
        };

        sensoryBlockHandler([
            'thoracicSensoryBlockLeft',
            'thoracicSensoryBlockRight',
            'sacralSensoryBlockLeft',
            'sacralSensoryBlockRight'
        ], item, result);

        return result;

    });

}

export const updateAnalgesiaDataField = (id, fieldName, fieldValue) => ({
    type: actionTypes.UPDATE_ANALGESIA_DATA_FIELD,
    id,
    fieldName,
    fieldValue
});

export const createOrUpdateAnalgesiaData = patientId => (dispatch, getState) => {

    const data = getState().analgesiaData.data;

    if (!patientId || !data) {
        return;
    }

    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.UPDATE_ANALGESIA_DATA_REQUEST,
                actionTypes.UPDATE_ANALGESIA_DATA_SUCCESS,
                actionTypes.UPDATE_ANALGESIA_DATA_FAILURE
            ],
            api: AnalgesiaApi.createOrUpdateAnalgesiaData,
            params: {
                patientId,
                analgesiaData: AnalgesiaDataHandler(data)
            },
            successCallback() {
                routerPush(`/app/add-patient/observal-data/${patientId}`)(dispatch);
            }
        }
    });

};