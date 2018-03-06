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

function patientInfo(state = initialState, action) {
    switch (action.type) {

        case actionTypes.RESET_PATIENT_DATA: {
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

        // get patient information
        case actionTypes.GET_PATIENT_INFO_REQUEST: {
            return {
                ...state,
                getActionType: actionTypes.GET_PATIENT_INFO_REQUEST
            };
        }
        case actionTypes.GET_PATIENT_INFO_SUCCESS: {

            const form = action.responseData;

            if (form.gestationalDays && !isNaN(form.gestationalDays)) {
                form.gestationalDaysWeeks = ~~(form.gestationalDays / 7);
                form.gestationalDaysDays = form.gestationalDays % 7;
            }

            return {
                ...state,
                form,
                getActionType: actionTypes.GET_PATIENT_INFO_SUCCESS
            };

        }
        case actionTypes.GET_PATIENT_INFO_FAILURE: {
            return {
                ...state,
                getActionType: actionTypes.GET_PATIENT_INFO_FAILURE
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

        // update patient
        case actionTypes.UPDATE_PATIENT_INFO_REQUEST: {
            return {
                ...state,
                updateActionType: actionTypes.UPDATE_PATIENT_INFO_REQUEST
            };
        }
        case actionTypes.UPDATE_PATIENT_INFO_SUCCESS: {
            return {
                ...state,
                updateActionType: actionTypes.UPDATE_PATIENT_INFO_SUCCESS
            };
        }
        case actionTypes.UPDATE_PATIENT_INFO_FAILURE: {
            return {
                ...state,
                updateActionType: actionTypes.UPDATE_PATIENT_INFO_FAILURE
            };
        }

        default:
            return state;

    }
}

export default patientInfo;