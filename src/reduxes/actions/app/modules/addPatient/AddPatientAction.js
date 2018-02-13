import * as actionTypes from 'reduxes/actionTypes/index';
import {routerPush} from '../../../common/RouterAction';
import AddPatientApi from '../../../../../apis/app/modules/AddPatientApi';

export const addPatientStepPrev = () => dispatch => {
    return dispatch({
        type: actionTypes.ADD_PATIENT_STEP_PREV
    });
};

export const addPatientStepNext = () => dispatch => {
    return dispatch({
        type: actionTypes.ADD_PATIENT_STEP_NEXT
    });
};

export const updateAddPatientStep = activatedStep => dispatch => {
    return dispatch({
        type: actionTypes.ADD_PATIENT_STEP_UPDATE,
        activatedStep
    });
};

export const addPatient = () => (dispatch, getState) => {

    const form = getState().addPatientInformation.form,
        params = {
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
        };

    if (!params.groupId || !params.id || !params.patientName) {
        return;
    }

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