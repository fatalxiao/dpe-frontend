import * as actionTypes from 'reduxes/actionTypes/index';
import ObservalApi from 'apis/app/modules/patient/ObservalApi';

export const updateObservalDataField = (fieldName, fieldValue) => ({
    type: actionTypes.UPDATE_OBSERVAL_FIELD,
    fieldName,
    fieldValue
});

export const getObservalData = patientId => dispatch => {

    if (!patientId) {
        return;
    }

    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.GET_OBSERVAL_REQUEST,
                actionTypes.GET_OBSERVAL_SUCCESS,
                actionTypes.GET_OBSERVAL_FAILURE
            ],
            api: ObservalApi.getObservalDataByPatientId,
            params: {patientId},
            successResMsgDisabled: true
        }
    });

};

export const createOrUpdateObservalData = (patientId, callback, successResMsgDisabled) => (dispatch, getState) => {

    const observalData = getState().observal.form;

    if (!patientId || !observalData) {
        return;
    }

    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.UPDATE_OBSERVAL_REQUEST,
                actionTypes.UPDATE_OBSERVAL_SUCCESS,
                actionTypes.UPDATE_OBSERVAL_FAILURE
            ],
            api: ObservalApi.createOrUpdateObservalData,
            params: {
                patientId,
                observalData
            },
            successResMsgDisabled,
            successCallback() {
                callback && callback();
            }
        }
    });

};