import * as actionTypes from 'reduxes/actionTypes/index';

const initialState = {
    form: {
        hasCarbetocin: false,
        hasHemabate: false,
        localAnestheticConsumption: '',
        pcaCount: '',
        manualBolusCount: '',
        firstPcaTime: null,
        firstManualBolusTime: null,
        durationOfSecondStageOfLabor: null,
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
        durationOfLaborAnalgesia: null,
        patientSatisfactionScore: '',
        hasAccidentalDuralPunture: false,
        lateralEpisiotomyVasScore: '',
        hasLateralEpisiotomy: false,
        birthTime: null,
        foetalHeight: '',
        foetalWeight: '',
        oneMinuteApgarScore: '',
        fiveMinuteApgarScore: '',
        hasNicu: false,
        nicuReason: false,
        arterialPh: '',
        arterialBe: '',
        venousPh: '',
        venousBe: '',
        description: ''
    }
};

function observalData(state = initialState, action) {
    switch (action.type) {

        case actionTypes.UPDATE_PATIENT_INFORMATION_FIELD: {

            const form = state.form;
            form[action.fieldName] = action.fieldValue;

            return {
                ...state,
                form
            };

        }

        default:
            return state;

    }
}

export default observalData;