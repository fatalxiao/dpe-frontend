import * as actionTypes from 'reduxes/actionTypes';
import PatientApi from 'apis/app/common/PatientApi';

export const getPatients = () => dispatch => {
    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.GET_PATIENTS_REQUEST,
                actionTypes.GET_PATIENTS_SUCCESS,
                actionTypes.GET_PATIENTS_FAILURE
            ],
            api: PatientApi.getPatients,
            successResMsgDisabled: true
        }
    });
};

export const enablePatient = id => dispatch => {

    if (!id) {
        return;
    }

    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.ENABLE_PATIENT_REQUEST,
                actionTypes.ENABLE_PATIENT_SUCCESS,
                actionTypes.ENABLE_PATIENT_FAILURE
            ],
            api: PatientApi.enablePatient,
            params: {
                id
            },
            successResMsgDisabled: true
        }
    });

};

export const disablePatient = id => dispatch => {

    if (!id) {
        return;
    }

    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.DISABLE_PATIENT_REQUEST,
                actionTypes.DISABLE_PATIENT_SUCCESS,
                actionTypes.DISABLE_PATIENT_FAILURE
            ],
            api: PatientApi.disablePatient,
            params: {
                id
            },
            successResMsgDisabled: true
        }
    });

};