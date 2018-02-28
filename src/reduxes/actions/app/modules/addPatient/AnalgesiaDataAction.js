import * as actionTypes from 'reduxes/actionTypes/index';
import {routerPush} from '../../../common/RouterAction';
import AnalgesiaApi from 'apis/app/modules/addPatient/AnalgesiaApi';

export const updateAnalgesiaDataField = (id, fieldName, fieldValue) => ({
    type: actionTypes.UPDATE_ANALGESIA_DATA_FIELD,
    id,
    fieldName,
    fieldValue
});

export const createOrUpdateAnalgesiaData = () => (dispatch, getState) => {

    const data = getState().patientInformation.form,
        id = data.id;

    if (!data.groupId || !id || !data.patientName) {
        return;
    }

    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.UPDATE_ANALGESIA_DATA_REQUEST,
                actionTypes.UPDATE_ANALGESIA_DATA_SUCCESS,
                actionTypes.UPDATE_ANALGESIA_DATA_FAILURE
            ],
            api: AnalgesiaApi.createOrUpdateAnalgesiaData,
            params: {
                groupId: data.groupId,
                id,
                patientName: data.patientName,
                age: data.age,
                gestationalDays: data.gestationalDays,
                height: data.height,
                weight: data.weight,
                heartRate: data.heartRate,
                initialVasScore: data.initialVasScore,
                cervicalDilationAtTimeOfEA: data.cervicalDilationAtTimeOfEA,
                systolicBloodPressure: data.systolicBloodPressure,
                diastolicBloodPressure: data.diastolicBloodPressure,
                foetalHeartRate: data.foetalHeartRate,
                description: data.description
            },
            successCallback() {
                routerPush(`/app/add-patient/analgesia-data/${id}`)(dispatch);
            }
        }
    });

};