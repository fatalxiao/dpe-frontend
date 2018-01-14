import * as types from 'reduxes/actionTypes';
import PatientListApi from 'apis/app/modules/patient/PatientListApi';

export const getPatients = () => dispatch => {
    return dispatch({
        [types.CALL_API]: {
            types: [types.GET_PATIENTS_REQUEST, types.GET_PATIENTS_SUCCESS, types.GET_PATIENTS_FAILURE],
            api: PatientListApi.getPatients,
            successResMsgDisabled: true
        }
    });
};