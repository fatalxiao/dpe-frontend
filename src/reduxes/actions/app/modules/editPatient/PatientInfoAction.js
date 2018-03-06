import * as actionTypes from 'reduxes/actionTypes/index';
import {routerPush} from 'reduxes/actions/common/RouterAction';
import PatientApi from 'apis/app/modules/patient/PatientApi';
import {getPatients} from 'reduxes/actions/app/common/PatientAction';

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

    return dispatch({
        [actionTypes.CALL_API]: {
            types: [
                actionTypes.GET_PATIENT_INFORMATION_REQUEST,
                actionTypes.GET_PATIENT_INFORMATION_SUCCESS,
                actionTypes.GET_PATIENT_INFORMATION_FAILURE
            ],
            api: PatientApi.getPatientById,
            params: {id},
            successResMsgDisabled: true
        }
    });

};

export const createOrUpdatePatient = callback => (dispatch, getState) => {

    const data = getState().patientInfo.form,
        id = data.id;

    if (!data.group || !id || !data.patientName) {
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
                groupId: data.group.id,
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
                getPatients()(dispatch);
                callback && callback();
            }
        }
    });

};