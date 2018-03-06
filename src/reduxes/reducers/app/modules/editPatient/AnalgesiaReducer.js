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
            pulseOxygenSaturation: '',
            fetalHeartRate: ''
        },
        list = [];

    for (let i = 0; i <= 10; i++) {
        list.push({...data, timePoint: i * 2});
    }

    list.push({...data, timePoint: 30});
    list.push({...data, timePoint: 2 * 60});
    list.push({...data, timePoint: 3.5 * 60});
    list.push({...data, timePoint: 5 * 60});
    list.push({...data, timePoint: 6.5 * 60});
    list.push({...data, timePoint: 8 * 60});
    list.push({...data, timePoint: 9.5 * 60});
    list.push({...data, timePoint: 11 * 60});

    return list;

}

const initialState = {

    data: getDefaultData(),

    getActionType: '',
    updateActionType: ''

};

function analgesia(state = initialState, action) {
    switch (action.type) {

        case actionTypes.RESET_PATIENT_DATA: {
            return {
                ...state,
                data: getDefaultData()
            };
        }

        case actionTypes.UPDATE_ANALGESIA_FIELD: {

            const data = _.cloneDeep(state.data),
                updateItem = data.find(item => item.timePoint === action.timePoint);

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

        // get analgesia data
        case actionTypes.GET_ANALGESIA_REQUEST: {
            return {
                ...state,
                getActionType: actionTypes.GET_ANALGESIA_REQUEST
            };
        }
        case actionTypes.GET_ANALGESIA_SUCCESS: {

            const data = getDefaultData();

            if (action.responseData && action.responseData.length > 0) {
                for (let item of action.responseData) {
                    Object.assign(data.find(dataItem => dataItem.timePoint === item.timePoint), item);
                }
            }

            return {
                ...state,
                data,
                getActionType: actionTypes.GET_ANALGESIA_SUCCESS
            };

        }
        case actionTypes.GET_ANALGESIA_FAILURE: {
            return {
                ...state,
                getActionType: actionTypes.GET_ANALGESIA_FAILURE
            };
        }

        // update analgesia data
        case actionTypes.UPDATE_ANALGESIA_REQUEST: {
            return {
                ...state,
                updateActionType: actionTypes.UPDATE_ANALGESIA_REQUEST
            };
        }
        case actionTypes.UPDATE_ANALGESIA_SUCCESS: {
            return {
                ...state,
                updateActionType: actionTypes.UPDATE_ANALGESIA_SUCCESS
            };
        }
        case actionTypes.UPDATE_ANALGESIA_FAILURE: {
            return {
                ...state,
                updateActionType: actionTypes.UPDATE_ANALGESIA_FAILURE
            };
        }

        default:
            return state;

    }
}

export default analgesia;