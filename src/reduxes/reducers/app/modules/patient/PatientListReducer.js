import * as types from 'reduxes/actionTypes';

const initialState = {
    list: [],
    actionType: ''
};

function patientList(state = initialState, action) {
    switch (action.type) {

        // get patient list
        case types.GET_PATIENT_LIST_REQUEST: {
            return {
                ...state,
                actionType: types.GET_PATIENT_LIST_REQUEST
            };
        }

        case types.GET_PATIENT_LIST_SUCCESS: {
            return {
                ...state,
                list: action.responseData,
                actionType: types.GET_PATIENT_LIST_SUCCESS
            };
        }

        case types.GET_PATIENT_LIST_FAILURE: {
            return {
                ...state,
                list: [],
                actionType: types.GET_PATIENT_LIST_FAILURE
            };
        }

        default:
            return state;

    }
}

export default patientList;