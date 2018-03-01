import * as actionTypes from 'reduxes/actionTypes/index';
import {routerPush} from 'reduxes/actions/common/RouterAction';
import AnalgesiaApi from 'apis/app/modules/patient/AnalgesiaApi';
import PatientApi from '../../../../../apis/app/modules/patient/PatientApi';

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

export const getAnalgesiaData = patientId => dispatch => {

    if (!patientId) {
        return;
    }

    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.GET_ANALGESIA_DATA_REQUEST,
                actionTypes.GET_ANALGESIA_DATA_SUCCESS,
                actionTypes.GET_ANALGESIA_DATA_FAILURE
            ],
            api: AnalgesiaApi.getAnalgesiaDataByPatientId,
            params: {patientId},
            successResMsgDisabled: true
        }
    });

};

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
                routerPush(`/app/patient/observal-data/${patientId}`)(dispatch);
            }
        }
    });

};