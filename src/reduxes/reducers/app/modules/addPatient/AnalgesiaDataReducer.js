import _ from 'lodash';
import * as actionTypes from 'reduxes/actionTypes/index';

function getDefaultData() {

    const data = {
            hasContraction: false,
            vasScore: '',
            thoracicSensoryBlockLeft: null,
            thoracicSensoryBlockRight: null,
            sacralSensoryBlockLeft: null,
            sacralSensoryBlockRight: null,
            bromageScore: '',
            systolicBloodPressure: '',
            diastolicBloodPressure: '',
            heartRate: '',
            pulseOxygenSaturation: ''
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

        case actionTypes.UPDATE_ANALGESIA_DATA_FIELD: {

            const data = _.cloneDeep(state.data),
                updateItem = data.find(item => item.id === action.id);

            if (updateItem) {
                updateItem[action.fieldName] = action.fieldValue;
            }

            if (action.fieldName === 'thoracicSensoryBlockLeft' && updateItem.thoracicSensoryBlockRight === null) {
                updateItem.thoracicSensoryBlockRight = action.fieldValue;
            } else if (action.fieldName === 'thoracicSensoryBlockRight' && updateItem.thoracicSensoryBlockLeft === null) {
                updateItem.thoracicSensoryBlockLeft = action.fieldValue;
            } else if (action.fieldName === 'sacralSensoryBlockLeft' && updateItem.sacralSensoryBlockRight === null) {
                updateItem.sacralSensoryBlockRight = action.fieldValue;
            } else if (action.fieldName === 'sacralSensoryBlockRight' && updateItem.sacralSensoryBlockLeft === null) {
                updateItem.sacralSensoryBlockLeft = action.fieldValue;
            }

            return {
                ...state,
                data
            };

        }

        default:
            return state;

    }
}

export default analgesiaData;