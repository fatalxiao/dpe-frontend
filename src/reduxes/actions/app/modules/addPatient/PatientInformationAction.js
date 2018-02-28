import * as actionTypes from 'reduxes/actionTypes/index';
import {routerPush} from 'reduxes/actions/common/RouterAction';
import PatientApi from 'apis/app/modules/addPatient/PatientApi';

export const updatePatientInformationField = (fieldName, fieldValue) => ({
    type: actionTypes.UPDATE_PATIENT_INFORMATION_FIELD,
    fieldName,
    fieldValue
});

function gestationalDaysHandler(data) {

    let result = 0;

    if (data.gestationalWeeks && !isNaN(data.gestationalWeeks)) {
        result += +data.gestationalWeeks * 7;
    }

    if (data.gestationalDays && !isNaN(data.gestationalDays)) {
        result += +data.gestationalDays;
    }

    return result;

}

export const createOrUpdatePatient = () => (dispatch, getState) => {

    const data = getState().patientInformation.form,
        id = data.id;

    if (!data.groupId || !id || !data.patientName) {
        return;
    }

    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.UPDATE_PATIENT_INFORMATION_REQUEST,
                actionTypes.UPDATE_PATIENT_INFORMATION_SUCCESS,
                actionTypes.UPDATE_PATIENT_INFORMATION_FAILURE
            ],
            api: PatientApi.createOrUpdatePatient,
            params: {
                groupId: data.groupId,
                id,
                patientName: data.patientName,
                age: data.age,
                gestationalDays: gestationalDaysHandler(data),
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