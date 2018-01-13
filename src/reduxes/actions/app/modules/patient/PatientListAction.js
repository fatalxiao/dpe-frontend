import * as types from 'reduxes/actionTypes';
import PatientListApi from 'apis/app/modules/patient/PatientListApi';
import {routerPush} from 'reduxes/actions/common/RouterAction';

export const getPatients = () => dispatch => {
    return dispatch({
        [types.CALL_API]: {
            types: [types.GET_PATIENT_LIST_REQUEST, types.GET_PATIENT_LIST_SUCCESS, types.GET_PATIENT_LIST_FAILURE],
            api: PatientListApi.getPatients,
            successResMsgDisabled: true
        }
    });
};