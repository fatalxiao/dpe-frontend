import * as types from 'reduxes/actionTypes';
import PatientApi from 'apis/app/common/PatientApi';

export const getPatients = () => dispatch => {
    return dispatch({
        [types.CALL_API]: {
            types: [types.GET_PATIENTS_REQUEST, types.GET_PATIENTS_SUCCESS, types.GET_PATIENTS_FAILURE],
            api: PatientApi.getPatients,
            successResMsgDisabled: true
        }
    });
};