import * as types from 'reduxes/actionTypes';

const initialState = {
    list: [],
    actionType: ''
};

function patient(state = initialState, action) {
    switch (action.type) {

        // get patient list
        case types.GET_PATIENTS_REQUEST: {
            return {
                ...state,
                actionType: types.GET_PATIENTS_REQUEST
            };
        }

        case types.GET_PATIENTS_SUCCESS: {
            return {
                ...state,
                list: action.responseData,
                actionType: types.GET_PATIENTS_SUCCESS
            };
        }

        case types.GET_PATIENTS_FAILURE: {
            return {
                ...state,
                list: [],
                actionType: types.GET_PATIENTS_FAILURE
            };
        }

        default:
            return state;

    }
}

export default patient;