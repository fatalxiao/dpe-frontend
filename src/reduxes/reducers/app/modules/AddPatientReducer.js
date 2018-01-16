import * as actionTypes from 'reduxes/actionTypes';

import Valid from 'vendors/Valid';

const initialState = {
    steps: [{
        title: 'Patient\nInformation'
    }, {
        title: 'Analgesia\nData'
    }, {
        title: 'Observal\nData'
    }],
    activatedStep: 0,
    finishedStep: 0
};

function addPatient(state = initialState, action) {
    switch (action.type) {

        case actionTypes.ADD_PATIENT_STEP_PREV: {
            return {
                ...state,
                activatedStep: Valid.range(state.activatedStep - 1, 0, state.steps.length - 1)
            };
        }

        case actionTypes.ADD_PATIENT_STEP_NEXT: {

            const activatedStep = Valid.range(state.activatedStep + 1, 0, state.steps.length - 1),
                finishedStep = state.finishedStep > activatedStep ? state.finishedStep : activatedStep;

            return {
                ...state,
                activatedStep,
                finishedStep
            };
        }

        default:
            return state;

    }
}

export default addPatient;