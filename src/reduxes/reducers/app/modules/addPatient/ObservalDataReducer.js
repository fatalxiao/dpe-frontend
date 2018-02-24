import * as actionTypes from 'reduxes/actionTypes/index';

const initialState = {
    form: {
        hasCarbetocin: false,
        hasHemabate: false,
        localAnestheticConsumption: '',
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