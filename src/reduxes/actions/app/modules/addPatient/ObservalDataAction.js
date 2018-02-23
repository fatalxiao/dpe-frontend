import * as actionTypes from 'reduxes/actionTypes/index';

export const updateObservalDataField = (fieldName, fieldValue) => ({
    type: actionTypes.UPDATE_OBSERVAL_DATA_FIELD,
    fieldName,
    fieldValue
});