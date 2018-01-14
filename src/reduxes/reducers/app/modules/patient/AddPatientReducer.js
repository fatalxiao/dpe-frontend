import * as types from 'reduxes/actionTypes';

const initialState = {
    steps: [{
        title: 'Patient Information'
    }, {
        title: 'Analgesia Data'
    }, {
        title: 'Observal Data'
    }],
    activatedStep: 0,
    finishedStep: 0
};

function addPatient(state = initialState, action) {
    switch (action.type) {

        default:
            return state;

    }
}

export default addPatient;