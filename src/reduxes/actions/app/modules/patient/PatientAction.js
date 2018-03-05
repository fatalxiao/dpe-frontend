import * as actionTypes from 'reduxes/actionTypes';
import PatientApi from '../../../../../apis/app/modules/patient/PatientApi';

export const patientStepPrev = () => dispatch => {
    return dispatch({
        type: actionTypes.PATIENT_STEP_PREV
    });
};

export const patientStepNext = () => dispatch => {
    return dispatch({
        type: actionTypes.PATIENT_STEP_NEXT
    });
};

export const updatePatientStep = activatedStep => dispatch => {
    return dispatch({
        type: actionTypes.PATIENT_STEP_UPDATE,
        activatedStep
    });
};

export const resetPatientData = () => dispatch => {
    return dispatch({
        type: actionTypes.RESET_PATIENT_DATA
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