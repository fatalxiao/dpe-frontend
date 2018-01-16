import * as actionTypes from 'reduxes/actionTypes';
import PatientApi from 'apis/app/common/PatientApi';

export const addPatientStepPrev = () => dispatch => {
    return dispatch({
        type: actionTypes.ADD_PATIENT_STEP_PREV
    });
};

export const addPatientStepNext = () => dispatch => {
    return dispatch({
        type: actionTypes.ADD_PATIENT_STEP_NEXT
    });
};

export const addPatientStepUpdate = activatedStep => dispatch => {
    return dispatch({
        type: actionTypes.ADD_PATIENT_STEP_UPDATE,
        activatedStep
    });
};