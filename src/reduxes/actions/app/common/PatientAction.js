import * as actionTypes from 'reduxes/actionTypes';
import PatientApi from 'apis/app/common/PatientApi';

export const getPatients = () => dispatch => {
    return dispatch({
        [types.CALL_API]: {
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