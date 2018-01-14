import * as types from 'reduxes/actionTypes';
import PatientListApi from 'apis/app/modules/patient/PatientListApi';

export const getGroups = () => dispatch => {
    return dispatch({
        [types.CALL_API]: {
            types: [types.GET_GROUPS_REQUEST, types.GET_GROUPS_SUCCESS, types.GET_GROUPS_FAILURE],
            api: PatientListApi.getPatients,
            successResMsgDisabled: true
        }
    });
};