import * as actionTypes from 'reduxes/actionTypes/index';

export const updateAnalgesiaDataField = (id, fieldName, fieldValue) => ({
    type: actionTypes.UPDATE_ANALGESIA_DATA_FIELD,
    id,
    fieldName,
    fieldValue
});