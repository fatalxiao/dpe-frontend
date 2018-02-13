import * as actionTypes from 'reduxes/actionTypes/index';

const initialState = {
    form: {
        group: null,
        groupId: null,
        id: '',
        patientName: '',
        age: '',
        gestationalDays: '',
        gestationalDaysWeek: '',
        gestationalDaysDay: '',
        height: '',
        weight: '',
        heartRate: '',
        initialVasScore: '',
        cervicalDilationAtTimeOfEA: '',
        systolicBloodPressure: '',
        diastolicBloodPressure: '',
        foetalHeartRate: '',
        description: ''
    }
};

function patientInformation(state = initialState, action) {
    switch (action.type) {

        case actionTypes.UPDATE_PATIENT_INFORMATION_FIELD: {

            const form = state.form;

            if (action.fieldName === 'group') {
                form.group = action.fieldValue;
                form.groupId = action.fieldValue.id;
            } else if (action.fieldName === 'gestationalDaysWeek') {
                form.gestationalDaysWeek = parseInt(action.fieldValue);
                form.gestationalDays = parseInt(action.fieldValue) * 7 + parseInt(form.gestationalDaysDay);
            } else if (action.fieldName === 'gestationalDaysDay') {
                form.gestationalDaysDay = parseInt(action.fieldValue);
                form.gestationalDays = parseInt(form.gestationalDaysWeek) * 7 + parseInt(action.fieldValue);
            } else {
                form[action.fieldName] = action.fieldValue;
            }

            return {
                ...state,
                form
            };

        }

        default:
            return state;

    }
}

export default patientInformation;