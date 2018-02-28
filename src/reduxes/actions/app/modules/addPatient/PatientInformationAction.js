import * as actionTypes from 'reduxes/actionTypes/index';
import {routerPush} from '../../../common/RouterAction';
import AddPatientApi from 'apis/app/modules/AddPatientApi';

export const updatePatientInformationField = (fieldName, fieldValue) => ({
    type: actionTypes.UPDATE_PATIENT_INFORMATION_FIELD,
    fieldName,
    fieldValue
});

export const createPatientInformation = () => (dispatch, getState) => {

    const data = getState().patientInformation.form,
        id = data.id;

    if (!data.groupId || !id || !data.patientName) {
        return;
    }

    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.CREATE_PATIENT_INFORMATION_REQUEST,
                actionTypes.CREATE_PATIENT_INFORMATION_SUCCESS,
                actionTypes.CREATE_PATIENT_INFORMATION_FAILURE
            ],
            api: AddPatientApi.createPatientInformation,
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