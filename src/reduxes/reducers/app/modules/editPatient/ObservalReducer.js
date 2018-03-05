import _ from 'lodash';
import * as actionTypes from 'reduxes/actionTypes/index';

const DEFAULT_FORM = {
        initialTime: '',
        testDose: '3',
        initialDose: '8',
        pumpConsumption: '',
        bolus: '',
        hasCarbetocin: false,
        hasHemabate: false,
        pcaCount: '',
        manualBolusCount: '',
        firstPcaTime: '',
        firstManualBolusTime: '',
        durationOfSecondStageOfLabor: '',
        hasEpiduralCatheterAdjuestment: false,
        hasEpiduralcatheterReplacement: false,
        hasPrenatalFever: false,
        hasVasoactiveAgent: false,
        isUnabledToPunctureDura: false,
        hasNausea: false,
        hasVomit: false,
        hasPruritus: false,
        hasHypotension: false,
        hasCaesareanSection: false,
        hasInstrumental: false,
        hasPostduralPunctureHeadache: false,
        hasBackPain: false,
        hasParesthesia: false,
        durationOfLaborAnalgesia: '',
        bloodLose: '',
        patientSatisfactionScore: '',
        hasAccidentalDuralPunture: false,
        lateralEpisiotomyVasScore: '',
        hasLateralEpisiotomy: false,
        birthTime: '',
        foetalHeight: '',
        foetalWeight: '',
        oneMinuteApgarScore: '',
        fiveMinuteApgarScore: '',
        hasNicu: false,
        nicuReason: '',
        arterialPh: '',
        arterialBe: '',
        venousPh: '',
        venousBe: '',
        description: ''
    },
    initialState = {

        form: _.cloneDeep(DEFAULT_FORM),

        getActionType: '',
        updateActionType: ''

    };

function observal(state = initialState, action) {
    switch (action.type) {

        case actionTypes.RESET_PATIENT_DATA: {
            return {
                ...state,
                form: _.cloneDeep(DEFAULT_FORM)
            };
        }

        case actionTypes.UPDATE_OBSERVAL_FIELD: {

            const form = _.cloneDeep(state.form);
            form[action.fieldName] = action.fieldValue;

            return {
                ...state,
                form
            };

        }

        // get observal data
        case actionTypes.GET_OBSERVAL_REQUEST: {
            return {
                ...state,
                getActionType: actionTypes.GET_OBSERVAL_REQUEST
            };
        }
        case actionTypes.GET_OBSERVAL_SUCCESS: {

            const form = action.responseData || _.cloneDeep(DEFAULT_FORM);

            return {
                ...state,
                form,
                getActionType: actionTypes.GET_OBSERVAL_SUCCESS
            };

        }
        case actionTypes.GET_OBSERVAL_FAILURE: {
            return {
                ...state,
                getActionType: actionTypes.GET_OBSERVAL_FAILURE
            };
        }

        // update observal data
        case actionTypes.UPDATE_OBSERVAL_REQUEST: {
            return {
                ...state,
                updateActionType: actionTypes.UPDATE_OBSERVAL_REQUEST
            };
        }
        case actionTypes.UPDATE_OBSERVAL_SUCCESS: {
            return {
                ...state,
                updateActionType: actionTypes.UPDATE_OBSERVAL_SUCCESS
            };
        }
        case actionTypes.UPDATE_OBSERVAL_FAILURE: {
            return {
                ...state,
                updateActionType: actionTypes.UPDATE_OBSERVAL_FAILURE
            };
        }

        default:
            return state;

    }
}

export default observal;