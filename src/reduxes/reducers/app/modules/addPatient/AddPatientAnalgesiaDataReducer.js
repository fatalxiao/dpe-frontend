import * as actionTypes from 'reduxes/actionTypes/index';

import Valid from 'vendors/Valid';

const data = {
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
    },
    list = [];

for (let i = 0; i < 10; i++) {
    list.push({...data, timePoint: i * 2});
}

list.push({...data, timePoint: 30});
list.push({...data, timePoint: 2 * 60});
list.push({...data, timePoint: 3.5 * 60});
list.push({...data, timePoint: 5 * 60});
list.push({...data, timePoint: 6.5 * 60});
list.push({...data, timePoint: 8 * 60});

const initialState = {
    list
};

function addPatientAnalgesiaData(state = initialState, action) {
    switch (action.type) {

        default:
            return state;

    }
}

export default addPatientAnalgesiaData;