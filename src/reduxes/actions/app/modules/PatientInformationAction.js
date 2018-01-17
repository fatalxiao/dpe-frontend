import * as actionTypes from 'reduxes/actionTypes';
import AddPatientApi from 'apis/app/modules/AddPatientApi';

export const addPatient = () => (dispatch, getState) => {
    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.ADD_PATIENT_REQUEST,
                actionTypes.ADD_PATIENT_SUCCESS,
                actionTypes.ADD_PATIENT_FAILURE
            ],
            api: AddPatientApi.addPatient,
            params: getState().addPatientInformation.form
        }
    });
};