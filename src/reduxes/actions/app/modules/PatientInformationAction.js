import * as actionTypes from 'reduxes/actionTypes';
import AddPatientApi from 'apis/app/modules/AddPatientApi';
import {routerPush} from 'reduxes/actions/common/RouterAction';

export const updatePatientInformationField = (fieldName, fieldValue) => ({
    type: actionTypes.UPDATE_PATIENT_INFORMATION_FIELD,
    fieldName,
    fieldValue
});

export const addPatient = () => (dispatch, getState) => {

    const form = getState().addPatientInformation.form,
        params = {
            groupId: form.groupId,
            id: form.id,
            patientName: form.patientName,
            age: form.age || null,
            gestationalDays: form.gestationalDays || null,
            height: form.height || null,
            weight: form.weight || null,
            heartRate: form.heartRate || null,
            initialVasScore: form.initialVasScore || null,
            cervicalDilationAtTimeOfEA: form.cervicalDilationAtTimeOfEA || null,
            systolicBloodPressure: form.systolicBloodPressure || null,
            diastolicBloodPressure: form.diastolicBloodPressure || null,
            foetalHeartRate: form.foetalHeartRate || null,
            description: form.description
        };

    // if (!params.groupId || !params.id) {
    //     return;
    // }

    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.ADD_PATIENT_REQUEST,
                actionTypes.ADD_PATIENT_SUCCESS,
                actionTypes.ADD_PATIENT_FAILURE
            ],
            api: AddPatientApi.addPatient,
            params,
            successCallback() {
                routerPush('/app/add-patient/analgesia-data');
            }
        }
    });

};