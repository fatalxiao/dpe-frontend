import _ from 'lodash';
import * as actionTypes from 'reduxes/actionTypes/index';

const DEFAULT_FORM = {
        group: null,
        id: '',
        patientName: '',
        age: '',
        gestationalWeeks: '',
        gestationalDays: '',
        height: '',
        weight: '',
        heartRate: '',
        initialVasScore: '',
        cervicalDilationAtTimeOfEA: '',
        systolicBloodPressure: '',
        diastolicBloodPressure: '',
        foetalHeartRate: '',
        description: ''
    },

    initialState = {
        form: _.cloneDeep(DEFAULT_FORM),
        getActionType: '',
        updateActionType: ''
    };

function patientInformation(state = initialState, action) {
    switch (action.type) {

        case actionTypes.UPDATE_PATIENT_INFORMATION_FIELD: {

            const form = _.cloneDeep(state.form);

            form[action.fieldName] = action.fieldValue;

            return {
                ...state,
                form
            };

        }

        // get patient information
        case actionTypes.GET_PATIENT_INFORMATION_REQUEST: {
            return {
                ...state,
                getActionType: actionTypes.GET_PATIENT_INFORMATION_REQUEST
            };
        }
        case actionTypes.GET_PATIENT_INFORMATION_SUCCESS: {
            return {
                ...state,
                form: action.responseData,
                getActionType: actionTypes.GET_PATIENT_INFORMATION_SUCCESS
            };
        }
        case actionTypes.GET_PATIENT_INFORMATION_FAILURE: {
            return {
                ...state,
                getActionType: actionTypes.GET_PATIENT_INFORMATION_FAILURE
            };
        }

        // update patient
        case actionTypes.UPDATE_PATIENT_INFORMATION_REQUEST: {
            return {
                ...state,
                updateActionType: actionTypes.UPDATE_PATIENT_INFORMATION_REQUEST
            };
        }
        case actionTypes.UPDATE_PATIENT_INFORMATION_SUCCESS: {
            return {
                ...state,
                updateActionType: actionTypes.UPDATE_PATIENT_INFORMATION_SUCCESS
            };
        }
        case actionTypes.UPDATE_PATIENT_INFORMATION_FAILURE: {
            return {
                ...state,
                updateActionType: actionTypes.UPDATE_PATIENT_INFORMATION_FAILURE
            };
        }

        default:
            return state;

    }
}

export default patientInformation;