import * as actionTypes from 'reduxes/actionTypes/index';
import PatientApi from 'apis/app/modules/patient/PatientApi';
import {resetPatientData} from 'reduxes/actions/app/modules/editPatient/EditPatientAction';

function gestationalDaysHandler(data) {

    let result = 0;

    if (data.gestationalDaysWeeks && !isNaN(data.gestationalDaysWeeks)) {
        result += +data.gestationalDaysWeeks * 7;
    }

    if (data.gestationalDaysDays && !isNaN(data.gestationalDaysDays)) {
        result += +data.gestationalDaysDays;
    }

    return result;

}

export const updatePatientInformationField = (fieldName, fieldValue) => ({
    type: actionTypes.UPDATE_PATIENT_INFORMATION_FIELD,
    fieldName,
    fieldValue
});

export const getPatientInfo = id => dispatch => {

    if (!id) {
        return;
    }

    resetPatientData()(dispatch);

    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.GET_PATIENT_INFO_REQUEST,
                actionTypes.GET_PATIENT_INFO_SUCCESS,
                actionTypes.GET_PATIENT_INFO_FAILURE
            ],
            api: PatientApi.getPatientById,
            params: {id},
            successResMsgDisabled: true
        }
    });

};

export const createPatient = callback => (dispatch, getState) => {

    const data = getState().patientInfo.form;

    if (!data.id || !data.patientName || !data.group) {
        return;
    }

    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.CREATE_PATIENT_REQUEST,
                actionTypes.CREATE_PATIENT_SUCCESS,
                actionTypes.CREATE_PATIENT_FAILURE
            ],
            api: PatientApi.createPatient,
            params: {
                id: data.id,
                patientName: data.patientName,
                groupId: data.group.id
            },
            successCallback() {
                callback && callback();
            }
        }
    });

};

export const createOrUpdatePatient = (id, callback) => (dispatch, getState) => {

    const data = getState().patientInfo.form;

    if (!id) {
        return;
    }

    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.UPDATE_PATIENT_INFO_REQUEST,
                actionTypes.UPDATE_PATIENT_INFO_SUCCESS,
                actionTypes.UPDATE_PATIENT_INFO_FAILURE
            ],
            api: PatientApi.createOrUpdatePatient,
            params: {
                id,
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
                callback && callback();
            }
        }
    });

};