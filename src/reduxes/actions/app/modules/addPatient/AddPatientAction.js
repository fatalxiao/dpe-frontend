import * as actionTypes from 'reduxes/actionTypes/index';

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

export const updateAddPatientStep = activatedStep => dispatch => {
    return dispatch({
        type: actionTypes.ADD_PATIENT_STEP_UPDATE,
        activatedStep
    });
};