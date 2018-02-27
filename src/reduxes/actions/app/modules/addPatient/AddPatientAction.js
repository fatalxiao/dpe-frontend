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

    const patientInformation = getState().patientInformation.form,
        analgesiaData = getState().analgesiaData.data,
        observalData = getState().observalData.form;

    if (!patientInformation.groupId || !patientInformation.id || !patientInformation.patientName) {
        return;
    }

    const params = {
        id: patientInformation.id,
        patient: {
            groupId: patientInformation.groupId,
            patientName: patientInformation.patientName,
            age: patientInformation.age,
            gestationalDays: patientInformation.gestationalDays,
            height: patientInformation.height,
            weight: patientInformation.weight,
            heartRate: patientInformation.heartRate,
            initialVasScore: patientInformation.initialVasScore,
            cervicalDilationAtTimeOfEA: patientInformation.cervicalDilationAtTimeOfEA,
            systolicBloodPressure: patientInformation.systolicBloodPressure,
            diastolicBloodPressure: patientInformation.diastolicBloodPressure,
            foetalHeartRate: patientInformation.foetalHeartRate,
            description: patientInformation.description
        },
        analgesia: analgesiaData.map(item => {

            const result = item;

            function sensoryBlockhandler(key) {
                if (item[key]) {
                    result[key] = item[key].sensoryBlockValue;
                }
            }

            sensoryBlockhandler('thoracicSensoryBlockLeft');
            sensoryBlockhandler('thoracicSensoryBlockRight');
            sensoryBlockhandler('sacralSensoryBlockLeft');
            sensoryBlockhandler('sacralSensoryBlockRight');

        }),
        observal: observalData
    };

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
                routerPush('/app/add-patient/patient-information');
            }
        }
    });

};