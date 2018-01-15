import * as types from 'reduxes/actionTypes';
import GroupApi from 'apis/app/common/GroupApi';

export const getGroups = () => dispatch => {
    return dispatch({
        [types.CALL_API]: {
            types: [types.GET_GROUPS_REQUEST, types.GET_GROUPS_SUCCESS, types.GET_GROUPS_FAILURE],
            api: GroupApi.getGroups,
            successResMsgDisabled: true
        }
    });
};