import * as actionTypes from 'reduxes/actionTypes';

const initialState = {
    list: [],
    actionType: ''
};

function patient(state = initialState, action) {
    switch (action.type) {

        // get patient list
        case actionTypes.GET_PATIENTS_REQUEST: {
            return {
                ...state,
                actionType: actionTypes.GET_PATIENTS_REQUEST
            };
        }

        case actionTypes.GET_PATIENTS_SUCCESS: {
            return {
                ...state,
                list: action.responseData,
                actionType: actionTypes.GET_PATIENTS_SUCCESS
            };
        }

        case actionTypes.GET_PATIENTS_FAILURE: {
            return {
                ...state,
                list: [],
                actionType: actionTypes.GET_PATIENTS_FAILURE
            };
        }

        default:
            return state;

    }
}

export default patient;