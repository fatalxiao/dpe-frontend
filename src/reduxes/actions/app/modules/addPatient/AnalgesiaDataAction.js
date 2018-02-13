import * as actionTypes from 'reduxes/actionTypes/index';

export const updateAnalgesiaDataField = (fieldName, fieldValue) => ({
    type: actionTypes.UPDATE_ANALGESIA_DATA_FIELD,
    fieldName,
    fieldValue
});