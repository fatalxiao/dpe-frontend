import * as actionTypes from 'reduxes/actionTypes';

const initialState = {
    list: []
};

function sensoryBlock(state = initialState, action) {
    switch (action.type) {

        // get group list
        case actionTypes.GET_SENSORY_BLOCKS_REQUEST: {
            return {
                ...state,
                actionType: actionTypes.GET_SENSORY_BLOCKS_REQUEST
            };
        }

        case actionTypes.GET_SENSORY_BLOCKS_SUCCESS: {
            return {
                ...state,
                list: action.responseData,
                actionType: actionTypes.GET_SENSORY_BLOCKS_SUCCESS
            };
        }

        case actionTypes.GET_SENSORY_BLOCKS_FAILURE: {
            return {
                ...state,
                list: [],
                actionType: actionTypes.GET_SENSORY_BLOCKS_FAILURE
            };
        }

        default:
            return state;

    }
}

export default sensoryBlock;