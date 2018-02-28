import _ from 'lodash';
import * as actionTypes from 'reduxes/actionTypes/index';

const initialState = {
    form: {
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
    actionType: ''
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

        // update patient
        case actionTypes.UPDATE_PATIENT_INFORMATION_REQUEST: {
            return {
                ...state,
                actionType: actionTypes.UPDATE_PATIENT_INFORMATION_REQUEST
            };
        }
        case actionTypes.UPDATE_PATIENT_INFORMATION_SUCCESS: {
            return {
                ...state,
                actionType: actionTypes.UPDATE_PATIENT_INFORMATION_SUCCESS
            };
        }
        case actionTypes.UPDATE_PATIENT_INFORMATION_FAILURE: {
            return {
                ...state,
                actionType: actionTypes.UPDATE_PATIENT_INFORMATION_FAILURE
            };
        }

        default:
            return state;

    }
}

export default patientInformation;