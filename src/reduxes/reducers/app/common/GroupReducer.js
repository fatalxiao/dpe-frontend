import * as types from 'reduxes/actionTypes';

const initialState = {
    list: []
};

function group(state = initialState, action) {
    switch (action.type) {

        // get group list
        case types.GET_GROUPS_REQUEST: {
            return {
                ...state,
                actionType: types.GET_GROUPS_REQUEST
            };
        }

        case types.GET_GROUPS_SUCCESS: {
            return {
                ...state,
                list: action.responseData,
                actionType: types.GET_GROUPS_SUCCESS
            };
        }

        case types.GET_GROUPS_FAILURE: {
            return {
                ...state,
                list: [],
                actionType: types.GET_GROUPS_FAILURE
            };
        }

        default:
            return state;

    }
}

export default group;