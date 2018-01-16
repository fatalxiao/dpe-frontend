import * as actionTypes from 'reduxes/actionTypes';

import Valid from 'vendors/Valid';

const initialState = {
    steps: [{
        title: 'Patient\nInformation'
    }, {
        title: 'Analgesia\nData'
    }, {
        title: 'Observal\nData'
    }]
};

function analgesiaData(state = initialState, action) {
    switch (action.type) {

        default:
            return state;

    }
}

export default analgesiaData;