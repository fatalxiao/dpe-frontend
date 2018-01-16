import * as actionTypes from 'reduxes/actionTypes';

import Valid from 'vendors/Valid';

const initialState = {
    steps: [{
        id: 0,
        patientId: 0,
        timePoint: 0,
        hasContraction: false,
        vasScore: 10,
        thoracicSensoryBlockLeft: 1,
        thoracicSensoryBlockRight: 1,
        sacralSensoryBlockLeft: 1,
        sacralSensoryBlockRight: 1,
        bromageScore: 10,
        systolicBloodPressure: 80,
        diastolicBloodPressure: 120,
        heartRate: 70,
        pulseOxygenSaturation: 10
    }]
};

function analgesiaData(state = initialState, action) {
    switch (action.type) {

        default:
            return state;

    }
}

export default analgesiaData;