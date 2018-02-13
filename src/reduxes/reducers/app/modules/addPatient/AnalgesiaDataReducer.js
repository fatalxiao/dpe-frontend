import * as actionTypes from 'reduxes/actionTypes/index';

import Valid from 'vendors/Valid';

function getDefaultData() {

    const data = {
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
        list.push({...data, id: i, timePoint: i * 2});
    }

    list.push({...data, id: 10, timePoint: 30});
    list.push({...data, id: 11, timePoint: 2 * 60});
    list.push({...data, id: 12, timePoint: 3.5 * 60});
    list.push({...data, id: 13, timePoint: 5 * 60});
    list.push({...data, id: 14, timePoint: 6.5 * 60});
    list.push({...data, id: 15, timePoint: 8 * 60});

    return list;

}

const initialState = {
    data: getDefaultData()
};

function analgesiaData(state = initialState, action) {
    switch (action.type) {

        default:
            return state;

    }
}

export default analgesiaData;