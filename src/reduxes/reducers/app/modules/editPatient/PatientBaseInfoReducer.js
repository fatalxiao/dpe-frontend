import _ from 'lodash';
import * as actionTypes from 'reduxes/actionTypes/index';

const DEFAULT_FORM = {
        group: null,
        id: '',
        patientName: '',
        age: '',
        gestationalDaysWeeks: '',
        gestationalDaysDays: '',
        height: '',
        weight: '',
        heartRate: '',
        initialVasScore: '',
        cervicalDilationAtTimeOfEA: '',
        systolicBloodPressure: '',
        diastolicBloodPressure: '',
        description: ''
    },

    initialState = {
        form: _.cloneDeep(DEFAULT_FORM),
        getActionType: '',
        updateActionType: ''
    };

function patientBaseInfo(state = initialState, action) {
    switch (action.type) {

        case actionTypes.RESET_PATIENT_INFO: {
            return {
                ...state,
                form: _.cloneDeep(DEFAULT_FORM)
            };
        }

        case actionTypes.UPDATE_PATIENT_INFO_FIELD: {

            const form = _.cloneDeep(state.form);

            form[action.fieldName] = action.fieldValue;

            return {
                ...state,
                form
            };

        }

        // create patient
        case actionTypes.CREATE_PATIENT_REQUEST: {
            return {
                ...state,
                updateActionType: actionTypes.CREATE_PATIENT_REQUEST
            };
        }
        case actionTypes.CREATE_PATIENT_SUCCESS: {
            return {
                ...state,
                updateActionType: actionTypes.CREATE_PATIENT_SUCCESS
            };
        }
        case actionTypes.CREATE_PATIENT_FAILURE: {
            return {
                ...state,
                updateActionType: actionTypes.CREATE_PATIENT_FAILURE
            };
        }

        default:
            return state;

    }
}

export default patientBaseInfo;