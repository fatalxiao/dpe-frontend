import * as actionTypes from 'reduxes/actionTypes/index';

const initialState = {
    form: {
        groupId: null,
        id: '',
        patientName: '',
        age: '',
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

function addPatientInformation(state = initialState, action) {
    switch (action.type) {

        case actionTypes.UPDATE_PATIENT_INFORMATION: {
            return {
                ...state,
                form: action.form
            };
        }

        // add patient
        case actionTypes.ADD_PATIENT_REQUEST: {
            return {
                ...state,
                actionType: actionTypes.ADD_PATIENT_REQUEST
            };
        }
        case actionTypes.ADD_PATIENT_SUCCESS: {
            return {
                ...state,
                actionType: actionTypes.ADD_PATIENT_SUCCESS
            };
        }
        case actionTypes.ADD_PATIENT_FAILURE: {
            return {
                ...state,
                actionType: actionTypes.ADD_PATIENT_FAILURE
            };
        }

        default:
            return state;

    }
}

export default addPatientInformation;