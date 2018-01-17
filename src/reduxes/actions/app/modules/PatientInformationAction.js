import * as actionTypes from 'reduxes/actionTypes';
import AddPatientApi from 'apis/app/modules/AddPatientApi';
import {routerPush} from 'reduxes/actions/common/RouterAction';

export const updatePatientInformationField = (fieldName, fieldValue) => ({
    type: actionTypes.UPDATE_PATIENT_INFORMATION_FIELD,
    fieldName,
    fieldValue
});

export const addPatient = () => (dispatch, getState) => {

    const form = getState().addPatientInformation.form;

    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.ADD_PATIENT_REQUEST,
                actionTypes.ADD_PATIENT_SUCCESS,
                actionTypes.ADD_PATIENT_FAILURE
            ],
            api: AddPatientApi.addPatient,
            params: {
                groupId: form.groupId,
                id: form.id,
                patientName: form.patientName,
                age: form.age,
                gestationalDays: form.gestationalDays,
                height: form.height,
                weight: form.weight,
                heartRate: form.heartRate,
                initialVasScore: form.initialVasScore,
                cervicalDilationAtTimeOfEA: form.cervicalDilationAtTimeOfEA,
                systolicBloodPressure: form.systolicBloodPressure,
                diastolicBloodPressure: form.diastolicBloodPressure,
                foetalHeartRate: form.foetalHeartRate,
                description: form.description
            },
            successCallback() {
                routerPush('/app/add-patient/analgesia-data');
            }
        }
    });

};