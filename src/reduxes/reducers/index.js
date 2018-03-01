import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import loadComponent from './common/LoadComponentReducer';
import appToaster from './common/ToasterReducer';
import appNotifier from './common/NotifierReducer';
import asyncMsgSeqReducer from './common/AsyncMsgSeqReducer';

import group from './app/common/GroupReducer';
import patients from './app/common/PatientsReducer';
import sensoryBlock from './app/common/SensoryBlockReducer';

import patientList from './app/modules/PatientListReducer';
import patient from './app/modules/patient/PatientReducer';
import patientInformation from './app/modules/patient/PatientInformationReducer';
import analgesiaData from './app/modules/patient/AnalgesiaDataReducer';
import observalData from './app/modules/patient/ObservalDataReducer';

const rootReducer = combineReducers({

    loadComponent,
    appToaster,
    appNotifier,
    asyncMsgSeqReducer,

    group,
    patients,
    sensoryBlock,

    patientList,
    patient,
    patientInformation,
    analgesiaData,
    observalData,

    router: routerReducer

});

export default rootReducer;