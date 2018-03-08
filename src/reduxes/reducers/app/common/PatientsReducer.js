import _ from 'lodash';

import * as actionTypes from 'reduxes/actionTypes';

const initialState = {
    list: [],
    actionType: ''
};

function patients(state = initialState, action) {
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

        // enable patient
        case actionTypes.ENABLE_PATIENT_REQUEST: {
            return {
                ...state
            };
        }
        case actionTypes.ENABLE_PATIENT_SUCCESS: {

            const list = _.cloneDeep(state.list);
            list.find(item => item.id === action.id).status = 1;

            return {
                ...state,
                list
            };

        }
        case actionTypes.ENABLE_PATIENT_FAILURE: {
            return {
                ...state
            };
        }

        // disable patient
        case actionTypes.DISABLE_PATIENT_REQUEST: {
            return {
                ...state
            };
        }
        case actionTypes.DISABLE_PATIENT_SUCCESS: {

            const list = _.cloneDeep(state.list);
            list.find(item => item.id === action.id).status = 0;

            return {
                ...state,
                list
            };

        }
        case actionTypes.DISABLE_PATIENT_FAILURE: {
            return {
                ...state
            };
        }

        default:
            return state;

    }
}

export default patients;